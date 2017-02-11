<script type="text/javascript"></script>
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
             <img id="img-title-project" src="{{ url('assets/img/project-title.png') }}">
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="{{ url('/') }}">Home</a></li>
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
                        <li><a href="{{ url('/logout') }}">Logout</a></li>
                    @else
                        <li><a href="{{ url('/account/login') }}">Sign In</a></li>
                        <li><a href="{{ url('/account/register') }}">Join</a></li>
                    @endif
                  </ul>
                </li>
              </ul>
            </ul>

         </div><!--/.nav-collapse -->
        
      </div>

    </nav>

    <div id="home-jumbotron"></div>
    
    <comp-whatsnew></comp-whatsnew>

</div>

<script src="{{ url('js/libs/jquery.js') }}"></script>
<script data-main="js/main" src="{{ url('js/libs/require.js') }}"></script>  
<script src="{{ url('assets/bootstrap-3/js/bootstrap.min.js') }}"></script>
