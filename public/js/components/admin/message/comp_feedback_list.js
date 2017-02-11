define(['vue','vue-resource',,
	'text!templates/'], function(Vue, VueResource) {
    
    Vue.use(VueResource);

    var Component = Vue.extend({
    	template: template
    });
   
    return Component; 
});