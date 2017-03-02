<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;
use App\Http\Requests;
use App\Event as Event;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function fetchClientReservations(){
        return response()->json([
            'event_categories' => \App\EventCategory::all(),
            'events' => Event::where('user_id', Auth::user()->id)->get()
        ]);
    }
    public function createEvent(Request $request){
    	$event = new Event;
        $event->user_id = $request->input('user_id');
    	$event->event_name = $request->input('event_name');
    	$event->event_description = $request->input('event_description');
    	$event->address = $request->input('address');
    	$event->category = $request->input('category');
    	$event->package = $request->input('package');
    	$event->event_status = $request->input('event_status');
    	$event->from = $request->input('from_date') . ' ' .$request->input('from_time');
        $event->to = $request->input('to_date') . ' ' . $request->input('to_time');
        $event->contact_number = $request->input('contact_number');
    	$event->save();
    	return $event;    	
    }
    public function validateAccountFirst(Request $request){
        $count = \App\User::where('email', $request->input('email'))->count();
        if ($count) {
            $user = \App\User::where('email', $request->input('email'))->first();
            if (Hash::check($request->input('password'), $user->password)) {
                return response()->json([
                    'found' => true,
                    'user'  => $user
                ]);
            }else {
                return response()->json([
                    'found' => false
                ]);
            }
        }else {
            return response()->json([
                'found' => false
            ]);
        }
    }
}
