define([
    'vue',
    'vue-resource',
    'underscore',
    'text!templates/admin/temp_management.html',
    'components/admin/product/comp_modal_show_product',
    'components/admin/product/comp_modal_product_view_image'], 
    function(
    Vue, 
    VueResource,
    _, 
    template,
    CompModalProduct,
    CompModalViewProduct) {
   
    var Component = Vue.extend({
    	template: template,

    	data: function(){
    		return {
                showCategories: true,
                categories: [], products: [], colors: [], sizes: []
    		}
    	},

        components: {
            'comp-modalproduct': CompModalProduct,
            'comp-modalproductview': CompModalViewProduct
        },

        created(){
            var self = this;
            self.fetch();
        },

    	methods: {
            
            fetch(){
                var self = this;
                self.$http.get('/fetch_product_management').then((resp) => {
                    var json = JSON.parse(resp.body);
                    self.categories = json.categories;
                    self.colors = json.colors;
                    self.sizes = json.sizes;
                    self.products = json.products;
                }, (response) => {
                    console.log(response);
                });
            },
    	}
    });
   
    return Component; 
});