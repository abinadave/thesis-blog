define([
	'vue',
	'vue-resource',
	'underscore'], 
	function(
        Vue,
        VueResource,
        underscore) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
    		<div class="container" style="margin-top: 80px">
    			<div class="panel panel-success">
    				<div class="panel-heading">
    					Product Reservations
    				</div>
    				<div class="panel-body" style="font-size: 12px">
                        <input type="text" class="form-control" v-model="search" style="width: 200px" placeholder="Search here">
    					<table class="table table-hover table-condensed">
    						<thead>
                                <tr>
                                    <th>Qty</th>
                                    <th>Product name</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Date of Trasanction</th>
                                </tr>                  
                            </thead>
                            <tbody>
                                <tr v-for="cart in carts | filterBy search in 'qty' 'color' 'size'">
                                    <td>{{ cart.qty }}</td>
                                    <td>{{ getProductTitle(cart) }}</td>
                                    <td>{{ cart.color }}</td>
                                    <td>{{ cart.size }}</td>
                                    <td>{{ cart.created_at }}</td>
                                </tr>
                            </tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	`,
    	
    	data: function(){
    		return {
                search: '',
    			reservations: [],
                carts: [], products: []
    		}
    	},

    	created(){
    		this.fetchMyProductReservations();
    	},

    	methods: {
            getProductTitle(cart){
                let self = this;
                let rs = _.filter(self.products, {id: cart.product_id});
                return (rs.length > 0) ? rs[0].title : 'not found';
            },
    	    fetchMyProductReservations(){
                let self = this;
                self.$http.get('/product/reservation/client').then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.carts = json.carts;
                        self.products = json.products;
                    }
                }, (resp) => {
                    console.log(resp);
                });
            }
    	}

    });
   
    return Component; 
});