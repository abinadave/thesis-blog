define(['vue',
    'vue-resource',
    'text!templates/client/reservation/temp_modal_all_reservation_client.html'], 
	function(Vue, VueResource, template) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: template,
        
    	data: function(){
    		return {
                carts: [],
                isSaving: false
    		}
    	},
        methods: {
            checkOutItems(){
                var self = this;
                self.isSaving = true;
                $('#modal-product-details').modal('hide');
                self.$http.post('/client/reservation', {
                    carts: self.carts
                }).then( (resp) => {
                    if (resp.status === 200) {
                        self.isSaving = false;
                        $('#modal-reservation-guests').modal('hide');
                        require(['alertify'], function(alertify){
                            alertify.success('Items successfully reserved');
                        });
                    }
                }, (resp) => {
                    console.log(resp);
                });
            }
        }
    });
   
    return Component; 
});