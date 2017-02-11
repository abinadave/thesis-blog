define(['vue',
	'text!templates/guest/product/temp_product_colors.html'], 
	function(Vue, template) {
   
    var Component = Vue.extend({
    	template: template,
    	props: ['colors']
    });
   
    return Component; 
});