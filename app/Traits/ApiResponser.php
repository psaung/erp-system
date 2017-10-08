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
        return $this->successResponse(['data' => $collection], $code);
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
    protected function sortData(Collection $collection, $transformer)
    {
        if ($request()->has('sort_by')) {
            $attributes = $transformer::originalAttribute(request()->sort_by);
            $collection = $collection->sortyBy->{$attribute};
        }

        return $collection;
    }

    /*
     * Filter result with the params
     *
     * @return Collection
     */
    protected function filterData(Collection $collection, $transformer)
    {
        foreach (request()->query() as $query => $value) {
            $attribute = $transformer::originalAttribute($query);

            if(isset($attribute, $value)) {
                $collection = $collection->where($attribute, $value);
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
