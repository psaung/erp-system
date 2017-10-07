<?php

use App\User;
use App\Department;
use App\Expense;
use App\Leave;
use App\Leavelog;
use App\Payroll;
use App\Salary;
use App\Task;
use App\Timeframe;

use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'verified' => $verified = $faker->randomElement([User::VERIFIED_USER, User::UNVERIFIED_USER]),
        'verification_token' => $verified == User::VERIFIED_USER ? null : User::generateVerificationCode(),
        'role' => $faker->randomElement([User::REGULAR_USER, User::MANAGER, User::HR_MANAGER, User::FINANCE]),
    ];
});

$factory->define(Department::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(1),
    ];
});

$factory->define(Expense::class, function (Faker\Generator $faker) {
    return [
        'department_id' =>  Department::all()->random()->id,
        'time' => $faker->dateTimeBetween('-3 months', 'now'),
        'reason' => $faker->word,
        'cost' => $faker->numberBetween(100, 1000),
    ];
});

/* 
$factory->define(Leave::class, function (Faker\Generator $faker) {
    $y = Carbon::now()->year;
    return [
        'user_id' =>  User::all()->random()->id,
        'year' => $faker->numberBetween($y-1, $y),
        'paid' => $faker->numberBetween(5, 10),
        'medical' => $faker->numberBetween(5, 10),
    ];
}); */

$factory->define(Leavelog::class, function (Faker\Generator $faker) {
    return [
        'user_id' =>  User::all()->random()->id,
        'time' => $faker->dateTimeBetween('-3 months', 'now'),
        'reason' => $faker->word,
        'type' => $faker->randomElement([Leavelog::MEDICAL, Leavelog::PAID]),
        'period' => $faker->randomElement([Leavelog::HALF_DAY, Leavelog::FULL_DAY]),
    ];
});

/*
    This is just a reference code
    $factory->define(Transition::class, function (Faker\Generator $faker) {
        $seller = Seller::has('products')->get->random();
        $buyer = User::all()->except($seller->id)->random();

        return [
            'quantity' => $faker->numberBetween(1, 3),
            'buyer_id' => $buyer->id,
            'product_id' => $seller->products->random()->id,
        ];
    });
*/
