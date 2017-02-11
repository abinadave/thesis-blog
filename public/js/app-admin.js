define([
	'vue',
	'vue-resource',
	'routes/admin-router',
	'components/admin/comp_management',
	'components/comp_app'
	], function(Vue, VueResource,
	 router, CompManagement, CompApp){

	var init = function(){	
		var self = this;
		Vue.use(VueResource);
		Vue.component('comp-management', CompManagement);
		router.start(CompApp, '#app-admininistrator');
	};
	return { init: init };
});

