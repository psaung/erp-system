<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;
use Carbon\Carbon;
use App\Payroll;
use Illuminate\Http\Request;

class PayrollController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payrolls = Payroll::all();
        if(request()->has('year')) {
            $payrolls = $this->getSalaryByYear(request()->year, $payrolls);
        }
        if(request()->has('month')) {
            $payrolls = $this->getSalaryByMonth(request()->month, $payrolls);
        }
        return $this->showAll($payrolls);
    }

    private function getSalaryByMonth($month, $payrolls) {
        $result = [];
        forEach($payrolls as $key => $value) {
            $monthItem = Carbon::parse($value->date)->format('m');
            if($monthItem == $month) {
                array_unshift($result, $value);
            }
        }
        return collect($result);
    }

    private function getSalaryByYear($year, $payrolls) {
        $result = [];
        forEach($payrolls as $value) {
            $monthItem = Carbon::parse($value->date)->format('Y');
            if($monthItem == $year) {
                array_unshift($result, $value);
            }
        }
        return collect($result);
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
