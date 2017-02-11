define([
	'vue',
	'vue-resource',
    'underscore',
    'components/guest/category/comp_side_bar_category_guest',
    'components/guest/product/comp_list_of_filtered_products_guest',
    'components/guest/product/comp_modal_product_details',
    'components/guest/reservation/comp_modal_all_reservation_guest'
    ,'components/guest/reservation/comp_checkout_product_reservation_guest'
    ], 
	function(
        Vue,
        VueResource, 
        _,
        CompSideBarCategory,
        CompFilteredProductsGuest,
        CompProductDetails,
        CompModalAllReservations,
        CompCheckOutCarts) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
            <div style="margin-top: 100px" class="container" v-show="!checkingOut">
                <div class="col-md-3">
                    <sidebar-categories @viewchange="filterProducts"
                        :sub-categories="sub_categories"
                        :categories="categories"
                    ></sidebar-categories>
                </div>
                <div class="col-md-9">
                    <div style="display: inline">
                        <filtered-products 
                            @clickitem="setItemToModal" 

                            :products="products" 
                            :sci="sci">
                        </filtered-products>                        
                    </div>
                </div>
            </div>
            <modal-product-details 
            @addcart="saveToCart"
            :colors="colorsModal"
            :sizes="sizesModal"
            :item="itemModal"></modal-product-details>

            <modal-all-reservations
                @checkout="checkoutItems"
                :carts="carts"
            ></modal-all-reservations>
            <div v-show="checkingOut === true">
                <checkout-carts></checkout-carts>
            </div>
        `,
    	data: function(){
    		return {
    			sub_categories: [], categories: [], products: [], colors: [], sizes: [],
                /* sub category id [sci] */
                sci: 0,
                itemModal: {},
                colorsModal: [],
                sizesModal: [],
                carts: [],
                checkingOut: false
    		}
    	},
    	components: {
    	   'sidebar-categories': CompSideBarCategory,
           'filtered-products': CompFilteredProductsGuest,
           'modal-product-details': CompProductDetails,
           'modal-all-reservations': CompModalAllReservations,
           'checkout-carts': CompCheckOutCarts
    	},
    	
    	created(){
    		this.fetch();
            this.fetchColorSizes();
    	},

        computed: {

        },

    	methods: {
            checkoutItems(){
                let self = this;
                console.log('checkout items');
            },
            saveToCart(cart){
                let self = this;
                var rs = _.where(self.carts, {id: cart.id});
                if (rs.length) {
                    var cart = _.first(rs);
                    cart.color = self.item.color;
                    cart.size = self.item.size;
                }else {
                    self.carts.push(cart);
                }
            },
            setItemToModal(item){
                let self = this;
                self.itemModal = item;
                self.colorsModal = _.filter(self.colors, {pid: item.id});
                self.sizesModal  = _.filter(self.sizes,  {pid: item.id});
                console.log('colors found: '+ self.colorsModal.length);
                console.log('sizes found: '+ self.sizesModal.length);
            },

            filterProducts(sub){
                let self = this;
                self.sci = sub.id;
            },
            fetch(){
                let self = this;
                self.$http.get('/product/management/guest').then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.categories = json.categories;
                        self.sub_categories = json.sub_categories;
                        self.products = json.products;
                    }
                }, (resp) => {
                    console.log(resp);
                });
            },
            fetchColorSizes(){
                let self = this;
                self.$http.get('/product/management/color_and_size').then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.colors = json.colors;
                        self.sizes = json.sizes;
                    }
                }, (resp) => {
                    console.log(resp);
                });
            }
    	}

    });
   
    return Component; 
});