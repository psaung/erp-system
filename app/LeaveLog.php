<?php

namespace App;

use App\User;
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
