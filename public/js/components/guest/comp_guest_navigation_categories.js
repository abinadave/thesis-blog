define([
    'vue',
    'vue-resource',
    'text!templates/guest/temp_guest_navigation_categories.html'], 
    function(Vue, VueResource, template) {
	
	Vue.use(VueResource);

    var Component = Vue.extend({
        template: template,
    	data: function(){
            return {
                /* empty object */

            }
        },

    	created(){
            var self = this;

    	},

        computed: {
            getTotalcart(){
                var self = this;
                
            }
        },

    	methods: {

            showItemsForCategory(cat){
                var self = this;
                router.go({ name: 'guestViewCategory', params : { id: cat.id, name: cat.name }});
            }
            
    	}
    });
   
    return Component; 
});