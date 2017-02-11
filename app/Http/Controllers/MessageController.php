<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Message as Message;

class MessageController extends Controller
{
    public function delete($id){
        $rs = Message::where('id', $id)->delete();
        return response()->json([
            'deleted' => $rs
        ]);
    }

    public function validateAndSave(Request $request){
    	$this->validate($request, [
	        'email' => 'required|email',
	        'name' => 'required',
	        'phone' => 'required|max:11|min:11',
	        'message' => 'required',
	    ]);
    	$rs = $this->thenSave($request);
    	return response()->json([
			'sent' => $rs
		]);
    }

    private function thenSave($request){
    	$message = new Message;
    	$message->email = $request->input('email');
    	$message->name = $request->input('name');
    	$message->phone = $request->input('phone');
    	$message->message = $request->input('message');
        $message->date = $request->input('date');
    	$rs = $message->save();
    	return $rs;
    }
}
