define(['vue',
	'underscore',
	'text!templates/admin/reservation/temp_modal_reservation_items_admin.html'], 
	function(Vue, _, template) {
   
    var Component = Vue.extend({
    	template: template,
    	props: {
            items: {
                type: Array
            },

            products: {
            	type: Array
            }
        },

        methods: {
        	findPhoto(item){
        		var self = this;
        		var rs = _.where(self.products, {id: item.product_id});
        		if (rs.length) {
        			var product = _.first(rs);
        			return product.filename;
        		}
        	},

        	findTitle(item){
        		var self = this;
        		var rs = _.where(self.products, {id: item.product_id});
        		if (rs.length) {
        			var product = _.first(rs);
        			return product.title;
        		}
        	},

        	findDesc(item){
        		var self = this;
        		var rs = _.where(self.products, {id: item.product_id});
        		if (rs.length) {
        			var product = _.first(rs);
        			return product.description;
        		}
        	},

        	findPrice(item){
        		var self = this;
        		var rs = _.where(self.products, {id: item.product_id});
        		if (rs.length) {
        			var product = _.first(rs);
        			return product.prize;
        		}
        	}

        }
    })
   
    return Component; 
});