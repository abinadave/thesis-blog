define(['vue', 'text!templates/guest/temp_footer_guest.html',
	'css!libs/bootstrap/sticky-footer.css'], 
	function(Vue, template, css1) {
   
    var Component = Vue.extend({
    	template: template
    });
   
    return Component; 
});