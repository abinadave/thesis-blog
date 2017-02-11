define(['vue',
	'text!templates/product/temp_product_with_category_of.html'], 
	function(Vue, template) {
   
    var Component = Vue.extend({
    	template: template,
    	created(){
    		var self = this;
    		alert('created');
    	}
    });
   
    return Component; 
});