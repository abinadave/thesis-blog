define(['vue','vue-resource'], function(Vue, VueResource) {
    var App = Vue.extend({
    	data: function(){
    		return {
    			products: [], categories: [], colors: [], sizes: [],
    			messages: []
    		}
    	}
    });
    return App; 
});