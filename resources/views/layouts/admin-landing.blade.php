<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta id="token" value="{{ csrf_token() }}">
    <title>Boutique, Blog, Event reservations</title>
    <!-- Bootstrap -->
    <link href="{{ url('assets/gentelella-master/vendors/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="{{ url('assets/gentelella-master/vendors/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="{{ url('assets/gentelella-master/build/css/custom.min.css') }}" rel="stylesheet">
  </head>
  <body class="nav-md" >
    <div class="container body" id="app-admininistrator">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div id="title-bar" class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Online Boutique
              shop</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile">
              <div class="profile_pic">
                <img src="assets/gentelella-master/production/images/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome back,</span>
                <h2>{{ Auth::user()->name }}</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

           <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              
              <div class="menu_section">
                <h3>--------</h3>
                <ul class="nav side-menu">
                  <li><a><i class="fa fa-database"></i> Products <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a v-link="{ name: 'addproduct'  }">Add Item</a></li>
                      
                      <li><a v-link="{ name: 'productList' }">Item list</a></li>
                      <li><a v-link="{ name: 'trahsed-products' }">Trashed items</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-users" aria-hidden="true"></i> Categories <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                     <li><a v-link="{ name: 'addcategory' }">Add Category</a></li>
                      <li><a v-link="{ name: 'category-list' }">Category List</a></li>
                    </ul>
                  </li>
                  <li><a v-link="{ name: 'receiving' }"><i class="fa fa-check-square"></i> Receiving</a></li>
                  <li><a><i class="fa fa-edit"></i> Blog <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                       <li><a v-link="{ name: 'createblog' }">Create blog</a></li>
                       <li><a v-link="{ name: 'recent-blog' }">Recent blog</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-calendar" aria-hidden="true"></i> Events<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a v-link="{ name: 'event-categories'  }">Categories</a></li>
                    </ul>
                  </li>
                  <li><a v-link="{ name: 'reservations' }"><i class="text-info glyphicon glyphicon-tasks"></i>&nbsp;&nbsp;&nbsp; Reservations</a></li> 
                  <li><a v-link="{ name: 'feedback' }"><i class="fa fa-exchange"></i> Feedbacks</a></li>
                  <li><a v-link="{ name: 'msg' }"><i class="fa fa-wechat"></i> Messages 
                  </a></li>
                </ul>
              </div>
              

            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="assets/gentelella-master/production/images/img.jpg" alt="">{{ Auth::user()->name }}
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> Profile</a></li>
                    <li>
                      <a href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="{{ url('/logout') }}"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>

              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

         <!-- page content -->
        <div class="right_col" role="main">
            <router-view 
              :user="{{ Auth::user() }}"
            ></router-view>
        </div>

        <!-- footer content -->
        <footer>
          <div class="pull-right">
              Website &copy; 2016
          </div>
          <div class="clearfix"></div>
        </footer>
      </div>

    </div>

    <script data-main="js/main-admin" src="{{ url('js/libs/require.js') }}"></script>
    <!-- jQuery -->
    <script src="{{ url('js/libs/jquery.js') }}"></script>
    <!-- Bootstrap -->
    <script src="{{ url('assets/gentelella-master/vendors/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <!-- Custom Theme Scripts -->
    <script src="{{ url('assets/gentelella-master/build/js/custom.min.js') }}"></script>

  </body>
</html>
