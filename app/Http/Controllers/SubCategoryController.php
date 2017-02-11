<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\SubCategory as SubCategory;

class SubCategoryController extends Controller
{
    public function insert(Request $request){
    	$this->validate($request, [
            'name' => 'required|unique:sub_categories|max:50|min:3',
            'category' => 'required|numeric'
        ]);
        $subCategory = new SubCategory;
        $subCategory->name = $request->input('name');
        $subCategory->category = $request->input('category');
        $subCategory->save();
        return $subCategory;
    }
}
