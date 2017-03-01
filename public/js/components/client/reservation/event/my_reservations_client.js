define([
	'vue',
	'vue-resource',
	'underscore'], 
	function(
        Vue,
        VueResource,
        underscore) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
    		<div class="container" style="margin-top: 80px">
    			<div class="panel panel-primary">
    				<div class="panel-heading">
    					My Reservations
    				</div>
    				<div class="panel-body" style="font-size: 12px">
    					<table class="table table-hover">
    						<thead>
    							<tr>
    								<th>Event Name</th>
    								<th>Event Description</th>
    								<th>Event Address</th>
    								<th>From</th>
    								<th>To</th>
    								<th>Category</th>
    								<th>Package Type</th>
    								<th>Event Status</th>
    							</tr>
    						</thead>
    						<tbody>
    							<tr v-for="event in events">
    								<td>{{ event.event_name }}</td>
    								<td>{{ event.event_description }}</td>
    								<td>{{ event.address }}</td>
    								<td>{{ event.from }}</td>
    								<td>{{ event.to }}</td>
    								<td>{{ findEventCategory(event) }}</td>
    								<td>{{ event.package }}</td>
    								<td>{{ getEventStatus(event.event_status) }}</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	`,
    	
    	data: function(){
    		return {
    			event_categories: [],
                events: []
    		}
    	},

    	created(){
    		this.fetchMyReservations();
    	},

   
    	methods: {
    		getEventStatus(status){
    			let self = this;
    			return (status === 0) ? 'on-going' : 'finished';
    		},
    		findEventCategory(event){
    			let self = this;
    			let rs = _.filter(self.event_categories, {id: event.category});
    			if (rs.length) {
    				return rs[0].name;
    			}else {
    				return 'category not found';
    			}
    		},
    		fetchMyReservations(){
    			let self = this;
    			self.$http.get('/event/reservations/client').then((resp) => {
    				if (resp.status === 200) {
    					let json = JSON.parse(resp.body);
    					self.event_categories = json.event_categories;
    					self.events = json.events;
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		}
    	}

    });
   
    return Component; 
});