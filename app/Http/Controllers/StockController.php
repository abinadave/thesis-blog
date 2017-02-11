<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Stock as Stock;

class StockController extends Controller
{
    public function saveStock($pid){
    	$stock = new Stock;
    	$stock->product_id = $pid;
    	$stock->running_balance = 0;
    	$stock->save();
    	return $stock;
    }
}
