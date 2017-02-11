define(['vue','vue-resource','components/category/sub/temp_sub_category_form'], 
	function(Vue, VueResource, CompSubCatForm) {
   	
   	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: `
        <div class="col-md-6 col-sm-12 col-xs-12">
         
            <div class="x_panel">
              <div class="x_title">
                <h2>Category<small></small></h2>
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

                <form @submit.prevent="saveCategory()" class="form-horizontal form-label-left">

                      <div class="form-group">
                        <label class="col-sm-3 control-label">Category</label>
                        <div class="col-sm-9">
                          <div class="input-group">
                            <input v-model="cat_name" type="text" class="form-control">
                          <span v-text="error.name"></span>
                          </div>
                        </div>
                      </div>

                      <div class="divider-dashed"></div> 
                    <button type="submit" class="btn btn-primary">Save Category</button>

                </form>
              </div>
            </div>
          </div><br>
          <sub-category-form :categories="categories"></sub-category-form>
        `,

      	data: function(){
        		return {
              categories: [],
        			error: {
        				name: ''
        			},
        			cat_name: ''
        		}
      	},
        props: {
            user: {
                type: Object
            }
        },
        components: {
            'sub-category-form': CompSubCatForm
        },
        created(){
            this.fetch();
        },
      	methods: {
          fetch(){
              let self = this;
              self.$http.get('/category_management').then((resp) => {
                  if (resp.status === 200) {
                      let json = JSON.parse(resp.body);
                      $.each(json, function(index, val) {
                         self[index] = val;
                      });
                  }
              }, (resp) => {
                  console.log(resp);
              });
          },
      		saveCategory(){
      			var self = this;
      			self.error.name = '';
      			self.$http.post('/category', {
      				name: self.cat_name
      			}).then((resp) => {
      				if (resp.status === 200) {
      					var json = JSON.parse(resp.body);
      					
                self.categories.push({
                    id: json.id,
                    name: self.cat_name
                });

                self.cat_name = '';
      					require(['toastr'], function(toastr){
      					   	toastr.success('Category saved');
      					});
      				}
      			}, (resp) => {
      				if (resp.status === 422) {
      					var json = JSON.parse(resp.body);
      					$.each(json, function(index, val) {
      						self.error[index] = val;
      					});
      				}
      			});
      		}
      	}
    });
   
    return Component; 
});