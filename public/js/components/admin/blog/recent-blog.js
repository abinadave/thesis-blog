define(['vue','vue-resource',], 
	function(Vue, VueResource) {
    
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template:
      	`
      		<div class="col-md-6">
      		<table class="table table-hover table-condensed">
      			<thead>
      				<tr>
      					<th>Blog Title</th>
      					<th>Visits</th>
      					<th width="1"></th>
      				</tr>
      			</thead>
      			<tbody>
      				<tr v-for="blog in blogs">
      					<td style="text-align: left">{{ blog.title_slug }}</td>
      					<td>0</td>
      					<td><a @click="deleteBlog(blog)" style="cursor:pointer"><span class="glyphicon glyphicon-remove"></span></a></td>
      				</tr>
      			</tbody>
      		</table>
      		</div>
        `,
    	
      	props: {
           
    	},
        
        data: function(){
            return {
				blogs: []                
            }
        },

        created(){
        	this.fetch();
        },
        
        components: {

        },

        methods: {
        	deleteBlog(blog){
        		let self = this;
        		let confirmed = confirm('Are you sure ?');
        		if (confirmed) {
        			let resource = self.$resource('blog{/id}');
        			resource.delete({
        				id: blog.id
        			}).then((resp) => {
        				if (resp.status === 200) {
        					let json = JSON.parse(resp.body);
        					if (json.deleted) {
        						self.blogs.remove(blog);
        					}
        				}
        			}, (error) => {
        				console.log(error);
        			})
        		}
        	},
  			fetch(){
  				let self = this;
  				self.$http.get('/blogManagement').then((resp) => {
  					if (resp.status === 200) {
  						let json = JSON.parse(resp.body);
  						self.blogs = json.blogs;
  					}
  				}, (resp) => {
  					console.log(resp);
  				});
  			}
        },



    });
   
    return Component; 
});