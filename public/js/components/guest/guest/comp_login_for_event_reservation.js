define(['underscore','vue','vue-resource','jquery'], 
	function(_, Vue, VueResource, $) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
                <div class="modal fade" id="login-suggestion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body text-center">

                            </div>
                        </div>
                    </div>
                </div>
    	`,

    	data(){
    		return {

    		}
    	},

    	created(){
            
    	},

    	methods: {
   
    	}
    });
   
    return Component; 
});