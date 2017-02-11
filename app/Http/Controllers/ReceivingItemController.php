<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\ReceivingItem as ReceivingItem;
use DB;

class ReceivingItemController extends Controller
{
    public function saveItems(Request $request){
    	$items = $request->input('items');
    	$rid = $request->input('receive_form_id');
    	foreach ($items as $product) {
    		$receivingItem = new ReceivingItem;
	    	$receivingItem->receiving_form_id = $rid;
	    	$receivingItem->product_id = $product['id'];
	    	$receivingItem->qty = $product['qty'];
	    	$receivingItem->unit = $product['unit'];
	    	$receivingItem->title = $product['title'];
	    	$receivingItem->save();
	    	$this->updateStocks($product);
    	}
    }

    public function updateStocks($product){
    	$remaining = 0;
    	DB::table('stocks')->where('product_id', $product['id'])->increment('running_balance', $product['qty']);
    }
}
