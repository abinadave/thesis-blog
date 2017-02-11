define(['vue','vue-resource',
	'text!templates/client/message/temp_modal_message_box.html',
	'css!libs/css/modal_messages.css',
	'moment'], 
	function(Vue, VueResource, template, css1, moment) {
    
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
	    template: template,
	    props: {
	    	user: {
	    		type: Object
	    	}
	    },
	    data(){
	    	return {
	    		my_message: '',
	    		button_text: 'Send',
	    		conversations: [],
	    		chatWidth: 50,
	    		myChatMarginLeft: 50
	    	}
	    },
	    
	    ready(){
	    	var self = this;
	    	$('#modal-msg-box').on('shown.bs.modal', function(event){
	    		$(this).find('input:first').focus();
	    		self.fetch();
	    	});
	    	self.subscribe();
	    },
	    
	    created(){
	    	this.fetch();
	    },
	    watch: {
	    	'conversations': function(newVal){
	    		this.scrollChatBox();
	    	}
	    },

	    methods: {
	    	scrollChatBox(){
	    		var height = 0;
				$('#div-msg-box .single-msg').each(function(i, value){
				    height += parseInt($(this).height()) + 10;
				});
				height += '';
				$('#div-msg-box').animate({scrollTop: height});
	    	},
	    	subscribe(){
	    		// pubnub.subscribe({
			    //     channels: ['msg'] 
			    // });
	    	},
	    	getTime(msg){
	    		return moment(msg.date).format('hh:mm a');
	    	},

	    	getChatName(msg){
	    		if (this.user.id === msg.sender) {
	    			return 'me [' + this.user.name + ']';
	    		}else {
	    			return 'Admin';
	    		}
	    	},

	    	getChatMarginLeft(message){
	    		return (this.isMe(message) === true) ? 50 : '';
	    	},
	    	isMe(message){
	    		var self = this;
	    		return (Number(message.sender) === Number(self.user.id)) ? true : false;
	    	},
	    	fetch(){
	    		var self = this;
	    		self.$http.get('conversation').then((resp) => {
	    			if (resp.status === 200) {
	    				var json = JSON.parse(resp.body);
	    				self.conversations = json;
	    			}
	    		}, (resp) => {
	    			console.log('error while fetching some conversations');
	    			console.log(resp);
	    		});
	    	},

	    	sendMsg(){
	    		var self = this;
	    		self.button_text = 'Sending ...';
	    		self.$http.post('conversation', {
	    			msg: self.my_message,
	    			date: moment().format('MMMM DD, YYYY HH:mm:ss')
	    		}).then((resp) => {
	    			if (resp.status === 200) {
	    				var json = JSON.parse(resp.body);
	    				if (json.id > 0) {
	    					self.conversations.push(json);
	    					self.my_message = '';
	    				}
	    				self.button_text = 'Send';
	    			}
	    		}, (resp) => {
	    			self.button_text = 'Send';
	    			console.log(resp);
	    		});
	    	}
	    }
    });
   
    return Component; 
});
