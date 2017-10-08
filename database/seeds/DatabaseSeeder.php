<?php
use App\User;
use App\Department;
use App\Expense;
use App\Leave;
use App\Leavelog;
use App\Salary;
use App\Payroll;
use App\Task;
use App\Timeframe;
use App\Payrollmeta;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    private $faker;

    public function __construct()
    {
        $this->faker = Faker::create();
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
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
        $LeaveLogQuantity = 20;

        $this->createAdminUser();

        factory(Department::class, $departmentsQuantity)->create();
        factory(User::class, $usersQuantity)->create()->each(
            function($user) {
                $departments= Department::all()->random()->id;
                $this->assignDepartmentForUser($user->id, $departments);
                $this->assignSalaryForUser($user->id);
                $this->assignLeavesForUser($user->id);
                $this->assignTaskForUser($user->id);
                $this->assignTimeFrameForUser($user->id);
                $this->assignPayRollsMeta($user->id);
                $this->assignPayRollsForUser($user->id);
                //$user->departments()->save($departments);
            }
        );
        factory(Expense::class, $expenseQuantity)->create();
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

    /*
     * All user must have each salary value. 
     *
     * @return void
     */
    private function assignSalaryForUser($user_id) {
        DB::table('salaries')->insert([
            'user_id' => $user_id,
            'salary' => $this->faker->numberBetween(100, 3000),
        ]);
    }

    /*
     * All user must have their leaves quota.
     *
     * @return void
     */ 
    private function assignLeavesForUser($user_id) {
        $y = Carbon::now()->year;
        DB::table('leaves')->insert([
            'user_id' => $user_id,
            'year' => $y,
            'paid' => $this->faker->numberBetween(5, 10),
            'medical' => $this->faker->numberBetween(5, 10),
        ]);
    }

    /*
     * All user must have each own individual task
     *
     * @return void
     */
    private function assignTaskForUser($user_id) {
        $start = Carbon::now('Asia/Rangoon')->subDays(rand(1, 30))->toDateString();
        $end = Carbon::now('Asia/Rangoon')->addDay(rand(1, 30))->toDateString();
        DB::table('tasks')->insert([
            'user_id' => $user_id,
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph(1),
            // Carbon::createFromFormat('Y-m', $dateVariable)
            'start_date' => $start,
            'end_date' => $end, 
            'status' => Task::PROGRESS,
            'percentage' => $this->faker->numberBetween(1, 99)
        ]);
    }

    private function assignTimeFrameForUser($user_id) {
        // get 10 days without weekend with Carbon week difference
        $firstWeekStart = Carbon::now('Asia/Rangoon')->startOfWeek()->subDays(7);
        $loop= 2;
        $idx = 0;
        while($idx < $loop) {
            for($i = 0; $i < 5; $i++) {
                $ddate = $firstWeekStart->addDay($i + ($idx*7))->toDateString();
                DB::table('timeframes')->insert([
                    'user_id' => $user_id,
                    'date' => $ddate,
                    'in' => Carbon::createFromFormat('H-m', '9-00')->format('H:i:s'),
                    'out' => Carbon::createFromFormat('H-m', '17-30')->format('H:i:s'),
                ]);
            }
            $idx = $idx + 1;
        }
    }

    private function assignPayRollsMeta($user_id) {
        $type_arr = [ Payrollmeta::PENALTY, Payrollmeta::BONUS, Payrollmeta::HEALTHCARE, Payrollmeta::OVERTIME, Payrollmeta::TRANSPORTATION ];
        $firstWeekStart = Carbon::now('Asia/Rangoon')->startOfWeek()->subDays(7);
        $loop= 2;
        $idx = 0;
        while($idx < $loop) {
            for($i = 0; $i < 5; $i++) {
                $ddate = $firstWeekStart->addDay($i + ($idx*7))->toDateString();
                DB::table('payrollmetas')->insert([
                    'user_id' => $user_id,
                    'date' => $ddate,
                    'reason' => $this->faker->word,
                    'detail' => $this->faker->paragraph(1),
                    'type' => $this->faker->randomElement($type_arr),
                    'value' => $this->faker->numberBetween(0, 20),
                ]);
            }
            $idx = $idx + 1;
        }
    }

    private function assignPayRollsForUser($user_id) {
        $lastMonth = Carbon::now('Asia/Rangoon')->subMonth(1)->endOfMonth()->toDateString();
        $thisMonth = Carbon::now('Asia/Rangoon')->endOfMonth()->toDateString();
        $arr = [$lastMonth, $thisMonth];
        foreach($arr as $item) {
            DB::table('payrolls')->insert([
                'user_id' => $user_id,
                'bonus'=> $this->faker->numberBetween(0, 20),
                'salary' =>  DB::table('salaries')->where('user_id', '=', $user_id)->get()[0]->salary,
                'penalty' => $this->faker->numberBetween(0, 20),
                'date' => $item,
                'transportation' => $this->faker->numberBetween(0, 20),
                'healthcare' => $this->faker->numberBetween(0, 20),
                'overtime' => $this->faker->numberBetween(0, 20),
            ]);
        }
    }
}
