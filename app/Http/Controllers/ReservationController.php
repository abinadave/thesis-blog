<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Reservation as Reservation;
use App\Cart as Cart;
class ReservationController extends Controller
{
    public function fetch(){
        return Reservation::orderBy('id','desc')->get();
    }
    public function delete($id){
      $reservation = Reservation::find($id);
      $rs = $reservation->delete();
      return response()->json([
         'deleted' => $rs
      ]);
    }
    public function saveClient(Request $request){

        $carts = $request->input('carts');
        $client = $request->session()->all();
       foreach ($carts as $key => $obj) {
          $cart = new Cart;
          $cart->client_id = $client['id'];
          $cart->reservation_id = 0;
          $cart->product_id = $obj['id'];
          $cart->color = $obj['color'];
          $cart->size = $obj['size'];
          $cart->qty = $obj['qty'];
          $cart->save();
       }
    }

    public function insert(Request $request){
      $this->validate($request, [
          'email'       => 'required|max:100|min:4',
          'firstname'       => 'required',
          'lastname'    => 'required',
          'company' => 'required',
          'address'       => 'required',
          'city'        => 'required',
          'postal'        => 'required'
      ]);
    	$reservation = new Reservation;
    	$reservation->email = $request->input('email');
    	$reservation->firstname = $request->input('firstname');
    	$reservation->lastname = $request->input('lastname');
    	$reservation->company = $request->input('company');
    	$reservation->address = $request->input('address');
    	$reservation->city = $request->input('city');
    	$reservation->postal = $request->input('postal');
    	$reservation->phone = $request->input('phone');
      $reservation->user_id = $request->input('user_id');
      $reservation->true_date = $request->input('true_date');
      $reservation->expiration = $request->input('expiration');
    	$reservation->save();
        return response()->json([
            'model' => $reservation
        ]);
    }
}
