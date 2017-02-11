<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Size as Size;
use DB;

class SizeController extends Controller
{
    public function getUniqueByCat($cid){
         return Size::join('products', 'products.id', '=', 'sizes.pid')
        ->where('products.category', $cid)
        ->distinct('size')
        ->pluck('size'); 
    }

    public function saveSizes($arrOfSizes, $pid){
    	$userId = session('id');
    	$num = count($arrOfSizes); $saved = array();
    	foreach ($arrOfSizes as $key => $value) {
    		$size = new Size;
    		$size->pid = $pid;
    		$size->size = $value;
    		$size->created_by = $userId;
    		$rs = $size->save();
    		if ($rs) { array_push($saved, $size); }
    	}
    	return array('a' => $num, 'b' => $saved);
    }
}
