define(['underscore','vue','vue-resource'], 
	function(_, Vue, VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
                <div style="margin-top: 30px">
                <input type="text" class="form-control" style="width: 300px; border-radius: 25px; margin-bottom: 5px">
                   <table   class="table table-hover table-bordered table-condensed">
                       <thead>
                            <tr>
                                <th>User Account</th>
                                <th>Event name</th>
                                <th>Event Description</th>
                                <th>Event Address</th>
                                <th>Category</th>
                                <th>Package</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Event Status</th>
                            </tr>
                       </thead>
                       <tbody>
                           <tr v-for="event in events">
                               <td>{{ getUserAccountName(event) }}</td>
                               <td>{{ event.event_name }}</td>
                               <td>{{ event.event_description }}</td>
                               <td>{{ event.address }}</td>
                               <td>{{ getEventCategory(event) }}</td>
                               <td>{{ event.package }}</td>
                               <td>{{ event.from }} </td>
                               <td>{{ event.to }}</td>
                               <th>{{ event.event_status}}</th>
                           </tr>
                       </tbody>
                   </table>
                </div>    
    	`,

    	data(){
    		return {
                users: [],
                event_categories: [],
                events: []  
    		}
    	},

    	created(){
    		this.fetch();
    	},

    	methods: {
            getUserAccountName(event){
                let self = this;
                let rs = _.filter(self.users, {id: event.user_id});
                if (rs.length) {
                    return rs[0].name;
                }else {
                    return 'cannot find user';
                }
            },
            getEventCategory(event){
                let self = this;
                let rs = _.filter(self.event_categories, {id: event.category});
                if (rs.length) {
                    return rs[0].name;
                }
            },
            fetch(){
                let self = this;
                self.$http.get('event/admin').then((resp) => {
                    if (resp.status === 200) {
                        let json = JSON.parse(resp.body);
                        self.users = json.users;
                        self.event_categories = json.event_categories;
                        self.events = json.events;
                    }
                }, (resp) => {
                    console.log(resp)
                })
            }
    		
    	}
    });
   
    return Component; 
});