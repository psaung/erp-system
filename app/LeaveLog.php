<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leavelog extends Model
{
    /* PERIORD */
    const HALF_DAY = 'half day';
    const FULL_DAY = 'full day';

    /* type */
    const MEDICAL = 'medical';
    const PAID = 'paid';
    const NONPAID = 'nonpaid';
    
    //
    protected $fillable = [
        'user_id',
        'time',
        'reason',
        'type',
        'period',        
    ];
}
