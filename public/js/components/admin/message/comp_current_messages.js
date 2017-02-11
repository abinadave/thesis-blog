define(['vue','underscore','moment',
	'text!templates/admin/message/temp_current_messages.html'], 
	function(Vue, _, moment, template) {
   
    var Component = Vue.extend({
    	template: template,

    	props: {
    		conversations: {
    			type: Array
    		},
    		clients: {
    			type: Array
    		}
    	},
    	
    	watch: {
    		'conversations': function(newVal){
    			this.scrollChatBox();
    		}
    	},

    	methods: {

    		getName(msg){
    			var rs = _.where(this.clients, {id: msg.sender});
    			if (rs.length) {
    				return rs[0].name;
    			}
    		},

    		getChatTime(date){
    			return moment(date).format('hh:mm a');
    		},

    		scrollChatBox(){
	    		var height = 0;
				$('#div-msg-box .single-msg').each(function(i, value){
				    height += parseInt($(this).height()) + 30;
				});
				height += '';
				$('#div-msg-box').animate({scrollTop: height});
	    	}

    	}
    });
   
    return Component; 
});