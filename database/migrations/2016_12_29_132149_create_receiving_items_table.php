<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReceivingItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receiving_items', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id');
            $table->integer('qty');
            $table->string('unit');
            $table->string('title');
            $table->integer('receiving_form_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('receiving_items');
    }
}
