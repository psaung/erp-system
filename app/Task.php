<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // task status
    const PROGRESS = 'progress';
    const POSTPONE = 'postpone';
    const FAIL     = 'fail';
    const COMPLETE = 'complete';
    
    protected $fillable = [
        'user_id',
        'name',
        'description',
        'start_date',
        'end_date',
        'overdue_date',
        'status',
        'percentage',
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
