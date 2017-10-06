<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leave extends Model
{
    const PAID_LEAVE = 10;
    const MEDICAL_LEAVE = 10;

    //
    protected $fillable = [
        'user_id',
        'year',
        'paid',
        'medical',
    ];

    protected $hidden = [
    ];
}
