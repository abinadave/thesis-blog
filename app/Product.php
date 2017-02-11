<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{	
	use SoftDeletes;
    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $dates = ['deleted_at'];
}
