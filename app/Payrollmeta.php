<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Payrollmeta extends Model
{
    // payrollmeta type
    const PENALTY = 'penalty';
    const BONUS = 'bonus';
    const HEALTHCARE = 'healthcare';
    const OVERTIME = 'overtime';
    const TRANSPORTATION = 'transportation';

    protected $fillable = [
        'user_id',
        'reason',
        'detail',
        'type',
        'date',
        'value',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
