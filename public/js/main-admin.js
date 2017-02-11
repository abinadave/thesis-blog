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
		"underscore": "libs/backbone/underscore-min",
		"file-uploader": "libs/fileuploader/client/fileuploader",
		"jqueryui": "libs/jquery-ui/jquery-ui.min",
		"printarea": "libs/print-area/demo/jquery.PrintArea",
		"alertify": "libs/alertify/alertify.min",
		"tags-input": "libs/bootstrap-tagsinput-latest/src/bootstrap-tagsinput",
		"ckeditor": "libs/ckeditor/ckeditor",
		"searchable-dropdown": "libs/searchable-select-dropdown/select-search",
		"select2": "../assets/gentelella-master/vendors/select2/dist/js/select2.full.min",
		"tags-input-jquery": "../assets/gentelella-master/vendors/jquery.tagsinput/src/jquery.tagsinput",
		"toastr": "libs/toastr/toastr.min"
	},
	
	'shim': 
	{	
		"fileuploader": {
			'deps': ['css!libs/fileuploader/client/fileuploader.css']
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
        },

        "tags-input": {
        	'deps': [
        		'css!libs/bootstrap-tagsinput-latest/src/bootstrap-tagsinput.css'
        	]
        },

        "searchable-dropdown": {
        	'deps': [
        		"css!libs/searchable-select-dropdown/selectToSearch.css"
        	]
        },

        "select2": {
        	'deps': [
        		"css!../assets/gentelella-master/vendors/select2/dist/css/select2.min.css"
        	]
        },

        "toastr": {
        	"deps": [
        		'css!libs/toastr/toastr.min.css'
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
		'app-admin'
	],
	function(domReady, app_admin){
	domReady(function(){
		
		app_admin.init();
	});
});

