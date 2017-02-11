define([
	'vue',
	'vue-resource'], 
	function(
        Vue,
        VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({

        props: {
        	/* sci = subCategoryId */
            products: {
            	type: Array
            }, 
            sci: {
            	type: Number
            },
            
        },

    	template: `
            <div>
            	<div v-show="sci === 0">
            		<div v-for="item in products" class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <a @click="showItemDetails(item)">
                              <img class="img-thumbnail" style="cursor: pointer; width: 400px; height: 300px" :src="'uploads/products/' + item.filename">
                            </a>
                          
                            <div class="caption">
                                <h4 class="pull-right">{{ item.prize | currency '' }}</h4>
                                <h4><a href="#" style="display: none">-</a>
                                </h4>
                                <p class="text-primary">{{ item.title | uppercase }}</p>
                                <p>{{ item.description }}</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                            <!-- <hr/> -->
                        </div>
                    </div>
            	</div>
              	 <div v-for="item in filteredProducts" class="col-sm-6 col-lg-6 col-md-6">
                        <div class="thumbnail">
                            <a @click="showItemDetails(item)">
                              <img class="img-thumbnail" style="cursor: pointer; width: 380px" :src="'uploads/products/' + item.filename">
                            </a>
                          
                            <div class="caption">
                                <h4 class="pull-right">{{ item.prize | currency '' }}</h4>
                                <h4><a href="#" style="display: none">-</a>
                                </h4>
                                <p class="text-primary">{{ item.title | uppercase }}</p>
                                <p>{{ item.description }}</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                            <!-- <hr/> -->
                        </div>
                    </div>

            </div>
        `,
    	
    	data: function(){
    		return {

    		}
    	},

    	components: {

    	},
    	
    	created(){

    	},

        computed: {
          	filteredProducts(){
          		let self = this;
          		return self.products.filter(function(index) {
          			return Number(index.sub_category) === Number(self.sci);
          		});
          	}  
        },

    	methods: {
          	showItemDetails(item){
          		let self = this;
          		$('#modal-product-details').modal('show');
          		self.$emit('clickitem', item);
          	}
    	}

    });
   
    return Component; 
})