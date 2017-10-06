<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    //
    protected $fillable = [
        'department_id',
        'time',
        'reason',
        'voucher',
        'cost',
    ];
}
