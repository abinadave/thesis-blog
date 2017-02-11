define(['vue','vue-resource'], 
	function(Vue, VueResource) {
   	
   	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({

      	template: ` 
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Sub-Category<small></small></h2>
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
                <form @submit.prevent="saveSubCategory()" class="form-horizontal form-label-left">
                      <div class="form-group">
                        <label class="col-sm-3 control-label">Category</label>
                        <div class="col-sm-9">
                          <div class="input-group">
                            <input v-model="sub_cat_name" type="text" class="form-control">
                          <span v-text="errors.name"></span>
                          </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="input-group" style="margin-left: 120px">
                               <select v-model="category">
                                   <option value="none">Select category</option>
                                   <option v-for="category in categories | orderBy 'name'" value="{{ category.id }}">
                                      {{ category.name }}
                                   </option>
                               </select><br>
                                <span v-text="errors.category"></span>
                            </div>
                        </div>
                      </div>
                      <div class="divider-dashed"></div> 
                    <button type="submit" class="btn btn-primary">Save Sub-category</button>
                </form>
              </div>
            </div>
          </div>
        `,

      	data: function(){
        		return {
        			 errors: {
                  name: '',
                  category: ''
               },
               sub_cat_name: '',
               category: ''
      		  }
      	},

        props: {
            categories: {
                type: Array
            }
        },

      	methods: {
      		  saveSubCategory(){
                let self = this;
                self.clearErrors().$http.post('/sub_category', {
                    name: self.sub_cat_name,
                    category: self.category
                }).then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        if (json.id) {
                            self.sub_cat_name = '';
                            require(['toastr'], function(toastr){
                                toastr.info('Sub Category successfully added');
                            });
                        }
                    }
                }, (resp) => {
                    if (resp.status === 422) {
                        let json = JSON.parse(resp.body);
                        $.each(json, function(index, val) {
                            self.errors[index] = val;
                        });
                    }
                });
            },
            clearErrors(){
                let self = this;
                $.each(self.errors, function(index, val) {
                    self.errors[index] = '';
                });
                return this;
            }
      	}
    });
   
    return Component; 
});