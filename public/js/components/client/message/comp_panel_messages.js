define(['vue','vue-resource',
	'text!templates/client/message/temp_panel_messages.html',
	'css!libs/css/panel_messages.css'], function(Vue, VueResource, template, cssStyle) {
   	
    var Component = Vue.extend({
    	template: template,
    	methods: {
    		composeMsg(){
    			console.log('composing messages');
    		}
    	}
    });
   

    
    return Component; 
});