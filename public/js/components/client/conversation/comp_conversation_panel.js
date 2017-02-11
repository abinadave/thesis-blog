define(['vue','vue-resource','underscore','moment',
	'text!templates/client/conversation/temp_conversation_panel.html',
    'components/admin/message/comp_current_messages',
    'components/admin/message/comp_new_chat'], 
	function(Vue, VueResource, _, moment, template, CompCurrentMessages, CompNewChat) {

    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: template,

        props: {
            sideBarContacts: {
                type: Array
            },
            user: {
                type: Object
            }
        },
        data(){
            return {
                conversations: [], clients: [], displayMsgs: [],
                current_chatmate: 0,
                current_contact: {}
            }
        },
    	created(){
    		this.getInitialPersons();
            this.getAllClients();
    	},
    	ready(){

        },
        components: {
            'current-messages': CompCurrentMessages,
            'new-chat': CompNewChat
        },
        computed: {
            getSideBarMessages(){
                var self = this;
                var myMsgs = _.filter(self.conversations, {receiver: self.user.id});
                var rs = _.unique(myMsgs, 'sender');
                var found = self.getUserWithIds(_.pluck(rs,'sender'));
                this.sideBarContacts = _.sortBy(found, 'name');
            }
        },
        watch: {
            'conversations': function(newVal){
                if (Number(this.current_chatmate) > 0) {
                    this.renderMessages(this.current_contact);
                }
            }
        },
    	methods: {
            renderMessages(contact){
                var sender = contact.id;
                var receiver = this.user.id;
                this.current_chatmate = contact.id;
                this.current_contact = contact;
                var rsMsgs = this.getMsgsWithSenderReceiverOf({
                    sender: sender,
                    receiver: receiver
                });
                this.displayMsgs = rsMsgs;
            },
            /* find conversations of two users, Admin and Client*/
            getMsgsWithSenderReceiverOf(param){
                return this.conversations.filter(function(index) {
                    return Number(index.sender) === Number(param.sender) &&
                           Number(index.receiver) === Number(param.receiver) ||
                           Number(index.sender) === Number(param.receiver) &&
                           Number(index.receiver) === Number(param.sender);
                }); 
            },
            getMessagesOfId(contact){
                var rsConversations = _.where(this.conversations, {sender: contact.id});
                var latestId = _.max(_.pluck(rsConversations, 'id'));
                return _.where(rsConversations, {id: latestId});
            },
            getLatestMessage(contact){
                var rsMsg = this.getMessagesOfId(contact);
                if (rsMsg.length) {
                    return rsMsg[0].msg;
                }else {
                    return 'connection error.';
                }
            },
            getLatestMessageTime(contact){
                var rsMsg = this.getMessagesOfId(contact);
                if (rsMsg.length) {
                    var date = rsMsg[0].date;
                    return this.getChatTime(date);
                }else {
                    return 'connection error.';
                }
            },
            getChatTime(date){
                return moment(date).format('hh:mm a  ');
            },
            /* Filter all clients with userids */
            getUserWithIds(ids){
                return this.clients.filter(function(index) {
                    return $.inArray(index.id, ids) >= 0;
                });
            },
			/* get clients with messages to me */
			getInitialPersons(){
                var self = this;   
                self.$http.get('/conversation').then((resp) => {
                    if (resp.status === 200) {
                        self.conversations = JSON.parse(resp.body);
                        if (!self.conversations.length) {
                            require(['toastr'], function(toastr){
                                toastr.info('There was no message/s found in your inbox.');
                            });
                        }
                    }
                }, (resp) => {
                    console.log(resp);
                }) ;
            },
            /* fetch all clients inside application */
            getAllClients(){
                var self = this;
                self.$http.get('/user').then((resp) => {
                    if (resp.status === 200) {
                        self.clients = JSON.parse(resp.body);
                    }
                }, (resp) => {
                    console.log(resp);
                });
            }
    	}
    });
   
    return Component; 
});