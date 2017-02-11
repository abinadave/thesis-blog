define(['vue','vue-resource','moment','underscore',
    'css!libs/css/blog_list_guest_style.css'], 
	function(Vue, VueResource, moment, _, css) {
    Vue.use(VueResource);
    var Component = Vue.extend({
    	template: `
            <div class="article">
                <div v-for="blog in blogs | filterBy search in 'title' 'body'">
                    <h1><a href="">{{ blog.title }}</a></h1>
                    <span class="date" style="display: block">
                        {{ formatDate(blog.true_date) }}
                    </span>
                    <br/>
                        <div v-for="file in getFiles(blog.id)" style="display: inline">
                            <img 
                                style="display: inline; padding: 10px" 
                                :src="'uploads/posts/' + file.title_slug + '/' + file.filename">
                            </img>
                        </div>
                        {{{ blog.body.substr(0, 190) }}}....<br>
                        <button class="btn btn-danger btn-lg">Read more <i class="fa fa-angle-double-right"></i></button><br><br><br>
                    <hr>
                </div>
            </div>
        `,
        props: {
            blogs: {
                type: Array
            },
            blogFiles: {
                type: Array
            },
            search: {
                type: String
            }
        },
    	components: {
    		
    	},
    	created(){
    		
    	},
    	methods: {
    		formatDate(date){
                return moment(date).format('MMMM DD, YYYY hh:mm a')
            },
            getFiles(i){
                let self = this;
                let rs = _.filter(self.blogFiles, {blog_id: i});
                return rs;
            }
    	}
    });
   
    return Component; 
});