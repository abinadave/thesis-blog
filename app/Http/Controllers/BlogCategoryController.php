<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\BlogCategory as BlogCategory;

class BlogCategoryController extends Controller
{

    public function insert(Request $request){
    	$this->validate($request, [
            'name' => 'required|unique:blog_categories|max:100|min:3',
        ]);
    	$blogcat = new BlogCategory;
    	$blogcat->name = $request->input('name');
    	$blogcat->save();
    	return response()->json([
			'model' => $blogcat
		]);
    }
}
