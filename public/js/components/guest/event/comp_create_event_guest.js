define(['underscore','vue','vue-resource',
'components/guest/event/create_account_event_reservation'], 
	function(_, Vue, VueResource, CompCreateAccountForm) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
        components: {
            'form-create-account': CompCreateAccountForm
        },
    	template: `
                <div class="container" style="margin-top: 100px">
                    <div v-show="creatingAccount">
                        <form-create-account 
                        @back="creatingAccount = false"
                        @accountcreated="doneUserSaveEvent"
                        :form="form"></form-create-account>
                    </div>
                    <div class="panel panel-success" v-show="!creatingAccount">
                        <div class="panel-heading">
                            Event Reservation
                        </div>
                        <div class="panel-body">
                            <form @submit.prevent="sendEvent" style="margin: 20px">
                            	<label>
                            		Event Name: <input v-model="form.event_name" type="text" class="form-control" />
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            	<label>
                            		Event Address: <input v-model="form.address" type="text" class="form-control" />
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                            	<label>
                                    Event Description: <input v-model="form.event_description" type="text" class="form-control" />
                                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                                
                                <label>
                            		Package Type: 
                            		<select v-model="form.package" style="width: 184px" class="form-control">
                            			<option value="partial">Partial Payment</option>
                            			<option value="full">Full payment</option>
                            			<option value="ontheday">On the day</option>
                            		</select>
                            	</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            	<label>
                            		Event Category: 
                             		<select v-model="form.category" style="width: 184px" class="form-control">
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
                                <label>From:
                                    <input v-model="form.from_date" type="date" class="form-control">
                                </label>
                                <input v-model="form.from_time" id="basicExample" type="text" class="time" /><br>
                                <label>To:
                                    <input v-model="form.to_date" type="date" class="form-control"/>
                                </label>
                                
                                <input v-model="form.to_time" id="basicExample2" type="text" class="time" /><br><br>
                            	<br>
                            	<label>Event Status
                            		<input type="text" class="form-control" value="on-going" disabled />
                            	</label>
                                <label>Customers Contact Number
                                <input type="text" class="form-control" v-model="form.contact_number">
                                </label>
                                <hr>
                                <button :disabled="processingAccount" class="btn btn-default btn-lg">Create Event</button>
                            </form>
                        </div>
                        
                    </div>
                </div>    
    	`,

    	data(){
    		return {
                form: {
                    user_id: 0,
                    event_name: '',
                    event_description: '',
                    address: '',
                    category: '',
                    package: '',
                    event_status: 'on-going',
                    contact_number: '',
                    from_date: '',
                    from_time: '',

                    to_date: '',
                    to_time: ''
                },
    			event_categories: [],
                processingAccount: false,
                creatingAccount: false
    		}
    	},

    	created(){
    		this.fetchEventsCateory();
    		this.initializeTimePicker();
    	},

    	methods: {
            clearForms(){
                let self = this;
                self.form.event_description = '';
                self.form.event_name = '';
                self.form.address = '';
                self.category = '';
                self.form.event_category = '';
                self.form.package = '';
                self.form.from_date = '';
                self.form.from_time = '';
                self.form.to_date = '';
                self.form.to_time = '';
                self.form.contact_number = '';
            },
            doneUserSaveEvent(user){
                let self = this;
                self.creatingAccount = false;
                self.processingAccount = true;
                self.form.user_id = user.id;
                self.$http.post('/event', self.form).then((resp) => {
                    if (resp.status == 200) {
                        let json = JSON.parse(resp.body);
                        console.log(json);
                        if (json.id > 0) {
                            alert('event successfully created.');
                            self.clearForms();
                        }
                    }
                }, (resp) => {
                    console.log(resp);
                });
            },
            sendEvent(){
                let self = this;
                self.creatingAccount = true;
            },
    		initializeTimePicker(){
    			let self = this;
    			require(['libs/timepicker/jquery.timepicker.min',
    			'css!libs/timepicker/jquery.timepicker.css'], function(){
    			    $('#basicExample').timepicker();
                    $('#basicExample2').timepicker();
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