<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayrollsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payrolls', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();

            $table->integer('bonus')->default(0);
            $table->integer('salary');
            $table->integer('penalty')->default(0);
            $table->date('date'); // Carbon::createFromFormat('Y-m', $dateVariable)
            $table->integer('transportation')->default(0);
            $table->integer('healthcare')->default(0);
            $table->integer('overtime')->default(0);

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payrolls');
    }
}
