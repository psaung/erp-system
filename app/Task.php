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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
