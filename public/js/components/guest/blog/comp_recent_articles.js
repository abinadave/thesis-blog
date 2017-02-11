define(['vue','vue-resource','moment'], 
	function(Vue, VueResource, moment) {
    Vue.use(VueResource);
    var Component = Vue.extend({
    	template: `
            <style type="text/css">
                .sidebar h3 {
                     font-size: 18px;
                }
                h3 {
                    color: #213136;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 28px;
                    font-family: "proxima-nova";
                    margin: 0 0 13px 0;
                }
                h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
                    font-family: "proxima-nova";
                }
            </style>
            <div style="margin-top: 20px" class="sidebar">
                <input v-model="search" type="text" class="form-control" placeholder="Search blog">
              
                <img style="margin-top: 40px" :src="'assets/img/blogsidebar-meritt.jpg'">
                <br><br><br>
                <h3>Recent Articles </h3>
           
                <p class="article" v-for="article in articles">
                    <a class="article-name" style="cursor: pointer; text-decoration: none">{{ article.title }} </a><br>
                    <em style="font-size: 12px">Posted on {{ formatDate(article.true_date) }}</em>
                </p>
            </div>
        `,
        props: {
            search: {
                type: String
            }
        },
        data(){
            return {
                articles: []
            }
        },
    	components: {
    		
    	},
    	created(){
    		let self = this;
            self.fetchRecentArticles();
    	},
    	methods: {
           formatDate(){
                let self = this;
                return moment().format('DD, MMM hh:mm')
           },
    	   fetchRecentArticles(){
                let self = this;
                self.$http.get('/blog/recent').then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.articles = json.articles;
                    }
                }, (resp) => {
                    console.log(resp);
                });
            }
    	}
    });
   
    return Component; 
});