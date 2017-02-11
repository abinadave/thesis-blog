define(['vue',
	'underscore',
	'vue-resource',
    'moment',
	'text!templates/admin/reservation/temp_table_reservations.html',
	'components/admin/reservation/comp_modal_reservation_items_admin'], 
	function(Vue, _, VueResource, moment, template, CompModalReservationItems) {
    
    Vue.use(VueResource);

    var Component = Vue.extend({
    	template: template,

        props: {
            todaysReservation: {
                type: Array
            },
            products:{
                type: Array
            }
        },
        
    	data: function(){
    		return {
    			filteredItems: [],
    			reservations: [],
    			carts: [],
    			search: '',
                todaysReservationLength: false,
                date_now: moment().format('MMMM DD, YYYY')
    		}
    	},

    	components: {
    		'reservation-items': CompModalReservationItems
    	},

    	created(){
    		this.fetch();
    	},

        computed: {

            filterTodayReservation(){
                var self = this;
                var date = '';
                self.todaysReservation = self.reservations.filter(function(model) {
                    date = moment(model.created_at).format('MMMM DD, YYYY');
                    return date === self.date_now;
                });
            },
        },

    	methods: {
            getFullname(model){
                let self = this;
                let rs = _.filter(self.users, {email: model.email});
                if (rs.length) {
                    return rs[0].name;
                }
            },
            filterTodayItems(){
                var self = this;
                var date = '';
                var length = self.reservations.filter(function(model) {
                    date = moment(model.date).format('MMMM DD, YYYY');
                    return date = self.date_now;
                    // return something;
                }).length;
                self.todaysReservationLength = (length > 0) ? false : true;
            },

    		showCarts(reservation){
    			var rs = _.where(this.carts, {reservation_id: reservation.id});
    			this.filteredItems = rs;
    			$('#modal-reservation-items').modal('show');
    		},

    		getTotalItems(reservation){
                let self = this;
                let rs = _.filter(self.carts, { reservation_id: reservation.id});
                console.log(self.carts.length)
    		},

    		fetch(){
    			var self = this;
    			self.$http.get('/management_reservation').then((resp) => {
    				if (resp.status === 200) {
    					var json = JSON.parse(resp.body);
    					self.carts = json.carts;
                        self.users =  json.users;
    					self.reservations = json.reservations;

    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		}
    	}
    });
   
    return Component; 
});