<div id="app-admininistrator">
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
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog <span class="caret"></span></a>
              <ul class="dropdown-menu">
               <li><a v-link="{ name: 'createPost' } ">Posts</a></li>
                <li><a>All Post</a></li>
                <li><a>Categories</a></li>
                <li><a>Tags</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav">
            <li><a v-link="{ name: 'createProduct' }"><i class="text-info glyphicon glyphicon-save"></i> Create Item</a></li>
            <li><a v-link="{ name: 'productList' }"><i class="text-info glyphicon glyphicon-list-alt"></i> Item List</a></li>
            <li><a v-link="{ name: 'reservations' }"><i class="text-info glyphicon glyphicon-tasks"></i> Reservations</a></li> 
            <li><a v-link="{ name: 'messages' }"><i class="text-info glyphicon glyphicon-envelope"></i> Messages</a></li> 
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
                    <li><a href="{{ url('/logout') }}">Logout</a></li>
                  </ul>
                </li>
            </ul>
         </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container" style="margin-top: 90px">
        <div class="row">
            <div class="col-md-3">
               <comp-management></comp-management>
            </div>
        </div>
    </div>
</div>

<script src="{{ url('js/libs/jquery.js') }}"></script>
<script data-main="js/main-admin" src="{{ url('js/libs/require.js') }}"></script>  
<script src="{{ url('assets/bootstrap-3/js/bootstrap.min.js') }}"></script>
