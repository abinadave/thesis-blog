define(['underscore','vue','vue-resource'], 
	function(_, Vue, VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
    		<div style="padding: 20px" class="col-md-6">
            	<table class="table table-hover table-borderd table-striped">
            		<thead>
            			<tr>
            				<th>Category name</th>
            				<th>Date Created</th>
            				<th>Events</th>
            			</tr>
            		</thead>
            		<tbody>
            			<tr v-for="cat in event_categories">
            				<td>{{ cat.name }}</td>
            				<td>{{ cat.created_at.split(' ')[0] }}</td>
            				<td>0</td>
            			</tr>
            		</tbody>
            	</table>
    		</div>
    	`,

    	data(){
    		return {
    			event_categories: []
    		}
    	},

    	created(){
    		this.fetch();
    	},

    	methods: {
    		fetch(){
    			let self = this;
    			self.$http.get('/categories/even/management').then((resp) => {
    				if (resp.status === 200) {
    					let json = JSON.parse(resp.body);
    					self.event_categories = json.event_categories;
    					console.log(self.event_categories.length);
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		}
    	}
    });
   
    return Component; 
});