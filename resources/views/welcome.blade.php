@extends('layouts.app')

@section('content')

	@if(Auth::guest())
		@include('layouts.guest')
	@elseif(!Auth::guest() && Auth::user()->admin)
		@include('layouts.admin-landing')
	@else
		@include('layouts.client')
	@endif

@endsection
