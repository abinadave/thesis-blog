<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::guest() && Auth::user()->admin)  {
            $request->session()->put('id', Auth::user()->id);
            $request->session()->put('name', Auth::user()->name);
            $request->session()->put('email', Auth::user()->email);
            $request->session()->put('admin', Auth::user()->admin);
            return $next($request);
        }
        return redirect('/');
    }
}
