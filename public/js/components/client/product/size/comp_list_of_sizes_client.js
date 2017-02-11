define(['vue','vue-resource',
	'text!templates/client/product/size/temp_list_of_sizes_client.html'], 
	function(Vue, VueResource, template) {
   	
   	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
    			size_names: [],
                router_cid: router._currentRoute.params.id
    		}
    	},
    	created(){
    		this.fetch();
    	},
    	watch: {
    		'$route.params.id': function(){
    			this.fetch();
    		}
    	},
    	
    	methods: {
            getProductsWhereFrontEnd(size_name){
                /* filter $parent.products/products with an size name of [size_name]*/
                var self = this;
                var sizes = self.$parent.sizes;
                var found = [];
                 _.each(sizes, function(sizeModel){
                    if(sizeModel.size.toLowerCase() === size_name.toLowerCase()){
                        var rsProd = _.where(self.$parent.products, {id: sizeModel.pid});
                        if (rsProd.length) {
                            var product = _.first(rsProd);
                            if (_.where(found, {id: product.id}).length == 0) {
                                if (Number(product.category) === Number(self.router_cid)) {
                                    found.push(product);
                                }
                            }
                        }
                    };
                });
                self.$parent.filtered = found;
            },

    		fetch(){
    			var self = this;
    			var cid = router._currentRoute.params.id;
    			var resource = self.$resource('client/size/unique{/cid}');
			      // GET someItem/1
		        resource.get({cid: cid}).then((resp) => {
		      	    if (resp.status == 200) {
		      	    	var json = JSON.parse(resp.body);
		      	    	self.size_names = json;
		      	    }
		        });
    		}
    	}
    });
   
    return Component; 
});