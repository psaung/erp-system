<?php 
namespace App;

use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    //
    protected $fillable = [
        'user_id',
        'bonus',
        'salary',
        'penalty',
        'date',
        'transportation',
        'healthcare',
        'overtime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
