<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\BlogTag as BlogTag;
class BlogTagController extends Controller
{
    public function insert(Request $request){
    	$this->validate($request, [
            'name' => 'required|unique:blog_tags|max:100|min:3',
        ]);
    	$name = $request->input('name');
    	$tag = new BlogTag;
    	$tag->name = $name;
    	$tag->save();
    	return response()->json([
    		'model' => $tag
    	]);
    }
}
