define([
	'vue',
	'vue-resource',
	'text!templates/client/temp_navigation_categories.html'], 
	function(Vue, VueResource, template) {
  	
  	Vue.use(VueResource);

    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
    			categories: [],
    		}
    	},
    	created(){
    		this.fetch();
    	},

    	methods: {
    		showItemsInCat(cat){
    			router.go({ name: 'itemsIncategory', params: {id: cat.id, name: cat.name} });
    		},

    		fetch(){
    			var self = this;
    			self.$http.get('/category').then( (resp) => {
    				if (resp.status === 200) {
    					self.categories = JSON.parse(resp.body);
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		}
    	}
    });
   
    return Component; 
});