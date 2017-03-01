define([
	'vue',
	'vue-resource'], 
	function(
        Vue,
        VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({

        props: {
        	
            
        },

    	template: `
            <div>
            <div class="modal fade" id="modal-view-product-reviews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body text-center">

                        </div>
                    </div>
                </div>
            </div>
            </div>
        `,
    	
    	data: function(){
    		return {

    		}
    	},

    	components: {

    	},
    	
    	created(){

    	},

    	methods: {
            
    	}

    });
   
    return Component; 
})