<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayrollmetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payrollmetas', function (BluePrint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('reason');
            $table->string('detail')->nullable();
            $table->string('type'); // 
            $table->date('date');
            $table->integer('value');

            $table->timestamps();
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
        Schmea::dropIfExists('payrollmetas');
    }
}
