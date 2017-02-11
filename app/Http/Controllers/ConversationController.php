<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Conversation as Conversation;
use App\User as User;
use Illuminate\Support\Facades\Auth;
use DB;
class ConversationController extends Controller
{
	public function getMsgs(){
		$uid = Auth::user()->id;
		$data = DB::table('conversations')
                    ->where('sender', $uid)
                    ->orWhere('receiver', $uid)
                    ->orderBy('id')
                    ->get();
        return $data;
	}

    public function sendMsgToClient(Request $request){
        $this->validate($request, [
            'msg' => 'required|max:255'
        ]);
        $model = new Conversation;
        $model->date = $request->input('date');
        $model->receiver = $request->input('chat_mate_id');
        $model->sender = Auth::user()->id;
        $model->msg = $request->input('msg');
        $model->save();
        return $model;
    }

    public function sendMsg(Request $request){
    	$this->validate($request, [
	        'msg' => 'required|max:255'
	    ]);
	    $conversation           = new Conversation;
    	$conversation->sender   = Auth::user()->id;
    	$conversation->receiver = $this->getAdminId();
    	$conversation->msg      = $request->input('msg');
    	$conversation->date     = $request->input('date');
    	$conversation->save();
    	return $conversation;
    	$this->getAdminId();
    }

    private function getAdminId(){
    	$user = User::where('admin', 1)->first();
    	return $user->id;
    }

}
