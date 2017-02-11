define(['vue','vue-resource',
	'components/guest/blog/comp_list_of_blogs_guest',
    'components/guest/blog/comp_recent_articles'], 
	function(Vue, VueResource, CompListOfBlogsGuest, CompRecentArticles) {
    Vue.use(VueResource);
    var Component = Vue.extend({
    	template: `
    		<style type="text/css">
    			.pinkBar p {
				    text-transform: uppercase;
				    color: #213136;
				    font-size: 12px;
				}
				.pinkBar {
				    width: 100%;
				    background-color: #F7CAC9;
				    margin-top: 5em;
				    height: 25px;
				    text-align: center;
				    padding: 5px 0px 0px 0px;
				}
    		</style>
    		<div class="pinkBar"><p class="text-center"> New Year, New Markdowns!</p></div>
    		<div class="container">
	    		<div class="right_col" role="main" style="margin-top: 0px">
		          <div class="">
		          
		            <div class="col-md-9">
		              	<latest-blogs 
                            :search="search"
                            :blog-files="blogFiles"
		              		:blogs="blogs">
		              	</latest-blogs>
                        <p v-show="!blogs.length">No data was found</p>
		            </div>

		            <div class="col-md-3">
		            	<recent-articles :search.sync="search"></recent-articles>
		            </div>

		          </div>
		        </div>
	        </div>
    	`,
    	data(){
    		return {
                blogFiles: [],
    			blogs: [],
                search: ''
    		}
    	},
        props: {
            products: { type: Array }
        },
    	components: {
    		'latest-blogs': CompListOfBlogsGuest,
            'recent-articles': CompRecentArticles
    	},
    	created(){
    		this.fetch();
    	},
    	methods: {
    		fetch(){
    			let self = this;
    			self.$http.get('/blogManagement').then((resp) => {
    				if (resp.status === 200) {
    					let json = JSON.parse(resp.body);
                        self.blogFiles = json.blog_files;
    					self.blogs = json.blogs;
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		}
    	}
    });
   
    return Component; 
});