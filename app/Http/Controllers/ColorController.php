<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Color as Color;

class ColorController extends Controller
{
    public function saveColors($arrOfColors, $pid){
        $userId = session('id');
    	$num = count($arrOfColors); $saved = array();
    	foreach ($arrOfColors as $key => $value) {
    		$color = new Color;
    		$color->pid = $pid;
    		$color->color = $value;
    		$color->created_by = $userId;
    		$rs = $color->save();
    		if ($rs) { 
                array_push($saved, $color);
            }
    	}
    	return array('a' => $num, 'b' => $saved);
    }
}
