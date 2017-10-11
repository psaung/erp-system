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
    
    /*
     * check the attribute of the model , return false it not has.
     *
     *
     * @return boolean
     */ 
    public function hasAttribute($idx)
    {
        
        $attributes = [];
        $attributes['id'] = ['id'];

        forEach($this->fillable as $value) {
            $attributes[$value] = $value;
        }
        
        return isset($attributes[$idx]) ? true : false;
    }

    // 

    public function users()
    {
        // belongs to many user
        return $this->belongsToMany(User::class);
    }
}
