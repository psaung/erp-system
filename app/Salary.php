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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
