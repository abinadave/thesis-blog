define(['underscore','vue','vue-resource',
'components/guest/event/comp_login_existing_account_event_reservation'], 
	function(_, Vue, VueResource, CompLoginEventReservation) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
            <div class="cold-md-6" style="margin-top: 5px">
                <a style="cursor:pointer; text-decoration: underline;" @click="$emit('back')">back to event form</a>
                 <div class="panel panel-info">
                        <div class="panel-heading">
                            
                        </div>
                       
                        <div class="panel-body">

                            <div v-show="!alreadyHaveAccount">

                              <form class="form-horizontal" role="form" @submit.prevent="registerAccount">

                                <div class="form-group">
                                    <label for="name" class="col-md-4 control-label">Name</label>

                                    <div class="col-md-6">
                                        <input v-model="form.name" id="name" type="text" class="form-control" name="name" value="" placeholder="First Last" autofocus>

                                    </div>
                                </div>
 
                                <div class="form-group">
                                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input v-model="form.email" id="email" type="email" class="form-control" name="email" value="" placeholder="name@example.com">

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="col-md-4 control-label">Password</label>

                                    <div class="col-md-6">
                                        <input v-model="form.password" id="password" type="password" class="form-control" name="password" placeholder="********Secret">

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                                    <div class="col-md-6">
                                        <input v-model="form.password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Re-type password">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <button type="submit" class="btn btn-info btn-block">
                                            <i class="fa fa-btn fa-user"></i> Register Account
                                        </button>
                                        <span>Already have an account ? 
                                        <a @click="alreadyHaveAccount = true" style="cursor: pointer; text-decoration: underline;" class="text-primary">Login</a></span>
                                    </div>
                                </div>
                              </form>

                            </div>

                            <div v-show="alreadyHaveAccount">
                                <login-account @registernew="alreadyHaveAccount = false"></login-account>
                            </div>
                        </div>
                    </div>
                    
            </div>
    	`,

    	data(){
    		return {
                alreadyHaveAccount: false,
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
    		}
    	},
        
        components: {
            'login-account': CompLoginEventReservation
        },

    	created(){
            
    	},

    	methods: {
            registerAccount(){
                let self = this;
                self.$http.post('/user/create', self.form).then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.$emit('accountcreated', json);
                    }
                }, (resp) => {
                    console.log(resp);
                });
            }
    	}
    });
   
    return Component; 
});