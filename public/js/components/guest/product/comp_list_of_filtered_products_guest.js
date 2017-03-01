define([
	'vue',
	'vue-resource',
    'components/guest/product/comp_modal_reviews_guest',
    'moment'], 
	function(
        Vue,
        VueResource, 
        CompModalReviews,
        moment) {

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
                                <p class="pull-right"><a style="cursor:pointer" @click="showReviews(item)">0 reviews</a></p>
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
                        <div class="modal fade" id="modal-reviews-product" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog" style="width: 520px">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title" id="myModalLabel">Item Reviews</h4>
                                    </div>
                                    <div class="modal-body">
                                        <!-- <list-of-reviews></list-of-reviews> -->
                                        <input v-model="newComment" @keyup.enter="commenting($value)" type="text" class="form-control" placeholder="White a comment" style="width: 80%" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                               </form> 
                            </div>
                            <!-- /.modal-dialog -->
                        </div>
            </div>
        `,
    	
    	data: function(){
    		return {
                newComment: '',
                currentItemId: 0
    		}
    	},

    	components: {
            'modal-reviews-product': CompModalReviews
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
            commenting(){
                let self = this;
                self.$http.post('/comment/new',{
                    comment: self.newComment,
                    true_date: moment().format('MMMM DD, YYYY HH:mm:ss'),
                    product_id: self.currentItemId
                }).then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.newComment = '';
                        // self.comments.push();
                        console.log(json);
                    }
                }, () => {

                });
            },
            fetchCommentOfItem(pid){
                let self = this;
                let resource = self.$resource('comment{/id}');
                resource.get({
                    id: pid
                }).then((resp) => {
                    console.log(resp)
                })
            },
            showReviews(item){
                let self = this;
                self.fetchCommentOfItem(item.id);
                self.currentItemId = item.id;
                $('#modal-reviews-product').modal('show')
            },
          	showItemDetails(item){
          		let self = this;
          		$('#modal-product-details').modal('show');
          		self.$emit('clickitem', item);
          	}
    	}

    });
   
    return Component; 
})