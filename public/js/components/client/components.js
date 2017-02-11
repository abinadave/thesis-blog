define(['vue',
	'components/client/comp_navigation_categories',
	'components/client/reservation/comp_modal_all_reservation_client',
	'components/client/message/comp_modal_message_box'], 
	function(
	Vue,
	CompNavigationCat, 
	CompModalAllReservation,
	CompModalMsgBox
	){
   
    var Component = Vue.extend({
    	created(){
    		/* all components here in the client.blade.php temlate */

    	},
        methods: {
            showMessages(){
                $('#modal-msg-box').modal('show');
            }
        },
    	components: {
    		'category-list': CompNavigationCat,
    		'comp-modal-tbl-reservation': CompModalAllReservation,
    		'msg-box': CompModalMsgBox
    	}
    });
   
    return Component; 
});