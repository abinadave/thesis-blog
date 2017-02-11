define(['vue',
	'vue-resource',
	'underscore'],
	 function(Vue, VueResource, _) {
   
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: `
    		<div class="row">
              <div class="col-md-10 col-sm-10 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Trashed items <small>(restore)</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                    <input v-model="search" type="text" class="form-control" id="inputSuccess3" placeholder="Search product">
                    <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                  </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Product title</th>
                          <th>Description</th>
                          <th>Category</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="product in products | filterBy search in 'title' 'description'">
                          <td>{{ product.title }}</td>
                          <td>{{ product.description }}</td>
                          <td>{{ getCategory(product) | uppercase }}</td>
                          <td><a @click="restoreThisItem(product)" title="click to restore {{ product.title }}" style="cursor: pointer"><i class="fa fa-refresh"></i></a></td>
                        </tr>
                      </tbody>
                      <tr v-show="!products.length">
                         <td>No data was found in table.</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>  
    	`,

    	data: function(){
      		return {
              search: '',
        			categories: [],
        			products: []
      		}
    	},

      props: {
      	user: {
      		type: Object
      	}
      },

    	created(){
    		this.fetchData();
    	},    	

      ready(){
          var self = this;
          $('#modal-update-product').on('hidden.bs.modal', function(){
              $('.tag').remove();
          });
      },

      computed: {
        	filteredProducts(){
              // return this.products;
          }
      },

    	methods: {
      		restoreThisItem(product){
      			let self = this;
      			self.$http.post('/product/trashed/restore', {
      				id: product.id
      			}).then((resp) => {
      				if (resp.status === 200) {
      					let json = JSON.parse(resp.body);
      					if (json.restored) {
      						 self.products.$remove(product);
      					}
      				}
      			}, (errorResp) => {
      				console.log(errorResp);
      				alert('something went wrong while restoring this item');
      			});
      		},

      		getCategory(product){
      			let self = this;
      			let rs = _.filter(self.categories, {id: product.category});
      			if (rs.length) {
      				return rs[0].name;
      			}
      		},

         	fetchData(){
         		let self = this;
         		self.$http.get('/trashed_item_management').then((resp) => {
         			if (resp.status === 200) {
         				let json = JSON.parse(resp.body);
         				self.categories = json.categories;
         				self.products = json.products;
         			}
         		}, (errorResp) => {
         			console.log(errorResp);
         		});
         	}

    	 }
    });
   
    return Component; 
});