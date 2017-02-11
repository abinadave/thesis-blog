define(['vue',
	'vue-resource',
	'text!templates/guest/product/size/temp_list_of_size.html'], 
	function(Vue, VueResource, template) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
    			category: 0,
    			size_names: []
    		}
    	},

    	created(){
    		this.category = router._currentRoute.params.id;
    		this.getSizes();
    	},

    	watch: {
    		'$route.params.id': function(val){
    			this.category = val;
    			this.getSizes();
    		}
    	},

    	methods: {
            getProductsWhereCid(){
                var self = this;
                self.$parent.products = self.$parent.$parent.products.filter(function(index) {
                    return Number(index.category) === Number(self.category);
                });
            },

            getProductsWhereFrontEnd(size_name){
                /* filter $parent.products/products with an size name of [size_name]*/
                var self = this;
                var sizes = self.$parent.$parent.sizes;
                var filtered = [];
                 _.each(sizes, function(sizeModel){
                    if(sizeModel.size.toLowerCase() === size_name.toLowerCase()){
                        var rsProd = _.where(self.$parent.$parent.products, {id: sizeModel.pid});
                        if (rsProd.length) {
                            var product = _.first(rsProd);
                            if (_.where(filtered, {id: product.id}).length == 0) {
                                if (Number(product.category) === Number(self.category)) {
                                    filtered.push(product);
                                }
                            }
                        }
                    };
                });
                self.$parent.products = filtered;
            },

    		getProductsWhereSizeBackend(value){
    			var self = this;
                console.log(self.$parent.products);
    			var resource = self.$resource('products/get_by_size{/cid}{/size}');
    			resource.get({
    				cid: self.category,
    				size: value.toLowerCase()
    			}).then( (resp) => {
    				if (resp.status === 200) {
    					var json = JSON.parse(resp.body);
    					self.$parent.$parent.products = json.products;
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		},

    		getSizes(){
    			var self = this;
    			var cid = router._currentRoute.params.id;
    			var resource = self.$resource('size/unique{/cid}');
			      // GET someItem/1
		        resource.get({cid: cid}).then((resp) => {
		      	    if (resp.status == 200) {
		      	    	var json = JSON.parse(resp.body);
		      	    	self.size_names = json;
		      	    }
		        });
    		}
    	}
    })
   
    return Component; 
});