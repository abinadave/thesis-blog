define(['vue','vue-resource',
	'text!templates/guest/reservation/temp_checkout_product_reservation_guest.html',
    'components/guest/reservation/comp_modal_reservation_login'], 
	function(Vue, VueResource, template, CompModalLogin) {
    
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
                carts: [],
    			form: {
    				email: '',
    				firstname: '',
    				lastname: '',
    				company: '',
    				address: '',
    				city: '',
    				postal: '',
    				phone: '',
                    password_confirmation: '',
                    password: '',
                    user_id: 0
    			},
    			isSaving: false,
                checked: false,
                passwordField: false
    		}
    	},

    	created(){
            var self = this;
            
            
    	},

        watch: {
            'checked': function(newVal){
                /* savedInformation */
                this.passwordField = newVal;
            }
        },
        components: {
            'modal-login': CompModalLogin
        },
    	methods: {
            showLoginForm(){
                let self = this;
                $('#modal-login').modal('show');
                self.carts = self.$parent.parentCarts;
            },
    		proceedReservation(){
    			var self = this;
    			self.isSaving = true;
                if (self.checked) {
                    /* save account */
                    console.log('Save with users.');
                    self.$http.post('/user/create', {
                        name: self.form.firstname + ' ' + self.form.lastname,
                        email: self.form.email,
                        password: self.form.password,
                        password_confirmation: self.form.password_confirmation
                    }).then( (resp) => {
                        if (resp.status === 200) {
                            var user = JSON.parse(resp.body);
                            self.form.user_id = user.id;
                            self.saveReservation();
                        }
                    }, (resp) => {
                        if (resp.status === 422) {
                            var json = JSON.parse(resp.body);
                            if (json.hasOwnProperty('email')) {
                                alert('This email address is already taken. click log-in to Proceed Order');
                                $('#modal-login').modal('show');
                            }
                        }
                    });
                }else {
                    /* just save the reservation*/
                    console.log('just save Reservation');
                }
    		},

            saveReservation(){
                var self = this;
                self.$http.post('/reservation', self.form).then( (resp) => {
                    if (resp.status === 200) {
                        var json = JSON.parse(resp.body);
                        self.clearForm();
                        self.saveCarts(json.model.id);
                        setTimeout(function() {
                            self.isSaving = false;
                        }, 1000);
                    }
                }, (resp) => {

                });
            },

            checkAccount(){
                var self = this;
                if (self.checked) {
                    /* save with user */
                    
                }else {
                    /* just send reservation */

                }
            },


            saveCarts(rid){
                var self = this;
                self.$http.post('/carts', { 
                    carts: self.$parent.parentCarts,
                    reservation_id: rid
                }).then((resp) => {
                    if (resp.status === 200) {
                        var json = JSON.parse(resp.body);
                        if (json.saved === self.$parent.parentCarts.length) {
                            self.$parent.parentCarts = [];
                            router.go({name: 'home'});
                            require(['alertify'], function(alertify){
                                alertify.success('Reservation successfully saved');
                            });
                        }
                    }
                }, (resp) => {
                    console.log(resp);
                });
            },

            clearForm(){
                var self = this;
                self.form.email = '';
                self.form.firstname = '';
                self.form.lastname = '';
                self.form.company = '';
                self.form.address = '';
                self.form.city = '';
                self.form.postal = '';
                self.form.phone = '';
            }
    	}
    });
    return Component; 
});