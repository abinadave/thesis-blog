define(['vue',
	'text!templates/guest/reservation/temp_modal_all_reservation_guest.html'], 
	function(Vue, template) {
   
    var Component = Vue.extend({
    	template: template,
        props: {
            carts: {
                type: Array
            }
        },
    	data: function(){
    		return {
    			reservations: [],
                samplepass: []
    		}
    	},

        computed: {

            totalItems(){
                
            },

            totalPrice(){
                
            }
        },

        methods: {
            checkOutItems(){
                let self = this;
                $('#modal-product-details').modal('hide');
                $('#modal-reservation-guests').modal('hide');
                self.$emit('checkout');
                alert('checking out !!!')
            }
        }

    });
   
    return Component; 
});