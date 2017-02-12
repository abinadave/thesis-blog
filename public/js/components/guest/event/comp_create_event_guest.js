define(['underscore','vue','vue-resource'], 
	function(_, Vue, VueResource) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: `
                <div class="container" style="margin-top: 100px">
                    <div class="panel panel-success">
                        <div class="panel-heading">
                            Event Reservation
                        </div>
                        <div class="panel-body">
                            <form style="margin: 20px">
                            	<label>
                            		Event Name: <input type="text" class="form-control" />
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            	<label>
                            		Event Address: <input type="text" class="form-control" />
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                            	<label>
                            		Package Type: 
                            		<select style="width: 184px" class="form-control">
                            			<option>Partial Payment</option>
                            			<option>Full payment</option>
                            			<option>On the day</option>
                            		</select>
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            	<label>
                            		Event Category: 
                            		<select style="width: 184px" class="form-control">
                            			<option>Select category</option>
                            			<option value="{{ cat.id }}" v-for="cat in event_categories">
                            				{{ cat.name }}
                            			</option>
                            		</select>
                            	</label>
                            	<!-- <hr> -->
                            	<h4 class="text-primary">
                            		Schedule
                            	</h4>
                            	<label>
                            		Date:
                            		<input type="date" class="form-control">
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            	<label>Time
                            		<input id="basicExample" type="text" class="time" />
                            	</label><br>
                            	<label>Event Status
                            		<input  type="text" class="form-control" value="on-going" disabled />
                            	</label>
                            </form>
                        </div>
                        
                    </div>
                </div>
            	               
    	`,

    	data(){
    		return {
    			event_categories: []
    		}
    	},

    	created(){
    		this.fetchEventsCateory();
    		this.initializeTimePicker();
    	},

    	methods: {
    		initializeTimePicker(){
    			let self = this;
    			require(['libs/timepicker/jquery.timepicker.min',
    			'css!libs/timepicker/jquery.timepicker.css'], function(){
    			    $('#basicExample').timepicker();
    			});
    		},
    		fetchEventsCateory(){
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