define([
	'vue',
	'routes/client-router',
	'components/client/components',
	], function(
	Vue, 
	router, 
	ClientApp
	){

	var init = function(){	
		var self = this;
		router.start(ClientApp, '#app');
	};
	return { init: init };
});

