<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    //
    protected $fillable = [
        'name',
        'description'
    ];

    protected $hidden = [
        'pivot',
    ];

    public function users()
    {
        // belongs to many user
        return $this->belongsToMany(User::class);
    }
}
