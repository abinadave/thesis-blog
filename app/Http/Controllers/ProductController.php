<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;
use App\Product as Product;
use App\Http\Controllers\ColorController as ColorController;
use App\Http\Controllers\SizeController  as SizeController;
use App\Http\Controllers\StockController as StockController;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function fetchClientReservations(){
        return response()->json([
            'carts' => \App\Cart::where('client_id', Auth::user()->id)->orderBy('id', 'desc')->get(),
            'products' => \App\Product::all()
        ]);
    }

    public function restoreItem(Request $request){
        $id = $request->input('id');
        $rs = \App\Product::withTrashed()
              ->where('id', $id)->restore();
        return response()->json([
            'restored' => $rs
        ]);
    }

    public function getCatSize($cid, $size){
        $data = DB::table('products')->join('sizes', 'sizes.pid', '=', 'products.id')
        ->where('products.category', $cid)
        ->where('sizes.size', $size)
        ->get(); 
        
        return response()->json([
            'products' => $data
        ]);
    }

    public function fetchBetweenPrice($p1, $p2, $cid){
        $products = DB::table('products')
                    ->where('category', $cid)->whereBetween('prize', [$p1, $p2])->get();
        return $products;
    }

    public function fetchWhatsNewGuest(){
        /* for guest */
        $products = Product::orderBy('id','desc')->take(10)->get();
        return response()->json([
            'products' => $products
        ]);
    }

    public function deleteItem($id){
        $product = Product::findOrFail($id);
        $deletedColors = \App\Color::where('pid', $id)->delete();
        $deletedSizes = \App\Size::where('pid', $id)->delete();
        $rs = $product->delete();
        return response()->json([
            'deleted'        => $rs,
            'deleted_colors' => $deletedColors,
            'deleted_sizes'  => $deletedSizes
        ]);
    }

    public function updateAll(Request $request){
        $product = Product::findOrFail($request->input('id'));
        $product->title = $request->input('title');
        $product->prize = $request->input('prize');
        $product->category = $request->input('category');
        $product->description = $request->input('description');
        $rs = $product->save();
        return response()->json([
            'updated' => $rs
        ]);
    }

    public function updateFilename(Request $request){
        $product = Product::findOrFail($request->input('pid'));
        $product->filename = $request->input('filename');
        $rs = $product->save();
        return response()->json([
            'updated' => $rs
        ]);
    }

    public function getWithCid($cid){
        return response()->json([
            'products' => ($cid == 0) ? Product::orderBy('id','desc')->get() : Product::where('category', $cid)->orderBy('id','desc')->get()
        ]);
    }

    public function validateAndSave(Request $request){
        $this->validate($request, [
            'title'       => 'required|unique:products|max:100|min:4',
            'prize'       => 'required|numeric',
            'category'    => 'required',
            'description' => 'required|min:4',
            'color'       => 'required',
            'size'        => 'required'
        ]);

    	$savedColors = []; $savedSizes = [];

    	$product = new Product;
    	$colorController = new ColorController;
    	$sizeController = new SizeController;
        $stockController = new StockController;

    	$product->title = $request->input('title');
    	$product->sub_category = $request->input('sub_category');
    	$product->prize = $request->input('prize');
    	$product->description = $request->input('description');
        $product->filename = $request->input('filename');
        
    	$product->save();

    	$savedColors = $colorController->saveColors($request->input('color'), $product->id);
    	$savedSizes = $sizeController->saveSizes($request->input('size'), $product->id);
    	$savedStock = $stockController->saveStock($product->id);

    	return response()->json([
    		'product'      => $product,
    		'saved_colors' => $savedColors,
    		'saved_sizes'  => $savedSizes,
            'stock'        => $savedStock  
    	]);
    }
}
