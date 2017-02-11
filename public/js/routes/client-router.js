define([
    'vue',
    'vue-router'
    ], function(Vue, VueRouter) {
        
    Vue.use(VueRouter);
    var App = Vue.extend({});
    router = new VueRouter();
    router.map({
        
        '/': {
            name: 'home',
            component: function(resolve){
                require(['components/guest/comp_home_for_guest'], resolve);
            },
        },

        '/GuestReservation': {
            name: 'proceedGuestReservation',
            component: function(resolve){
                require(['components/guest/reservation/comp_checkout_product_reservation_guest'], resolve);
            }
        },

        '/Account': {
            name: 'account',
            component: function(resolve){
                
            }
        },

        '/Messages': {
            name: 'msg',
            component: function(resolve){
                require(['components/client/message/comp_panel_messages'], resolve);
            }
        },

        '/Blog': {
            name: 'blog',
            component: function(resolve){
                require(['components/guest/blog/comp_blog_for_guest'], resolve);
            }
        },

		'/Category/:id/:name': {
			name: 'itemsIncategory',
			component: function(resolve){
				require(['components/client/product/comp_product_list_client'], resolve);
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
      '/': '/Account'
    });
    return router; 
});