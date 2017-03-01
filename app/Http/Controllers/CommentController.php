<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Comment as Comment;

class CommentController extends Controller
{
    public function fetchProductComment($id){
        return response()->json([

        ]);
    }

    public function insert(Request $request){
    	$reviews = new Comment;
    	$reviews->comment = $request->input('comment');
    	$reviews->product_id = $request->input('product_id');
    	$reviews->user_id = 0;
        $reviews->true_date = $request->input('true_date');
    	$reviews->save();
    	return response()->json([
    		'comment' => $reviews
    	]);
    	// return reviews;
    }
}
