// This set's up the module paths for underscore and backbone
require.config({
	waitSeconds : 25, 
    'paths': { 
		"vue": "libs/vue/vue",
		"vue-resource": "libs/vue/vue-resource",
		"vue-router": "libs/vue/vue-router",
		"domReady": "libs/requirejs/domReady",
		"moment": "libs/momentjs/moment.min",
		"css": "libs/require-css/css",
		'underscore': "libs/backbone/underscore-min",
		'fileuploader': 'libs/fileuploader/fileuploader',
		"jqueryui": "libs/jquery-ui/jquery-ui.min",
		"printarea": "libs/print-area/demo/jquery.PrintArea",
		"alertify": "libs/alertify/alertify.min"
	},
	
	'shim': 
	{	
		"fileuploader": {
			'deps': ['css!libs/fileuploader/fileuploader.css']
		},

		"vue": {
			'exports': 'Vue'
		},
		
		"vue-resource": {
			'exports': 'VueResource'
		},

		"vue-router": {
			'exports': 'VueRouter'
		},

		"domeReady": {
			'exports': 'domeReady'
		},

		"underscore": {
			'exports':  '_'
		},

		"jqueryui": {
        	"deps": [
        		'css!libs/jquery-ui/jquery-ui.min.css'
        	]
        },

        "alertify": {
        	'exports': 'alertify',
        	'deps': [
				'css!libs/alertify/css/alertify.min.css',
				'css!libs/alertify/css/themes/bootstrap.min.css'
        	]
        }


	},

	'map': {
        "*": {
            "css":  "libs/require-css/css"
        }
    }	

}); 

require(
	[
		'domReady',
		'app-client'
	],
	function(domReady, app){
	domReady(function(){
		// window.pubnub = new PubNub({
	 //        publishKey : 'pub-c-f35192e1-b8b4-4712-a77c-ed1ca3f2f088',
	 //        subscribeKey : 'sub-c-46534c02-9810-11e6-94c7-02ee2ddab7fe'
	 //    });
		app.init();
	});
});

