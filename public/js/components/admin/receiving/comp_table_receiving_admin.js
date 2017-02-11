
define(['vue','vue-resource','underscore','moment',
	'components/admin/receiving/comp_modal_received_items'], 
	function(Vue, VueResource, _, moment, CompModalReceivedItems){

	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

	let Component = Vue.extend({
		template: `
			<div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Received Items <span class="badge">{{ receiving_items.length }}</span></h2>
                    <div class="col-md-2 col-sm-12 col-xs-12 form-group">
	                    <input v-model="search" type="text" placeholder="Search box" class="form-control">
	                </div>
	                <a @click="redisplayAll" style="display: inline; margin-top: 50px; cursor: pointer" title="click this to clear filter date."><i class="fa fa-remove"></i></a>
	                <div class="col-md-2 col-sm-12 col-xs-12 form-group">
	                    <input v-model="query_date" type="text" class="form-control datepicker">
	                </div>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>LOCATION RECEIVED FROM</th>
                          <th>DATE</th>
                          <th>ITEMS</th>
                          <th>VERIFIED BY</th>
                          <th>RECEIVED BY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="receiving_form in receiving_forms | filterBy search in 'location_received_from' 'verified_by' 'received_by' 'items' 'date'">
                          <td>{{ receiving_form.location_received_from | uppercase }}</td>
                          <td>{{ getDate(receiving_form) }}</td>
                          <td><a class="text-warning" style="font-weight: bolder; cursor: pointer" @click="showItems(receiving_form)">{{ getSampleItems(receiving_form) }}</a></td>
                          <td>{{ receiving_form.verified_by }}</td>
                          <td>{{ receiving_form.received_by }}</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
                <modal-received-items
                	:items="currentItems"
                	:current-form="currentForm"
                ></modal-received-items>
              </div>
		`,
		data(){
			return {
				search: '',
				currentItems: [],
				receiving_forms: [], receiving_items: [],
				query_date: '',
				currentForm: {
					received_by: '',
					verified_by: '',
					location_received_from: ''
				}
			}
		},
		created(){
			this.fetchAll();
			this.initjQueryUI();
		},
		components: {
			'modal-received-items': CompModalReceivedItems
		},
		methods: {
			showItems(form){
				let self = this;
				$('#modal-receive-items').modal('show');
				let rs = self.getItems(form);
				self.currentItems = rs;
				self.currentForm = form;
			},
			redisplayAll(){
				let self = this;
				self.query_date = '';
				self.fetchAll();
			},
			initjQueryUI(){
				require(['jqueryui'], function(){
					$('.datepicker').datepicker();
				});
			},
			getDate(form){
				let self = this;
				let formated = moment(form.created_at).format('MMMM DD, YYYY, ddd');
				form.date = formated;
				return formated;
			},
			getItems(form){
				let self = this;
				return _.where(self.receiving_items, {receiving_form_id: form.id});
			},
			getSampleItems(form){
				let self = this;
				let rs = self.getItems(form);
				let sampleItems =  _.pluck(rs, 'title').join(', ');
				form.items = sampleItems;
				return sampleItems;
			},
			fetchAll(){
				let self = this;
				self.$http.get('/receiving_management').then((resp) => {
					if (resp.status === 200) {
						let json = JSON.parse(resp.body);
						$.each(json, function(key, value){
							self[key] = value;
						});
					}
				});
			}
		},	
		computed: {

		},
		watch: {
			'query_date': function(newVal, oldVal){
				let self = this;
				let formated = moment(newVal).format('YYYY-MM-DD');
				self.$http.post('/receiving_form/query_by_date', {
					date: formated
				}).then((resp) => {
					if (resp.status === 200) {
						let json = JSON.parse(resp.body);
						self.receiving_forms = json.receiving_forms;
						self.receiving_items = json.receiving_items;
					}
				});
			}
		}
	});
	return Component;
});