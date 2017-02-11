define([
	'vue',
	'vue-router'
	], function(Vue, VueRouter) {
		
	Vue.use(VueRouter);
	var App = Vue.extend({});
    router = new VueRouter();
    var self = this;

	router.map({
		'/Receiving': {
			name: 'receiving',
			component(resolve){
				require(['components/admin/receiving/comp_table_receiving_admin'], resolve);
			}
		},

		'/Client/Messages': {
			name: 'msg',
			component: function(resolve){
				require(['components/client/conversation/comp_conversation_panel'], resolve);
			}
		},

		'/Product/All': {
			name: 'productList',
			component: function(resolve){
				require(['components/product/comp_product_table'], resolve);
			}
		},

		'/Product/Add': {
			name: 'addproduct',
			component: function(resolve){
				require(['components/product/comp_product_management'], resolve);
			}
		},

		'/Product/Trashed': {
			name: 'trahsed-products',
			component: function(resolve){
				require(['components/admin/product/trashed/comp_trashed_product_admin'], resolve);
			}
		},

		'/Product/Category/Add': {
			name: 'addcategory',
			component: function(resolve){
				require(['components/admin/product/category/comp_form_category'], resolve);
			}
		},

		'/Product/Category/All': {
			name: 'category-list',
			component: function(resolve){
				require(['components/admin/product/category/comp_category_list'], resolve);
			}
		},

		'/Product/Receive': {
			name: 'form-receive-item',
			component(resolve){
				require(['components/admin/product/receive/comp_receive_items_admin'], resolve);
			}
		},

		'/Blog/Create': {
			name: 'createblog',
			component: function(resolve){
				require(['components/admin/blog/comp_management_blog_posts'], resolve);
			}
		},

		'/Blog/Recent': {
			name: 'recent-blog',
			component(resolve){
				console.log(resolve);
			}
		},

		'/Client/Feedback': {
			name: 'feedback',
			component: function(resolve){
				require(['components/admin/message/comp_panel_messages'], resolve);
			}
		},

		'/Client/Reservation': {
			name: 'reservations',
			component: function(resolve){
				require(['components/admin/reservation/comp_table_reservations'], resolve);
			}
		},


		'/Category/:cid': {
			name: 'CategoryProds',
			component: function(resolve) {
				require(['components/product/comp_product_with_category_of'], resolve);
			}
		},

		'/login': {
			component: function(arguments) {
				console.log('login here');
			}
		},

		'/Reservation/All': {
			name: 'reservation-list',
			component(){
				require(['components/admin/reservation/comp_table_reservations'])
			}
		},

		'*': {
			component: Vue.extend({
				template:'<div class="jumbotron text-center"><h2>Url you specified was not found!</h2></div>'
			})
		}

	});
	
	router.redirect({
	  // redirect any navigation to /a to /b
	  '/': '/Product/All'
	});

	new Vue({
		el: '#title-bar',
		data: {
			msg: 0
		}
	});

    return router; 
});