define([
	'vue','vue-resource',
    'underscore',
	'text!templates/product/temp_product_table.html',
    'css!libs/bootstrap/shop-homepage.css',
    'components/admin/product/comp_modal_show_product',
    'components/admin/product/comp_list_of_products_in_details_admin'],
	 function(Vue, VueResource, _, template, css, CompUpdateProd, CompDisplayInDetails) {
   	
   	Vue.use(VueResource);

    var Component = Vue.extend({
    	template: template,
        props: {
            filteredProducts: {
                type: Array
            },
            user: {
                type: Object
            }
        },
    	data: function(arguments) {
    		return {
                modalUpdateItemProps: {}, modalUpdateItemColors: [], modalUpdateItemSizes: [],
                products: [], colors: [], sizes: [], categories: [], subs: [],
                stocks: [],
                search: '', 
                selected_cat: 0,
                displayInDetails: false, displayByWhat: ''
    		}
    	},

    	created(){
            var self = this;
            self.fetch();
        },

        ready(){
            this.initSearchableCats();
        },

        components: {
           'modal-update-category': CompUpdateProd,
           'display-in-details': CompDisplayInDetails     
        },

        computed: {
            
        },

    	methods: {
            getCurrentStock(product){
                let self = this;
                let rs = _.filter(self.stocks, {product_id: product.id});
                if (rs.length) {
                    let model = rs[0];
                    return model.running_balance;
                }else { return 0; };
            },
            removeProduct(item){
                var self = this;
                require(['alertify'], function(alertify){
                    alertify.confirm('Would you like to remove : <b>'+item.title + '</b> ?', function(e){
                        if (e) {
                            var resource = self.$resource('product{/id}');
                            resource.delete({id: item.id}).then((resp)=> {
                                if (resp.status == 200) {
                                    var json = JSON.parse(resp.body);
                                    if (json.deleted) {
                                        self.products.$remove(item);
                                    }
                                }
                            }, (resp) => {
                                console.log(resp);
                            });
                        } 
                    });
                });
            },

            editProduct(item){
                $('#modal-update-product').modal('show');
                this.modalUpdateItemProps = item;
                this.modalUpdateItemColors = _.where(this.colors, {pid: item.id});
                this.modalUpdateItemSizes  = _.where(this.sizes, {pid: item.id});
            },

            itemLength(){
                if (typeof this.filteredProducts === 'object') {
                    return this.filteredProducts.length;
                }
            },
            
            getFilteredProducts(){
                var cid = this.selected_cat;
                if(Number(cid) === 0){
                    this.filteredProducts = this.products;
                }else {
                    this.filteredProducts = this.products.filter(function(index) {
                        return Number(index.category) === Number(cid);
                    });
                }
            },

            initSearchableCats(){
                var $select = $('.select2_single');
                var vm = this;
                require(['select2'], function(){
                   $select.select2({
                        placeholder: "Select a category",
                        allowClear: true
                    });
                   $select.change(function(event) {
                       var val = $(this).val();
                       vm.selected_cat = val;
                   });
                });
            },

            getCname(cid){
                var rs = _.where(this.categories, {id: cid});
                return (rs.length > 0) ? rs[0].name : '';
            },

    		showItem(item){
                var self = this;
                var child = self.$parent.$children[0];
                child.form = item;
                child.product_id = item.id;
                $('#modal-product').modal('show');
            },

            fetch(){
                var self = this;
                self.$http.get('/fetch_product_management').then((resp) => {
                    var json = JSON.parse(resp.body);
                    self.subs = json.sub_categories;
                    self.categories = json.categories;
                    self.colors = json.colors;
                    self.sizes = json.sizes;
                    self.stocks = json.stocks;
                    self.products = json.products;
                }, (response) => {
                    console.log('Error in fetching product management');
                    console.log(response);
                });
            }

    	},

        watch: {
            'displayByWhat': function(newVal){
                this.displayInDetails = (newVal === 'details') ? true : false;
            }
        }
        
    });
   
    return Component; 
});