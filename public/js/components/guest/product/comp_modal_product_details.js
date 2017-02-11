define(['vue',
    'underscore',
	'text!templates/guest/product/temp_modal_product_details.html'], 
	function(Vue, _, template) {
   
    var Component = Vue.extend({
    	template: template,
        props: {
            /* colors and sizes is already filtered. */
            colors: {
                type: Array
            },
            sizes: {
                type: Array
            },
            item: {
                type: Object
            }
        },
    	data: function(){
    		return {
    			// item: {
    			// 	filename: 'default-image.png',
       //              color: '',
       //              size: ''
    			// },
                reservations: [],
                isLoading: false,
                selectedSize: ''
    		}
    	},

        methods: {
           

            selectSize(size, event){
                this.item.size = size;
            },

            nextItem(){
                var self = this;
                var current_pid = self.item.id;
                var cid = router._currentRoute.params.id;
                var rsItems = _.where(self.$parent.$parent.products, {category: Number(cid)});
                if (rsItems.length) {
                    var ids = _.pluck(rsItems, 'id');
                    var index = $.inArray(current_pid, ids);
                    if (index >= 0) {
                        var next = index + 1;
                        var pid = (typeof ids[next] !== "undefined") ? ids[next] :  _.first(ids);
                        var rsItem = _.where(rsItems, {id: pid});
                        if (rsItem.length) {
                            var item = _.first(rsItem);
                            self.item = item;
                        }
                    }
                }
            },

            prevItem(){
                var self = this;
                var current_pid = self.item.id;
                var cid = router._currentRoute.params.id;
                var rsItems = _.where(self.$parent.$parent.products, {category: Number(cid)});
                if (rsItems.length) {
                    var ids = _.pluck(rsItems, 'id');
                    var index = $.inArray(current_pid, ids);
                    if (index >= 0) {
                        var next = index - 1;
                        var pid = (typeof ids[next] !== "undefined") ? ids[next] :  _.last(ids);
                        console.log(pid);
                        var rsItem = _.where(rsItems, {id: pid});
                        if (rsItem.length) {
                            var item = _.first(rsItem);
                            self.item = item;
                        }
                    }
                }
            },

            addLoadingIndicator(){
                var self = this;
                clearTimeout(self.timer);
                self.isLoading = true;
                setTimeout(function() {
                    self.isLoading = false;
                    $('#modal-reservation-guests').modal('show');
                }, 1500);
            },

            reserveThisItem(item){
                var self = this;
                self.addLoadingIndicator();
                var model = {
                    id         : item.id,
                    filename   : item.filename,
                    description: item.description,
                    color      : self.item.color,
                    size       : self.item.size,
                    title      : item.title,
                    price      : item.prize,
                    qty        : 1
                };
                self.$emit('addcart', model);
            },

            assignColors(pid){
                var self = this;
                return _.where(self.$parent.$parent.colors, {pid: pid});
            },

            assignSizes(pid){
                return _.where(this.$parent.$parent.sizes, {pid: pid});
            }
        }
    });
   
    return Component; 
});