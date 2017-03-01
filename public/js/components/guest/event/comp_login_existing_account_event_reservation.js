define(['underscore','vue','vue-resource'], 
	function(_, Vue, VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
            <div>
                <form @submit.prevent="logInANdSaveEvent" class="form-horizontal" role="form" method="POST">

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input v-model="form.email" id="email" type="email" class="form-control" name="email" value="">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input v-model="form.password" id="password" type="password" class="form-control" name="password">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-btn fa-sign-in"></i> Login
                                </button>
                                <a @click="$emit('registernew')" style="cursor: pointer; text-decoration: underline;">
                                    register new account
                                </a>
                            </div>
                        </div>
                    </form>
            </div>
    	`,

    	data(){
    		return {
                form: {
                    email: '',
                    password: ''
                }
    		}
    	},

    	created(){
            
    	},

    	methods: {
            logInANdSaveEvent(){
                let self = this;
                self.$http.post('/event/login', self.form).then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        if (json.found) {
                            self.$parent.$emit('accountcreated', json.user);
                        }
                    }
                }, (resp) => {
                    console.log(resp);
                })
            }
    	}
    });
   
    return Component; 
});