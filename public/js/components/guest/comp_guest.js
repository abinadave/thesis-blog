define([
	'vue',
	'vue-resource',
	'text!templates/guest/temp_guest.html',
	'components/guest/comp_guest_navigation_categories',
    'components/guest/reservation/comp_modal_all_reservation_guest'], 
	function(
        Vue,
        VueResource, 
        template, 
        CompNavcatGuest,
        CompTblReservation) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: template,
    	
    	data: function(){
    		return {
                parentCarts: [],
    			categories: [], products: [], colors: [], sizes: []
    		}
    	},

    	components: {
    		'comp-nav-categories-guest': CompNavcatGuest,
            'comp-tbl-reservation-guest': CompTblReservation
    	},
    	
    	created(){
    		this.fetch();
    	},

        computed: {
            parentCartsLength(){
                var items = 0;
                this.parentCarts.forEach(function(model) {
                    items += Number(model.qty);
                });
                return items;
            },

            parentCartItem(){
                return (this.parentCartsLength === 1) ? 'item' : 'items';
            },

            getCartLength(){
               var self = this;
               console.log(self.$parent)
            }

        },

    	methods: {


            showReservations(){
                $('#modal-reservation-guests').modal('show');
            },

            goHome(){
                var self = this;
                self.whatsNew = true;
                self.homeImg = true;
            },

    		fetch(){
    			var self = this;
                self.$http.get('/fetch_guest').then( (resp) => {
                    if (resp.status === 200) {
                        var json = JSON.parse(resp.body);
                        self.sizes = json.sizes;
                        self.colors = json.colors;
                        self.categories = json.categories;
                        self.products = json.products;
                    }
                }, (resp) => {
                    console.log(resp);
                });
    		}
    	}

    });
   
    return Component; 
});