  define(['vue','vue-resource','underscore'], 
	function(Vue, VueResource, _) {
   	
   	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: `
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  
                  <div class="x_content">

                    <table class="table">
                       <thead>
                        <tr>
                          <th>Category Name</th>
                          <th>Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="cat in categories">
                            <td>{{ cat.name }}</td>
                            <td>{{ getItems(cat) }}</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>

               <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  
                  <div class="x_content">

                    <table class="table">
                       <thead>
                        <tr>
                          <th>Sub-category name</th>
                          <th>Category</th>
                          <th>Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="sub in sub_categories">
                            <td>{{ sub.name }}</td>
                            <td>{{ getCategoryName(sub) }}</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            
        `,
        props: {
            user: {
                type: Object
            }
        },
    	data: function(){
      		return {
      		      categories: [], 
                sub_categories: [],
                products: []
      		}
    	},

      created(){
          this.fetchdata();
      },

    	methods: {
        getItems(cat){
            return this.products.filter(function(index){
                return index.id === cat.id;
            }).length;
        },
        getCategoryName(sub){
            let self = this;
            let rs = _.filter(self.categories, {id: sub.category});
            if (rs.length) {
                let first = rs[0];
                return first.name;
            }else { return ''; };
        },
    		fetchdata(){
                let self = this;
                self.$http.get('/categoryMnagment').then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.products = json.products;
                        self.sub_categories = json.sub_categories;
                        self.categories = json.categories;
                    }
                });
            }
    	}
    });
   
    return Component; 
});