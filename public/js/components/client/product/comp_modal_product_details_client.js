define(['vue',
	'underscore',
	'text!templates/client/product/temp_modal_product_details_client.html'], 
	function(Vue, _, template) {
   
    var Component = Vue.extend({
    	template: template,
    	
    	props: {
    		colors: {
    			type: Array
    		}
    	},

    	data: function(){
    		return {
    			item: {
                    filename: 'default-image.png',
                    color: '',
                    size: ''
    			},
                isLoading: false,
                selectedSize: ''
    		}
    	},

    	methods: {

    		addLoadingIndicator(){
                var self = this;
                clearTimeout(self.timer);
                self.isLoading = true;
                setTimeout(function() {
                    self.isLoading = false;
                    $('#modal-reservation-guests').modal('show');
                }, 1500);
            },

            selectSize(size, event){
                this.item.size = size;
            },

    		reserveThisItem(item){
    			var self = this;
                self.addLoadingIndicator();
                var model = {
                    id         : item.id,
                    filename   : item.filename,
                    description: item.description,
                    color      : self.item.color,
                    size       : self.item.size,
                    title      : item.title,
                    price      : item.prize,
                    qty        : 1
                };
                var comp1 = self.$parent.$parent.$children[1];
                // console.log(comp1.carts);
                var rs = _.where(comp1.carts, {id: model.id});
                if (rs.length) {
                    var cart = _.first(rs);
                    cart.color = self.item.color;
                    cart.size = self.item.size;
                }else {
                    comp1.carts.push(model);
                }
    		},
    		assignSize(pid){
    			return _.where(this.$parent.sizes, {pid: pid});
    		}
    	}
    });
   
    return Component; 
});