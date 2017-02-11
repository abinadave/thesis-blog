define(['vue',
	'vue-resource',
	'underscore',
	'text!templates/admin/product/temp_modal_show_product.html'],
	 function(Vue, VueResource, _, template) {
   
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
    			confirmDeletion: false,
    			form: {
    				title: '',
    				color: '',  
    				size: '',
    				category: '',
    				price: '',
    				description: '',
    				filename: ''
    			}
    		}
    	},

        props: {
            item: {
                type: Object
            },
            
            categories: {
                type: Array
            },

            products: {
                type: Array
            },

            product_id: {
                type: Number
            },

            colors: {
                type: Array
            },

            sizes: {
                type: Array
            }

        },

    	created(){
    		var self = this;
            self.initTagsInput();
    		require(['file-uploader'], function(uploader){
    		    self.createUploader();
    		});
    	},    	

        ready(){
            var self = this;
            $('#modal-update-product').on('hidden.bs.modal', function(){
                $('.tag').remove();
            });
        },

        computed: {
            getColors(){
                var self = this;
                var colors = _.pluck(self.colors, 'color');
                require(['tags-input-jquery'], function(){
                   colors.forEach(function(i) {
                       $('#tags-colors').addTag(i);
                   });
                });
                
            },
            getSizes(){
                var self = this;
                var sizes = _.pluck(self.sizes, 'size');
                require(['tags-input-jquery'], function(){
                   sizes.forEach(function(i) {
                       $('#tags-sizes').addTag(i);
                   });
                });
            }
        },

    	methods: {
            initTagsInput(){
                require(['tags-input-jquery'], function(){
                    $('#tags-sizes, #tags-colors').tagsInput({
                        // width: 'auto'
                    });
                });
            },

    		deleteItem(){
    			var self = this;
    			self.confirmDeletion = true;
    		},

    		removeItemYes(){
    			var self = this;
    			var pid = self.product_id;
    			self.confirmDeletion = false;
    			console.log('deleting..');
    			var resource = self.$resource('product/{id}');
    			resource.delete({id: pid}).then((resp) => {
    				if (resp.status === 200) {
    					var json = JSON.parse(resp.body);
    					if (json.deleted) {
    						var rs = self.findProduct(self.form.id);
    						if (rs.length) {
    							self.$parent.products.$remove(rs[0]);
    							$('#modal-product').modal('hide');
    						}
    					}
    				}
    			}, (resp) => {
    				console.log(resp);
    			});
    		},

    		showImage(){
    			var self = this;
    			var rs = self.findProduct(self.form.id);
    			setTimeout(function() {
    				$('#modal-view-product-image').modal('show');
    				var child = self.$parent.$children[1];
    				if (rs.length) {
    					child.item = rs[0];
    				}
    			}, 800);
    		},

    		createUploader(){         
    			var self = this; 
	            var uploader = new qq.FileUploader({
	                element: document.getElementById('file-uploader-demo1'),
	                action: 'upload-product-photo.php',
	                debug: true,
	                extraDropzones: [qq.getByClass(document, 'qq-upload-extra-drop-area')[0]],
	            	onComplete: function(id, fileName, responseJSON){
	            		self.createUploader();
	            		self.assignFile(fileName);
	            	}
	            });           
	        },

	        assignFile(fileName){
	        	var self = this;
	        	var pid = self.item.id;
	        	var rsProduct = self.findProduct(pid);
	        	if (rsProduct.length) {
	        		var model = rsProduct[0];
	        		self.$http.put('/product/filename', {
	        			filename: fileName,
	        			pid: pid
	        		}).then( (resp) => {
	        			model.filename = fileName;
	        		}, (resp) => {
	        			console.log(resp);
	        		});
	        	}
	        },

	        findProduct(pid){
	        	var self = this;
	        	return self.products.filter(function(model) {
	        		return Number(pid) === Number(model.id);
	        	});
	        },

	        updateItem(){
	        	var self = this;
	        	var rs = self.findProduct(self.item.id);
	        	if (rs.length) {
	        		var product = rs[0];
	        		product.title = self.item.title;
	        		product.category = self.item.category;
	        		product.prize = self.item.prize;
	        		product.description = self.item.description;
	        		self.$http.put('/product', self.item).then((resp) => {
	        			if (resp.status === 200) {
	        				var json = JSON.parse(resp.body);
	        				if (json.updated) {
	        					$('#modal-update-product').modal('hide');
                                require(['toastr'], function(toastr){
                                    toastr.success('Item successfully updated.');
                                });
	        				}
	        			}
	        		}, (resp) => {
	        			console.log(resp);
	        		});
	        	}
	        }
    	}
    });
   
    return Component; 
});