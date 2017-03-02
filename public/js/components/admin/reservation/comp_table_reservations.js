define(['vue',
	'underscore',
	'vue-resource',
    'moment',
	'text!templates/admin/reservation/temp_table_reservations.html',
	'components/admin/reservation/comp_modal_reservation_items_admin',
    'toastr'], 
	function(Vue, _, VueResource, moment, template, CompModalReservationItems, toastr) {
    
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
            getDuration(item){
                let self = this;
                var a = moment(item.expiration);
                var b = moment().format('MMMM DD, YYYY');
                self.verifyIfExpired(item);
                return a.diff(b, 'days') + ' days left';
            },
            verifyIfExpired(item){
                let self = this;
                let dateNow = moment().format('MMMM DD, YYYY hh:mm:ss');
                let isBefore = moment(item.true_date).isBefore(item.expiration); // true
                if (!isBefore) {
                    toastr.warning('Reservation is expired');
                    self.deleteReservation(item);
                }else {
                    console.log('dere pa expired')
                }
            },
            deleteReservation(item){
                let self = this;
                /* reservation will be deleted now [expired na]*/
                let resource = self.$resource('reservation/{id}');
                resource.delete({id: item.id}).then(resp => {
                if (resp.status === 200) {
                    let json = resp.body;
                    if (json.deleted) {
                        self.reservations.$remove(item);

                    }
                };
                }, resp => {
                    console.log(resp);
                });
            },
            getExpiration(reservation){
                let self = this;
                console.log(reservation.true_date);
            },
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