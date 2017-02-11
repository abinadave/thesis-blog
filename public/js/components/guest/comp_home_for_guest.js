define(['vue','vue-resource',
	'text!templates/guest/temp_home_for_guest.html',
    'components/product/comp_whats_new_for_guest'], 
	function(Vue, VueResource, template, CompWhatsNewGuest) {
  
    var Component = Vue.extend({
    	template: template,
    	created(){
    		var self = this;
    	},
    	components: {
    		'comp-whatsnew': CompWhatsNewGuest
    	}
    });
   
    return Component; 
});