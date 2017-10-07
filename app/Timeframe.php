<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Timeframe extends Model
{
    protected $fillable = [
        'user_id',
        'date',
        'in',
        'out',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
