<link rel="stylesheet" type="text/css" href="{{ url('assets/bootstrap-3/css/themes/bootstrap.min.paper.css') }}">

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
            <li><a style="color: #000;" v-link="{ path: '/'} ">Account</a></li>
            <category-list></category-list>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span class="text-primary">
                       @if (Auth::guest())
                            Sign in
                       @else
                            {{ Auth::user()->name }}
                       @endif
                    </span>
                    <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                @if (!Auth::guest())
                    <li><a @click="showMessages()" style="cursor: pointer"><i class="fa fa-envelope"></i> Messages</a></li>
                    <li><a href="{{ url('/logout') }}"><i class="fa fa-sign-out"></i> Logout</a></li>
                @else
                    <li><a href="{{ url('/account/login') }}">Sign In</a></li>
                    <li><a href="{{ url('/account/register') }}">Join</a></li>
                @endif
              </ul>
            </li>
          </ul>

         </div>

      </div>

    </nav>

    <router-view :user="{{ Auth::user() }}"></router-view>
    <comp-modal-tbl-reservation></comp-modal-tbl-reservation>
    <msg-box :user="{{ Auth::user() }}"></msg-box>    
    
</div>

<script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.1.1.min.js"></script>
<script src="{{ url('js/libs/jquery.js') }}"></script>
<script data-main="js/client-main" src="{{ url('js/libs/require.js') }}"></script>  
<script src="{{ url('assets/bootstrap-3/js/bootstrap.min.js') }}"></script>
