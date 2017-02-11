<?php

use Illuminate\Database\Seeder;

class BlogTagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
        	'name' => str_random(10)
        ]);
    }
}
