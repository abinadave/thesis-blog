<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Cart as Cart;

class CartController extends Controller
{
    public function saveAll(Request $request){
    	$items = $request->input('carts');
    	$saved = 0;
    	$rid = $request->input('reservation_id');
    	foreach ($items as $key => $item) {
    		$cart = new Cart;
    		$cart->reservation_id = $rid;
    		$cart->product_id = $item['id'];
    		$cart->qty = $item['qty'];
    		$cart->color = $item['color'];
    		$cart->size = $item['size'];
            $cart->client_id = 0;
    		$rs = $cart->save();
    		if ($rs) {
    			++$saved;
    		}
    	}
    	return response()->json([
    		'saved' => $saved
    	]);
    }
}
