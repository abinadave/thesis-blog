define(['vue',
	'vue-resource',
	'text!templates/product/temp_whats_new_for_guest.html'], 
	function(Vue, VueResource, template) {

    Vue.use(VueResource);

    var Component = Vue.extend({
    	template: template,
        
    	data: function(){
    		return {
    			products: []
    		}
    	},

    	created(){
    		this.fetchNewestItem();
    	},

    	methods: {
    		fetchNewestItem(){
    			var self = this;
    			self.$http.get('/products/whats_new').then((resp) => {
    				if (resp.status === 200) {
    					var json = JSON.parse(resp.body);
    					self.products = json.products
    					self.renderList();
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		},

    		renderList(){
    			var self = this;
    			require(['owl-carousel-1'], function(){
    				$("#owl-demo").owlCarousel({
 
					      autoPlay: 2500, //Set AutoPlay to 3 seconds
					 
					      items : 4,
					      itemsDesktop : [1199,3],
					      itemsDesktopSmall : [979,3]
					 
					  });
    			});
    		}

    	}

    });
   
    return Component; 
});