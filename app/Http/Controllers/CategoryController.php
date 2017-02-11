<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Category as Category;

class CategoryController extends Controller
{
    public function remove($id){
        $cat = Category::findOrFail($id);
        $rs = $cat->delete();
        return response()->json([
            'deleted' => $rs
        ]);
    }

    public function fetch(){
    	$data = Category::all();
    	echo json_encode($data);
    }

    public function insert(Request $request){
        $this->validate($request, [
            'name' => 'required|unique:categories|max:40|min:3'
        ]);

    	$category = new Category;
    	$category->name = $request->input('name');
    	$category->save();	
    	return response()->json([
    		'id' => $category->id
    	]);
    }
}
