define(['vue',
	'vue-resource',
    'underscore',
	'text!templates/client/product/temp_product_list_client.html',
    'components/client/product/size/comp_list_of_sizes_client',
    'components/client/product/comp_modal_product_details_client',
	'css!libs/bootstrap/shop-homepage.css'], 
	function(Vue, VueResource, _, template, CompSizesOfCat, CompProductDetails,
     cssTbl) {
   
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: template,
    	
    	props: {
    		route_cid: {
    			type: Number
    		}
    	},
    	
    	data: function(){
    		return {
                filtered: [],
    			categories: [],
    			products: [],
    			colors: [],
    			sizes: [],
                search: ''
    		}
    	},

        components: {
            'sizes-of-category': CompSizesOfCat,
            'modal-product-details': CompProductDetails
        },

    	created(){
    		this.route_cid = router._currentRoute.params.id;
    		this.fetch();
    	},

    	watch: {
    		'$route.params.id': function(newVal){
    			this.route_cid = newVal;
    		}
    	},

        computed: {
            filterProducts(){
                var newVal = this.route_cid;
                this.filtered = this.products.filter(function(index) {
                    return Number(index.category) === Number(newVal);
                });
            },
        },

    	methods: {
            
            showItem(item) {
                var self = this;
                var child = self.$children[0];
                child.item = item;                
                $('#modal-product-details').modal('show');
            },

            filterItemsByPrice(a, b){
                var category = this.route_cid;
                this.filtered = this.products.filter(function(model) {
                    return Number(model.prize) >= Number(a) &&
                           Number(model.prize) <= Number(b) &&
                           Number(model.category) === Number(category);
                });
            },

            displayAll(){
                var category = this.route_cid;
                this.filtered = this.products.filter(function(index) {
                    return Number(index.category) === Number(category);
                });
            },

            getReviews(){
                /* For deadline purposes. */
                return _.random(1, 50);
            },

    		fetch(){
    			var self = this;
    			self.$http.get('/client_management').then( (resp) => {
    				if (resp.status === 200) {
    					var json = JSON.parse(resp.body);
    					$.each(json, function(index, val) {
    						self[index] = val;
    					});
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		}
    	}

    })
   
    return Component; 
});