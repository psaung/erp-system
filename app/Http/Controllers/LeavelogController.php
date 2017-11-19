<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;
use Carbon\Carbon;
use App\Leavelog;
use Illuminate\Http\Request;

class LeavelogController extends ApiController 
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $leaves = Leavelog::all();
        $leaves = Leavelog::with('user')->get();
        if(request()->has('month')) {
          $attribute = request()->month; 
          $times = $leaves->pluck('time');
          $result = [];
          forEach($times as $key => $value) {
            $ddd = Carbon::parse($value)->format('m');
            if($ddd == $attribute) {
              array_unshift($result, $leaves[$key]);
            }   
          } 
          $leaves = collect($result);
        } 
        if(request()->has('daymonth')) {
          $attribute = request()->daymonth; 
          $times = $leaves->pluck('time');
          $result = [];
          forEach($times as $key => $value) {
            $ddd = Carbon::parse($value)->format('d-m');
            if($ddd == $attribute) {
              array_unshift($result, $leaves[$key]);
            }   
          } 
          $leaves = collect($result);
        }
        return $this->showAll($leaves);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
