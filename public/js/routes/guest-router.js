define([
    'vue',
    'vue-router'
    ], function(Vue, VueRouter) {
        
    Vue.use(VueRouter);
    var App = Vue.extend({});
    router = new VueRouter();
    bus = new Vue({});
    router.map({
        
        '/': {
            name: 'home',
            component: function(resolve){
                require(['components/guest/comp_home_for_guest'], resolve);
            },
        },

        '/Events' : {
            name: 'events',
            component: function(resolve){
                require(['components/guest/event/comp_create_event_guest'], resolve);
            },
        },

        '/Products': {
            name: 'products',
            component(resolve){
                require(['components/guest/comp_product_list_guest'], resolve);
            }
        },
        '/Blog': {
            name: 'blog',
            component(resolve){
                require(['components/guest/blog/comp_blog_for_guest'], resolve);
            }
        },

        'ContactUs': {
            name: 'contact',
            component: function(resolve){
                require(['components/guest/comp_contact_us_form_guest'], resolve);
            }
        },

        '/Guest/Reservation': {
            name: 'proceedGuestReservation',
            component: function(resolve){
                require(['components/guest/reservation/comp_checkout_product_reservation_guest'], resolve);
            }
        },

		'/Category/:id': {
			name: 'guestViewCategory',
			component: function(resolve){
				require(['components/guest/product/comp_product_list_guest'], resolve);
			}
		},

        '*': {
            component: Vue.extend({
                template:'<div class="jumbotron text-center"><h2>Url you specified was not found!</h2></div>'
            })
        }

    });
    
    return router; 
});