<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\EventCategory as EventCategory;

class EventCategoryController extends Controller
{
    public function insert(Request $request){
    	$this->validate($request, [
	        'name' => 'required|unique:event_categories|max:100'
	    ]);
    	$eventCategory = new EventCategory;
    	$eventCategory->name = $request->input('name');
    	$eventCategory->save();
    	return $eventCategory;
    }

    public function fetch(){
    	return EventCategory::orderBy('id','desc')->get();
    }
}
