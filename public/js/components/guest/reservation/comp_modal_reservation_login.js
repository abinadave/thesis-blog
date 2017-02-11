define(['vue','vue-resource'], 
	function(Vue, VueResource) {
    
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
    		<div class="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    		 <form @submit.prevent="submitForm">
			    <div class="modal-dialog">
			        <div class="modal-content" style="width: 300px">
			            <div class="modal-header">
			                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			                <h4 class="modal-title" id="myModalLabel">Sign In to proceed order</h4>
			            </div>
			            <div id="div-msg-box" class="modal-body">
				            <label>Email
				            	<input type="text" v-model="email" class="form-control username-login">
				            	<span v-show="errors.email" style="color: #a94442;">{{ errors.email }}</span>
				            </label><br>
				            <label>Password
				            	<input type="password" v-model="password" class="form-control">
				            	<span v-show="errors.password" style="color: #a94442;">{{ errors.password }}</span>
				            </label>
			            </div>
			            <div class="modal-footer" style="border-color: transparent; margin-top: 5px">
			               <button class="btn btn-primary" type="submit">Login</button>
			            </div>
			        </div>
			    </div>
			  </form>  
			</div>
    	`,
      props: {
          carts: {
              type: Array
          }
      },
    	data: function(){
    		return {
    			email: '', 
    			password: '',
    			errors: {
    				email: '', 
    				password: ''
    			}
    		}
    	},

    	created(){
           
    	},

        watch: {
            
        },

    	methods: {
      		submitForm(){
      			let self = this;
      			self.clearErrors();
      			console.log(self.email);
      			console.log(self.password)
      			self.$http.post('/login/hasccount', {
      				email: self.email,
      				password: self.password,
              carts: self.carts
      			}).then((resp) => {
      				  if (resp.status === 200) {
                    let json = JSON.parse(resp.body);
                    if (json.id) {
                        self.$http.post('/login', {
                           email: self.email,
                           password: self.password
                        });
                    }
                }
      			}, (resp) => {
      				if (resp.status === 422) {
      					let json = JSON.parse(resp.body);
      					$.each(json, function(key, value){
      						self.errors[key] = value;
      					});
      				}
      			});
      		},
      		clearErrors(){
      			this.errors.email = '';
      			this.errors.password = '';
      			$('.username-login').focus();
      		}
    	}
    });
   
    return Component; 
});