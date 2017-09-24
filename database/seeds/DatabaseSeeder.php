<?php
use App\User;
use App\Department;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        User::truncate();
        Department::truncate();
        DB::table('department_user')->truncate();

        $usersQuantity = 5;
        $departmentsQuantity = 10;

        factory(Department::class, $departmentsQuantity)->create();
        factory(User::class, $usersQuantity)->create()->each(
            function($user) {
                $departments= Department::all()->random()->id;
                $this->assignDepartmentForUser($user->id, $departments);
                //$user->departments()->save($departments);
            }
        );
    }

    private function assignDepartmentForUser($user_id, $department_id) {
        DB::table('department_user')->insert([
            'user_id' => $user_id,
            'department_id' => $department_id,
        ]);
    }
}
