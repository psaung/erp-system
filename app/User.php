<?php

namespace App;

use App\Department;
use App\Timeframe;
use App\Payroll;
use App\Salary;
use App\Task;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    const VERIFIED_USER = '1';
    const UNVERIFIED_USER = '0';

    const ADMIN_USER = 'admin';
    const REGULAR_USER = 'employee';
    const MANAGER = 'manager';
    const HR_MANAGER = 'hr_manager';
    const FINANCE = 'finance';

    protected $table = 'users';
    // public $transformer = UserTransformer::class;
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password',
        'verified',
        'verification_token',
        'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'pivot',
        'password', 
        'remember_token',
        'verification_token',
    ];

    public function setNameAttribute($name)
    {
        $this->attributes['name'] = strtolower($name);
    }

    public function getNameAttribute($name)
    {
        return ucwords($name);
    }

    public function setEmailAttribute($email)
    {
        $this->attributes['email'] = strtolower($email);
    }

    public function isVerified()
    {
        return $this->verified == User::VERIFIED_USER;
    }

    public function isAdmin()
    {
        return $this->role == User::ADMIN_USER;
    }

    public function isManager()
    {
        return $this->role == User::MANAGER;
    }

    public function departments()
    {
        return $this->belongsToMany(Department::class);
    }

    public function timeframes()
    {
        return $this->hasMany(Timeframe::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function salaries()
    {
        return $this->hasMany(Salary::class);
    }

    public function payrolls()
    {
        return $this->hasMany(Payroll::class);
    }

    public static function generateVerificationCode()
    {
        return str_random(40);
    }
}
