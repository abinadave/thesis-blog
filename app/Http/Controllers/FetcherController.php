<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;
class FetcherController extends Controller
{
    public function productManagementGuest(){
       return $this->categoryMnagment();
    }

    public function blogManagement(){
        return response()->json([
            'blog_files' =>\App\BlogFile::all(),
            'blogs' => \App\Blog::orderBy('id','desc')->get()
        ]);
    }

    public function categoryManagement(){
        return response()->json([
            'categories' => \App\Category::orderBy('name','asc')->get(),
            'sub_categories' => \App\SubCategory::all()
        ]);
    }

    public function categoryMnagment(){
        return response()->json([
            'products'   => \App\Product::all(),
            'categories' => \App\Category::all(),
            'sub_categories' => \App\SubCategory::orderBy('name','asc')->get()
        ]);
    }

    public function receivingManagement(){
        return response()->json([
            'receiving_forms' => \App\ReceivingForm::orderBy('id','desc')->get(),
            'receiving_items' => \App\ReceivingItem::all()
        ]);
    }

    public function trashedItemManagement(){
        return response()->json([
            'categories' => \App\Category::all(),
            'products' => \App\Product::onlyTrashed()->get()
        ]);
    }

    public function clientManagement(){
        return $this->forGuest();
    }

    public function msgManagement(){
        return response()->json([
            'messages' => \App\Message::orderBy('id','desc')->get()
        ]);
    }

    public function reservationManagement(){
        return response()->json([
            'carts'        => \App\Cart::all(),
            'reservations' => \App\Reservation::orderBy('id','desc')->get(),
            'users'        => \App\User::all()
        ]);
    }

	public function forGuest(){
		return response()->json([
            'categories' => \App\Category::orderBy('name', 'asc')->get(),
            'products'   => \App\Product::orderBy('id', 'desc')->get(),
            'colors'     => \App\Color::all(),
            'sizes'      => \App\Size::all()
        ]);
	}

    public function productManagement(){
    	return response()->json([
            'sub_categories' => \App\SubCategory::orderBy('name','asc')->get(),
    		'categories' => \App\Category::all(),
            'stocks'     => \App\Stock::all(),
            'colors'     => \App\Color::all(),
            'sizes'      => \App\Size::all(),
    		'products'   => \App\Product::orderBy('id', 'desc')->get()
    	]);
    }

    public function colorAndSizes(){
        return response()->json([
            'colors' => \App\Color::all(),
            'sizes' => \App\Size::all()
        ]);
    }
}
