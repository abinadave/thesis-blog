define([
	'vue',
	'vue-resource',
    'components/guest/category/comp_sub_category_list_in_sidebar'], 
	function(
        Vue,
        VueResource, 
        CompSubCatListInSideBar) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
        props: {
            categories: [], subCategories: []
        },
    	template: `
            <div>
                <div  style="margin-top: 20px">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" >
                      <div class="panel panel-default" v-for="category in categories">
                        <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#{{ category.id }}" aria-expanded="true" aria-controls="collapseOne">
                              {{ category.name }}
                            </a>
                          </h4>
                        </div>
                        <div id="{{ category.id }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body">
                            <sub-category-list :cid="category.id" :sub-categories="getSubCategoriesOfCategory(category)" :categories="categories"></sub-category-list>
                          </div>
                        </div>
                      </div>                          
                    </div>  
                </div>
            </div>
        `,
    	data: function(){
    		return {
    			cid: 0
    		}
    	},
    	components: {
    	   'sub-category-list': CompSubCatListInSideBar
    	},
    	
    	created(){

    	},

        computed: {
            
        },

    	methods: {
           getSubCategoriesOfCategory(category){
                let self = this;
                return self.subCategories.filter(function(index) {
                    return Number(index.category) === Number(category.id);
                });
           }
    	}

    });
   
    return Component; 
});