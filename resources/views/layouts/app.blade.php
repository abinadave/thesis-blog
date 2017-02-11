<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta id="token" value="{{ csrf_token() }}">
    <title>Online Boutique</title>
    <!-- Fonts -->
    <link rel="stylesheet" type="text/css" href="{{ url('assets/font-awesome-4.6.1/css/font-awesome.min.css') }}">
    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ url('assets/bootstrap-3/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('assets/css-site/home-style.css') }}">
</head>

    @yield('content')

</body>
</html>
