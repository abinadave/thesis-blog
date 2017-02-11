define(['vue','vue-resource',
	'text!templates/admin/message/temp_new_chat.html',
    'moment'], 
	function(Vue, VueResource, template, moment) {
    
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: template,
        props: {
            chatMate: {
                type: Number
            },
            msg: {
                type: String
            },
            conversations: {
                type: Array
            }
        },
        data(){
            return {
                sending: false
            }
        },
    	created(){

    	},
    	ready(){

    	},
    	methods: {
    		sendChat(){
    			var self = this;
                self.sending = true;
                var obj = {
                    chat_mate_id: self.chatMate,
                    msg: self.msg,
                    date: moment().format('MMMM DD, YYYY HH:mm:ss')
                };
    			self.$http.post('/admin/conversation', obj).then((resp) => {
                    self.sending = false;   
                    if (resp.status === 200) {
                        var json = JSON.parse(resp.body);
                        self.conversations.push(json);
                        this.msg = '';
                    }
                }, (resp) => {
                    self.sending = false;
                    console.log(resp);
                });
    		}
    	}
    })
   
    return Component; 
});