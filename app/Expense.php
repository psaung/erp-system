<?php

namespace App;

use App\Department;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    //
    protected $fillable = [
        'department_id',
        'time',
        'reason',
        'voucher',
        'cost',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
