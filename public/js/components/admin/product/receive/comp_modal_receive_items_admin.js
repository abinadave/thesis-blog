define(['vue','vue-resource','underscore'],
	 function(Vue, VueResource, _) {
   	
   	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
      props: {
          user: {
              type: Object
          },
          checkedProducts: {
              type: Array
          },
          products: {
              type: Array
          },
          stocks: {
              type: Array
          }
      },
    	template: `
          <div class="modal fade" id="modal-receive-items" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog" style="width: 60%">
                <form>
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title" id="myModalLabel">Item Details {{ checkedProducts.length }}</h4>
                      </div>
                      <div class="modal-body">
                         <table class="table table-bordered table-hovered table-condensed">
                             <thead>
                                 <tr>
                                    <th>Qty</th>
                                    <th>Unit</th>
                                    <th>Item</th>
                                    <th>Description</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr v-for="item in getCheckedItems">
                                    <td width="90"><input v-model="item.qty" style="height: 25px" type="text" class="text-center form-control"></td>
                                    <td width="90"><input v-model="item.unit" style="height: 25px" type="text" class="text-center form-control"></td>
                                    <td>{{ item.title }}</td>
                                    <td>{{ item.description }}</td>
                                 </tr>
                             </tbody>
                         </table>
                         <hr>
                         <label>Received By
                            <input v-model="form.received_by" type="text" class="form-control" />
                         </label>
                         <label>Location Received from
                            <input v-model="form.location_received_from" type="text" class="form-control" />
                         </label><br>
                         <label>Verified by
                            <input v-model="form.verified_by" type="text" class="form-control" />
                         </label>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                          <button @click="receiveItems" type="button" class="btn btn-sm btn-primary" :disabled="isReceiving">Receive item</button>
                      </div>
                  </div>
                  <!-- /.modal-content -->
                 </form> 
              </div>
              <!-- /.modal-dialog -->
          </div>
      `,
    	data: function(arguments) {
      		return {
              isReceiving: false,
              form: {
                  verified_by: '',
                  received_by: '',
                  location_received_from: ''
              },
              errors: {
                  verified_by: '',
                  received_by: '',
                  location_received_from: ''
              }
      		}
    	},

    	created(){
         
      },

      ready(){
         
      },

      components: {
          
      },

      computed: {
          getCheckedItems(){
              let self = this;
              return self.products.filter(function(model){
                  return _.contains(self.checkedProducts, model.id.toString()) === true;
              });
          }
      },

    	methods: {
          saveReceivingItems(resp){
              let self = this;
              self.$http.post('/receive_item', {
                  receive_form_id: resp.id,
                  items: self.getCheckedItems
              }).then((resp) => {
                  if (resp.status == 200) {
                      self.deductSomeQtys();
                  }
              });
          },
          deductSomeQtys(){
              let self = this;
              let items = self.getCheckedItems;
              if (items.length) {
                  let item = {}, incrementedStock = 0;
                  let rsStocks = [];
                  for (var i = self.getCheckedItems.length - 1; i >= 0; i--) {
                      item = self.getCheckedItems[i];
                      rsStocks = _.filter(self.stocks, {product_id: item.id});
                      if (rsStocks.length) {
                          incrementedStock = Number(item.qty) + Number(rsStocks[0].running_balance);
                          rsStocks[0].running_balance = incrementedStock;
                      }
                  }
              }
              self.isReceiving = false;
              self.$emit('process-completed');
          },
          receiveItems(){
              let self = this;
              let models = self.getCheckedItems;
              let model = {};
              if (!model.length) {
                  self.isReceiving = true;
                  self.$http.post('/receive_form', self.form).then((resp) => {
                      if (resp.status === 200) {
                          let json = JSON.parse(resp.body);
                          self.saveReceivingItems(json);
                      }
                  }, (resp) => {
                      if (resp.status === 422) {
                          let json = JSON.parse(resp.body);
                          require(['toastr'], function(toastr){
                              $.each(json, function(index, val){
                                 toastr.info(val);
                              });
                          });
                      }
                  });
              }else {
                  require(['toastr'], function(toastr){
                      toastr.warning('Cant receive items, Please select atleast one item');
                  });
              }
          },
          getByKey(i, key){
              let rs = this.getProduct(i);
              if (rs.length) {
                  return rs[0][key];
              }
          },

          getProduct(i){
              return this.products.filter(function(model){
                  return Number(model.id) === Number(i);
              });
          },

    	},

      watch: {
          
      } 
        
    });
   
    return Component; 
});