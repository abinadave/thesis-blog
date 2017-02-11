<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta id="token" value="{{ csrf_token() }}">
    <title>Welcome back</title>    <link rel="stylesheet" type="text/css" href="{{ url('assets/font-awesome-4.6.1/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('assets/bootstrap-3/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('assets/bootstrap-3/css/themes/bootstrap.min.paper.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('assets/css-site/home-style.css') }}">
</head>
<body id="app-layout">

<div id="app">
   <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
             <img id="img-title-project" src="{{ url('assets/img/home-logo.png') }}">
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="{{ url('/') }}">Home</a></li>
            <!-- <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li> -->
          </ul>
          <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <span class="text-primary">
                           Sign in
                        </span>
                        <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="{{ url('/account/login') }}">Sign In</a></li>
                    <li><a href="{{ url('/account/register') }}">Join</a></li>
                    <!-- <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li> -->
                  </ul>
                </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <router-view></router-view>

    </div>

    @yield('content')

    <!-- JavaScripts -->
    <script src="{{ url('js/libs/jquery.js') }}"></script>
    @if (Auth::guest())
        <script src="{{ url('js/libs/require.js') }}"></script>  
    @else
        <script data-main="js/main" src="{{ url('js/libs/require.js') }}"></script>  
    @endif
    <script src="{{ url('assets/bootstrap-3/js/bootstrap.min.js') }}"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}

</body>
</html>
