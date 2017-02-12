define(['underscore','vue','vue-resource'], 
	function(_, Vue, VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
    		<div style="padding: 20px">
            <div class="col-lg-4">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        Create Events Category
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="savingEvent">
			    			<label>Category name:
				    			<input v-model="form.name" type="text" class="form-control" placeholder="Enter event category" />
			    			</label><br>
			    			<span v-text="errors.name"></span>
			    		</form>
                    </div>
                </div>
            </div>
    		               
	    		
    		</div>
    	`,

    	data(){
    		return {
    			form: {
    				name: ''
    			},
    			errors: {
    				name : ''
    			}
    		}
    	},

    	created(){
    		// console.log('im created')
    	},

    	methods: {
    		savingEvent(){
    			let self = this;
    			self.errors.name = '';
    			self.$http.post('/event/category', self.form).then((resp) => {
    				if (resp.status === 200) {
    					let json = JSON.parse(resp.body);
    					if (json.id > 0) {
    						self.form.name = '';
    						require(['toastr'], function(toastr){
    						    toastr.success('Event Category was added.');
    						});
    					}
    				}
    			}, (resp) => {
    				console.log('failed');
    				if (resp.status === 422) {
    					let json = JSON.parse(resp.body);
    					$.each(json, function(index, val) {
    						self.errors[index] = val;
    					});
    				}
    			});
    		}
    	}
    });
   
    return Component; 
});