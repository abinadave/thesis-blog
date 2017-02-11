define(['vue','vue-resource',
	'moment'], 
	function(Vue, VueResource, moment) {
   
    var Component = Vue.extend({
      props: {
          user: {
              type: Object
          }
      },
    	template: `
          <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="x_panel">
                <div class="x_title">
                  <h2>Client Feedbacks <small>table</small></h2>
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
                 
                  <table id="datatable" class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Client name</th>
                        <th>Message</th>
                        <th>Email address</th>
                        <th class="text-center">Phone Number</th>
                        <th class="text-center">Date</th>
                        <th width="1"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="msg in messages">
                        <td>{{ msg.name | uppercase }}</td>
                        <td>{{ msg.message.substr(0,30) }}....</td>
                        <td>{{ msg.email }}</td>
                        <td class="text-center">{{ msg.phone }}</td>
                        <td class="text-center">{{ getTrueDate(msg.date) }} <label class="label label-info">{{ parseDate(msg.date) }})</label></td>
                        <td><a style="cursor:pointer" @click="removeMsg(msg)"><i class="fa fa-remove"></i></a></td>
                      </tr>
                    </tbody>
                    <tr v-show="noDataWasFound">
                       <td colspan="6">No data was found in this table.</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
      `,

    	data: function(){
    		return {
    			 messages: [],
           noDataWasFound: false
    		}
    	},

    	created(){
    		  this.fetch();
    	},

    	methods: {
          removeMsg(msg){
              let self = this;
              let ok = confirm('Are you sure ?');
              if (ok) {
                  let resource = self.$resource('message{/id}');
                  resource.delete({
                      id: msg.id
                  }).then((resp) => {
                      if (resp.status === 200) {
                          let json = JSON.parse(resp.body);
                          if (json.deleted > 0) {
                              self.messages.$remove(msg);
                          }
                      }
                  }, (errorResp) => {
                      console.log(errorResp);
                  });
              }
          },

      		fetch(){
        			var self = this;
    	    		self.$http.get('/manage_messages').then((resp) => {
      	    			if (resp.status === 200) {
        	    				var json = JSON.parse(resp.body);
        	    				$.each(json, (index, collection) => {
        	    					self[index] = collection;
        	    				});
                      if (!self.messages.length) {
                          self.noDataWasFound = true;
                      }
      	    			}
    	    		}, (resp) => {
    	    			console.log(resp);
    	    		});
      		},

      		getTrueDate(date){
      			 return moment(date).format('MMMM DD, YYYY hh:mm a');
      		},

      		parseDate(date){
      			 return moment(date).fromNow();
      		}

    	 }  
       
    });
   
    return Component; 
});