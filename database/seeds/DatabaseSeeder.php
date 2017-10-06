<?php
use App\User;
use App\Department;
use App\Expense;
use App\Leave;
use App\Leavelog;

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
        Expense::truncate();
        Leave::truncate();
        Leavelog::truncate();
        DB::table('department_user')->truncate();

        $usersQuantity = 5;
        $departmentsQuantity = 10;
        $expenseQuantity = 10;
        $LeaveQuantity = 3;
        $LeaveLogQuantity = 20;

        $this->createAdminUser();

        factory(Department::class, $departmentsQuantity)->create();
        factory(User::class, $usersQuantity)->create()->each(
            function($user) {
                $departments= Department::all()->random()->id;
                $this->assignDepartmentForUser($user->id, $departments);
                //$user->departments()->save($departments);
            }
        );
        factory(Expense::class, $expenseQuantity)->create();
        factory(Leave::class, $LeaveQuantity)->create();
        factory(Leavelog::class, $LeaveLogQuantity)->create();
    }
    
    /*
     * All of the infromation for admin user are created as the default 
     * since the database seeeding stage.
     *
     * @return void
     */
    private function createAdminUser()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin123'),
            'role' => 'admin',
            'verified' => '1'
        ]);
    }
    
    /*
     * All user must have departments except super admin and General Manager. 
     * Set department for each users.
     *
     * @return void
     */ 
    private function assignDepartmentForUser($user_id, $department_id) {
        DB::table('department_user')->insert([
            'user_id' => $user_id,
            'department_id' => $department_id,
        ]);
    }
}
