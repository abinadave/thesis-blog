define(['vue',
	'text!templates/admin/product/temp_modal_product_view_image.html'],
	function(Vue, template) {
   
    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
    			item: {
    				filename: 'default-image.png'
    			}
    		}
    	}
    });
   
    return Component; 
});