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
