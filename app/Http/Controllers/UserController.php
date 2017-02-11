<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User as User;
use App\Cart as Cart;
// use Crypt;

class UserController extends Controller
{
	public function getListOfFilesTempFolderBlog(){
		$dir = 'uploads/temporary-blog-images';
		$files = glob($dir."/*.*");
		return response()->json(['files' => $files]);
	}
	public function removeFilesInTemporaryBLog(){
		$dir = 'uploads/temporary-blog-images';
		$deletedFiles = 0;
		foreach (glob($dir."/*.*") as $filename) {
			if (is_file($filename)) {
				$deleted = unlink($filename);
				if ($deleted) {
					$deletedFiles++;
				}
			}
		}
		return response()->json(['files_removed' => $deletedFiles]);
	}

	public function loginHasAccountForReservation(Request $request){
		$email = $request->input('email');
		$password = $request->input('password');
		$items = $request->input('carts');
		$this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
	    ]);
		$count = \App\User::where('email', $email)->count();
		if ($count) {
			$user = \App\User::where('email', $email)->first();
			$reservation = $this->saveReservation($user);
			$this->saveCarts($user, $reservation, $items);
			redirect('/');
			// return $reservation;
		}
	}

	public function saveReservation($user){
		$count = \App\Reservation::where('email', $user->email)->count();
		if ($count) {
			$MyFirstReservation = \App\Reservation::where('email', $user->email)->first();
			$reservation = new \App\Reservation;
			$reservation->email = $user->email;
			$reservation->user_id = $user->id;
			$reservation->company = $MyFirstReservation->company;
			$reservation->address = $MyFirstReservation->address;
			$reservation->city = $MyFirstReservation->city;
			$reservation->postal = $MyFirstReservation->postal;
			$reservation->phone = $MyFirstReservation->phone;
			$reservation->save();
			return $reservation;
		}
	}

	public function saveCarts($user, $reservation, $itemCarts){
		foreach ($itemCarts as $key => $item) {
			$cart = new Cart;
			$cart->client_id = $user->id;
			$cart->reservation_id = $reservation->id;
			$cart->product_id = $item['id'];
			$cart->color = $item['color'];
			$cart->size = $item['size'];
			$cart->qty = $item['qty'];
			$cart->save();
		}


	}

	public function fetch(){
		return User::orderBy('id','desc')->get();
	}

	public function insert(Request $request){
        $this->validate($request, [
	        'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
	    ]);
		return $this->saveUser($request);
	}

	private function saveUser($request){
		$user = new User;
		$user->name = $request->input('name');
		$user->email = $request->input('email');
		$user->password = bcrypt($request->input('password'));
		$user->save();
		return $user;
	}

	public function getUser(Request $request){
		return $request->session()->all();
	}

	public function showLogin(){
		return view('auth.login');
	}

	public function showRegister(){
		return view('auth.register');
	}

	public function showWelcome(Request $request){
		return view('welcome');
	}
}
