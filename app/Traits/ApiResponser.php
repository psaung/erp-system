<?php

namespace App\Traits;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

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
        return response()->json(['error' => $message, 'code' => $code], $code);
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

    protected function showMessage($message, $code = 200)
    {
        return $this->successResponse(['data' => $message], $code);
    }
}
