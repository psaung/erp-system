<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    protected $fillable = [
        'user_id',
        'salary',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
