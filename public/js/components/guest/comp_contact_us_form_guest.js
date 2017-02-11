define(['vue',
	'vue-resource',
	'text!templates/guest/temp_contact_us_form_guest.html',
    'moment'], 
	function(Vue, VueResource, template, moment) {
   
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: template,
        props: {
            products: {
                type: Array
            }
        },
    	data: function(){
    		return {
    			form: {
    				email: '',
    				name: '',
    				phone: '',
    				message: ''
    			},
    			isSending: false
    		}
    	},

    	methods: {

    		clearForm(){
    			var self = this;
    			self.form.email = '';
    			self.form.name = '';
    			self.form.phone = '';
    			self.form.message = '';
    			setTimeout(function() {
    				self.isSending = false;
    			}, 700);
    		},

    		submitContactForm(){
    			var self = this;
    			self.isSending = true;
                self.form.date = moment().format('MMMM DD, YYYY HH:mm:ss');
    			self.$http.post('/message', self.form).then((resp) => {
    				if (resp.status === 200) {
    					var json = JSON.parse(resp.body);
    					if (json.sent) {
    						self.clearForm();
    						require(['alertify'], function(alertify){
    						    alertify.success('Your Message has been Sent, thank you for reaching us');
    						});
    					}
    				}
    			}, (resp) => {
    				if (resp.status === 422) {
    					var errors = JSON.parse(resp.body);
    					self.isSending = false;
    					require(['alertify'], function(alertify){
    					    $.each(errors, function(index, val) {
    					    	alertify.error(val[0]);
    					    });
    					});
    				}
    			});
    			
    		}
    	}
    });
   
    return Component; 
});