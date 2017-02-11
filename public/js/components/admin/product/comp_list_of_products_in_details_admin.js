define([
	'vue','vue-resource',
    'underscore',
  'components/admin/product/receive/comp_modal_receive_items_admin'],
	 function(Vue, VueResource, _, CompModalReceiveItems) {
   	
   	Vue.use(VueResource);

    var Component = Vue.extend({
      props: {
          user: {
              type: Object
          },
          products: { 
              type: Array 
          },
          search: {
              type: String
          },
          categories: {
              type: Array
          },
          stocks: {
              type: Array
          },
          subs: {
              /* sub categories from the parent */
              type: Array
          }
      },
    	template: `
            <div>
            <div style="margin-top: -30px" v-show="checkedProducts.length ">
                <button class="btn btn-info btn-xs pull-right" @click="receiveSomeItems">receive ({{ checkedProducts.length }})</button>
            </div>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th width="1"></th>
                      <th>Product title</th>
                      <th>Category</th>
                      <th style="text-align: center">Category</th>
                      <th class="text-right">Price</th>
                      <th class="text-center">Stock remaining</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products | filterBy search in 'title' 'description' 'prize'">
                      <td><input type="checkbox" class="flat" v-model="checkedProducts" value="{{ product.id }}"></td>
                      <td>{{ product.title | uppercase }}</td>
                      <td>{{ getCategoryName(product) }}</td>
                      <td style="text-align: center">{{ getSubCategory(product) | uppercase }}</td>
                      <td class="text-right">{{ product.prize | currency '' }}</td>
                      <td class="text-center">{{ getRemainingStocks(product) }}</td>
                      <td>{{ product.description }}</td>
                    </tr>
                  </tbody>
                </table>
                <modal-receive-items 
                    @process-completed="finishedReceiving"
                   :products.sync="products"
                   :checked-products="checkedProducts"
                   :stocks.sync="stocks"
                ></modal-receive-items>
            </div>
        `,
       
    	data() {
      		return {
              checkedProducts: []
      		}
    	},

    	created(){

      },

      ready(){

      },

      components: {
          'modal-receive-items': CompModalReceiveItems
      },

      computed: {
          
      },

    	methods: {
          getCategoryName(product){
              let self = this;
              let rs = _.filter(self.categories, {id: product.id});
              if (rs.length) {
                  let model = rs[0];
                  return model.name;
              }else {
                  return '-';
              }
          },
          finishedReceiving(){
              let self = this;
              $('#modal-receive-items').modal('hide');
              $('div.x_content').find(':checkbox').prop('checked', false);
              self.checkedProducts = [];
              require(['toastr'], (toastr) => {
                  toastr.info('Process completed.');
              });
          },
          getRemainingStocks(product){
              let self = this;
              let rs = _.where(this.stocks, {product_id: product.id});
              if (rs.length) {
                  return rs[0].running_balance;
              }else {
                  return '<b>Stock not found</b>';
              }
          },
          getSubCategory(product){
              let self = this;
              let rs = _.filter(self.subs, {id: product.sub_category});
              if (rs.length) {
                  let model = rs[0];
                  return model.name;
              }else {
                  return '-';
              }
          },
          receiveSomeItems(){
              let self = this;
              if (!self.checkedProducts.length) {
                  require(['toastr'], function(toastr){
                      toastr.warning('Please select atleast one item');
                  });
              }else {
                  $('#modal-receive-items').modal('show');
              }
          }
    	},

      watch: {
          'checkedProducts': function(newVal){
              console.log(newVal);
          }
      } 
        
    });
   
    return Component; 
});