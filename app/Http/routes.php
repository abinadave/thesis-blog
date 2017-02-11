<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => 'web'], function(){

	Route::get('/', 'UserController@showWelcome');
	Route::auth();
	Route::get('/home', 'HomeController@index');
	Route::get('account/login', 'UserController@showLogin');
	Route::get('account/register', 'UserController@showRegister');
	Route::get('admin', 'AdminController@showLogin');
	Route::post('login/administrator', 'AdminController@authenticateAdmin');
	Route::get('category', 'CategoryController@fetch');
	Route::post('category', 'CategoryController@insert')->middleware('isAdmin');
	Route::get('fetch_product_management', 'FetcherController@productManagement')->middleware('isAdmin');
	Route::post('product', 'ProductController@validateAndSave')->middleware('isAdmin');
	Route::get('product/cid/{cid}', 'ProductController@getWithCid');
	Route::put('product/filename', 'ProductController@updateFilename');
	Route::put('product', 'ProductController@updateAll');
	Route::delete('product/{id}', 'ProductController@deleteItem')->middleware('isAdmin');
	Route::get('management_reservation', 'FetcherController@reservationManagement')->middleware('isAdmin');
	Route::delete('category/{id}', 'CategoryController@remove');
	Route::post('blog_category', 'BlogCategoryController@insert')->middleware('isAdmin');
	Route::post('blog_tag', 'BlogTagController@insert')->middleware('isAdmin');
	Route::get('manage_messages', 'FetcherController@msgManagement')->middleware('isAdmin');
	Route::get('user', 'UserController@fetch');
	Route::post('conversation', 'ConversationController@sendMsg');
	Route::post('admin/conversation', 'ConversationController@sendMsgToClient');
	Route::get('conversation', 'ConversationController@getMsgs');
	Route::get('client_management', 'FetcherController@clientManagement');
	Route::get('client/size/unique/{cid}', 'SizeController@getUniqueByCat');
	Route::post('client/reservation', 'ReservationController@saveClient');

	Route::get('trashed_item_management', 'FetcherController@trashedItemManagement')->middleware('isAdmin');
	Route::post('product/trashed/restore', 'ProductController@restoreItem')->middleware('isAdmin');
	Route::post('receive_form', 'ReceivingFormController@insert')->middleware('isAdmin');
	Route::post('receive_item', 'ReceivingItemController@saveItems')->middleware('isAdmin');
	Route::get('receiving_management', 'FetcherController@receivingManagement')->middleware('isAdmin');
	Route::post('receiving_form/query_by_date', 'ReceivingFormController@fetchByDate');
	Route::delete('message/{id}', 'MessageController@delete');
	Route::get('categoryMnagment', 'FetcherController@categoryMnagment');
	Route::post('sub_category', 'SubCategoryController@insert');
	Route::get('category_management', 'FetcherController@categoryManagement');
	Route::post('blog', 'BlogController@insert');
	Route::post('removefiles/temporary','UserController@removeFilesInTemporaryBLog');
	Route::get('temporary/list_of_files', 'UserController@getListOfFilesTempFolderBlog');
	Route::get('blogManagement', 'FetcherController@blogManagement');
	Route::get('blog/recent', 'BlogController@fetchRecentArticles');
});

Route::group(['middleware' => 'guest'], function(){
	Route::get('products/whats_new', 'ProductController@fetchWhatsNewGuest');
	Route::get('categories', 'CategoryController@fetch');
	Route::get('fetch_guest', 'FetcherController@forGuest');
	Route::post('reservation', 'ReservationController@insert');
	Route::post('carts', 'CartController@saveAll');
	Route::post('message', 'MessageController@validateAndSave');
	Route::post('user/create', 'UserController@insert');
	Route::get('product/between_price/{p1}/{p2}/{cid}', 'ProductController@fetchBetweenPrice');
	Route::get('size/unique/{cid}', 'SizeController@getUniqueByCat');
	Route::get('products/get_by_size/{cid}/{size}', 'ProductController@getCatSize');
	Route::post('login/hasccount', 'UserController@loginHasAccountForReservation');
	Route::get('product/management/guest', 'FetcherController@productManagementGuest');
	Route::get('product/management/color_and_size', 'FetcherController@colorAndSizes');
});
