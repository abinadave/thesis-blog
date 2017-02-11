<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public function getSession(Request $request){
    	return response()->json([
            'user' => Auth::user()
        ]);
    }
}
