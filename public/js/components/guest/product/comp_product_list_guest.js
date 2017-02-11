define([
    'vue',
    'vue-resource',
    'text!templates/guest/product/template_product_list_guest.html',
    'css!libs/bootstrap/shop-homepage.css',
    'components/guest/product/comp_modal_product_details',
    'components/guest/product/size/comp_list_of_sizes'
    ], 
    function(Vue, VueResource, template, css, CompProductDetails, CompListOfSize) {

    Vue.use(VueResource);

    var Component = Vue.extend({
        template: template,
        data: function(){
            return {
                category: ''
            }
        },
    	props: {
            products: {
                /* 
                    Reminder:
                    this product is not the same as
                    the product list in parent data,
                    this is filtered with cid, whenever
                    ther $route.params.id is changed
                */
                type: Array
            },

    	},

        created(){
            this.filterProducts(router._currentRoute.params.id);
        },

        components: {
            'product-details': CompProductDetails,
            'sizes-of-category': CompListOfSize
        },

        watch: {
            '$route.params.id': function(newVal, oldVal){
                this.filterProducts(newVal);
            }
        },

        methods: {
            filterProducts(cid){
                this.products = this.$parent.products.filter(function(index) {
                    return Number(index.category) === Number(cid);
                });
            },

            sortListByPrice(a, b){
                var self = this;
                var category = router._currentRoute.params.id;
                if (Number(category) > 0) {
                    var resource = self.$resource('product/between_price{/p1}{/p2}{/cid}');
                      // GET someItem/1
                      resource.get({
                         p1: a,
                         p2: b,
                         cid: category
                      }).then((response) => {
                          if (response.status === 200) {
                              var json = JSON.parse(response.body);
                              self.$parent.products = json;
                          }
                      });
                }else {
                    console.log('sort all');
                }
            },

            filterItemsByPrice(a, b){
                var category = router._currentRoute.params.id;
                this.products = this.$parent.products.filter(function(model) {
                    return Number(model.prize) >= Number(a) &&
                           Number(model.prize) <= Number(b) &&
                           Number(model.category) === Number(category);
                });
            },

            displayAll(){
                var category = router._currentRoute.params.id;
                this.products = this.$parent.products.filter(function(index) {
                    return Number(index.category) === Number(category);
                });
            },

            foundProducts(cid){
                return (this.productWhereCid(cid).length === 0) ? true : false;                
            },

            productWhereCid(cid){
                return this.$parent.products.filter(function(model){
                    return Number(cid) === Number(model.category);
                });
            },

            showItemDetails(item){
                var self = this;
                var child = self.$children[0];
                child.item = item;                
                $('#modal-product-details').modal('show');
            }
        }

    });
   
    return Component; 
});