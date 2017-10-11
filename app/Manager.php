<?php

namespace App;

class Manager extends User
{
    protected static function boot() 
    {
        parent::boot();
    }

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
}
