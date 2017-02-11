define(['vue','vue-resource','underscore','moment'], 
	function(Vue, VueResource, _, moment){

	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

	let Component = Vue.extend({
		props: {
			user: {
				type: Object
			},
			items: {
				type: Array
			},
			currentForm: {
				type: Object
			}
		},
		template: `
			<div class="modal fade" id="modal-receive-items" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			    <div class="modal-dialog" style="width: 60%">
			        <div class="modal-content">
			            <div class="modal-header">
			                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			            	Receive item from {{ currentForm.location_received_from | uppercase }}
			            </div>
			            <div class="modal-body">

			                <table class="table table-hover table-condensed table-bordered">
			                	<thead>
			                	    <tr>
			                	    	<th>QTY</th>
			                	    	<th>UNIT</th>
			                	    	<th>PRODUCT TITLE</th>
			                	    </tr>
			                	</thead>
			                	<tbody>
			                		<tr v-for="item in items">
			                			<td style="font-weight: bolder" class="text-info">
			                				{{ item.qty }}
			                			</td>
			                			<td>{{ item.unit | uppercase }}</td>
			                			<td>{{ item.title | uppercase }}</td>
			                		</tr>
			                	</tbody>
			                </table>
			                <!-- <hr> -->
			                <div class="col-md-5 col-sm-5 col-xs-12 form-group has-feedback">
		                        <label>Date Received</label>
		                        <input value="{{ getFormatedDate }}" type="text" class="form-control has-feedback-left" id="inputSuccess2">
		                        <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
		                     </div>
			                <div class="col-md-5 col-sm-5 col-xs-12 form-group has-feedback">
		                        <label>From Location</label>
		                        <input value="{{currentForm.location_received_from}}" type="text" class="form-control has-feedback-left" id="inputSuccess2">
		                        <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
		                     </div>
			                <div class="col-md-5 col-sm-5 col-xs-12 form-group has-feedback">
			                	<label>Received by</label>
		                        <input v-model="currentForm.received_by" type="text" class="form-control has-feedback-left" id="inputSuccess2">
		                        <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
		                     </div>
			                <div class="col-md-5 col-sm-5 col-xs-12 form-group has-feedback">
		                        <label>Verified by</label>
		                        <input value="{{currentForm.verified_by}}" type="text" class="form-control has-feedback-left" id="inputSuccess2">
		                        <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
		                     </div><br><br><br><br><br><br><br><br><br>
			            </div>
			            <div class="modal-footer">
			                <button class="btn btn-default" data-dismiss="modal">Close</button>
			            </div>
			        </div>
			    </div>
			</div>
		`,
		data(){	
			return {
				receiving_forms: [], receiving_items: [],
				query_date: ''
			}
		},
		created(){
			
		},
		methods: {
			
		},	
		computed: {
			getFormatedDate(){
				let self = this;
				return moment(self.currentForm.created_at).format('MMMM DD, YYYY, dddd');
			}
		},
		watch: {
			
		}
	});
	return Component;
});