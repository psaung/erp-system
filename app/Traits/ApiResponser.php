<?php

namespace App\Traits;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Pagination\LengthAwarePaginator;

trait ApiResponser
{

    /**
     * Display result with json format and marked as private method
     *
     * @return \Illumiate\Http\Response
     */
    private function successResponse($data, $code)
    {
        return response()->json($data, $code);
    }
    
    /*
     * Display error result with json format + http status
     *
     *
     * @return \Illuminate\Http\Response
     */
    protected function errorResponse($message, $code)
    {
        return response()->json(['error' => [ 'message' => $message ], 'code' => $code], $code);
    }

    /*
     * Display all entities with json format
     *
     *
     * @return \Illuminate\Http\Response
     */
    protected function showAll(Collection $collection, $code = 200)
    {
        if($collection->isEmpty()) {
            return $this->successResponse(['data' => $collection, 'count' => 0], $code);
        }
        $collection = $this->filterData($collection);
        $collection = $this->sortData($collection)->values();

        $count = $this->totalCount($collection);
        return $this->successResponse(['data' => $collection, 'count' => $count], $code);
    }
    
    /*
     * Display a single entity with json format 
     *
     *
     * @return \Illuminate\Http\Response
     */
    protected function showOne(Model $model, $code = 200)
    {
        return $this->successResponse(['data' => $model], $code);
    }

    /*
     * Sort result via specific transformer
     *
     * @return Collection
     */
    protected function sortData(Collection $collection)
    {
        if (request()->has('sort_by')) {
            $attribute = request()->sort_by;
            // sortBy output is not array(refrence from https://stackoverflow.com/questions/30717773/laravel-sorted-collection-output-is-not-an-array)
            // need to rekey after the sort by calling values function
            $collection = $collection->sortBy($attribute);
        }

        return $collection;
    }

    /*
     * Get the number of items in a collection 
     *
     * @return Number
     */
    protected function totalCount(Collection $collection) 
    {
        return $collection->count();
    }

    /*
     * Filter result with the params
     *
     * @return Collection
     */
    protected function filterData(Collection $collection)
    {
        $getOnlyItem = $collection->first();
        foreach (request()->query() as $query => $value) {
            if($getOnlyItem->hasAttribute($query)) {
                if(strpos($value, ',') !== false) {
                    $value = explode(',', $value);
                    $collection = $collection->whereIn($query, $value);
                } else {
                    $collection = $collection->where($query, $value);
                }
            }
        }

        return $collection;
    }  
    
    /*
     * Transform api result 
     *
     * @return 
     */ 
    protected function transformData($data, $transformer)
    {
        // $transformation = fractal($data, new $transformer);
        return $transformer;
        // return $transformation->toArray();
    }

    /*
     * Pagination
     *
     * @return Collection
     */
    protected function paginate(Collection $collection)
    {
        $rules = [
            'per_page' => 'integer|min:2|max:50',
        ];

        Validator::validate(request()->all(), $rules);

        $page = LengthAwarePginator::resolveCurrentPage();

        $perPage = 15;
        if(request()->has('per_page')) {
            $perPage = (int) request()->per_page;
        }

        $results = $collection->slice(($page - 1) * $perPage, $perPage)->values();

        $paginated = new LengthAwarePagination($results, $collection->count(), $perPage, $page,[
            'path' => LengthAwarePagination::resolveCurrentPath(),
        ]);

        $paginated->appends(request()->all());

        return $paginated;
    }

    protected function showMessage($message, $code = 200)
    {
        return $this->successResponse(['data' => $message], $code);
    }
}
