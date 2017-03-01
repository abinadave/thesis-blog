define(['vue','vue-resource',
	'text!templates/product/temp_product_management.html'],
	function(Vue, VueResource, template) {
  	
  	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template: template,
    	data: function(){
    		return {
                selectedSizes: [],
                sub_categories: [],
                categories: [], products: [], sizes: [], colors: [],
                selected_cat: 0,
                error: {
                    title: '',
                    description: '',
                    prize: '',
                    color: '',
                    size: '',
                    category: '',
                    sub_category: ''
                },
    			form: {
    				title: '',
    				color: '',  
    				size: '',
    				category: '',
                    sub_category: '',
    				prize: '',
    				description: '',
                    filename: 'default-image.png'
    			}
    		}
    	},

    	created(){
    		var self = this;
            self.fetch();
    	},

        ready(){
            this.initSearchableCats();
            this.initTagsInput();
        },
        
        computed: {
            filteredSubCategories(){
                let self = this;
                let category = self.form.category;
                if (category == '') {
                    return self.sub_categories;
                }else {
                    return self.sub_categories.filter(function(index) {
                        return Number(index.category) === Number(category);
                    });
                }
            }
        },

    	methods: {
            initTagsInput(){
                require(['tags-input-jquery'], function(){
                    $('#tags-sizes, #tags-colors').tagsInput({
                        width: 'auto'
                    });
                });
            },

            initSearchableCats(){
                var $select = $('.select2_single');
                var vm = this;
                require(['select2'], function(){
                   $select.select2({
                        placeholder: "Select a category",
                        allowClear: true
                    });
                   $select.change(function(event) {
                       var val = $(this).val();
                       vm.form.category = val;
                   });
                });
            },

            fetch(){
                var self = this;
                self.$http.get('/fetch_product_management').then((resp) => {
                    if (resp.status === 200) {
                        var json = JSON.parse(resp.body);
                        $.each(json, function(index, val) {
                            self[index] = val;
                        });
                    }
                }, (resp) => {
                    console.log('Error in fetching');
                    console.log(resp);               
                });
            },

    		saveProduct(event){
    			event.preventDefault();
    			var self = this;
                self.arrangeColos(); self.clearErrors();
                var errors = self.validateColorsAndSizes();
                self.form.size = self.selectedSizes;
                if (errors.length === 0) {
                    console.log(self.form.color);
        			self.$http.post('/product', self.form).then( (resp) => {
                        self.afterSave(resp);
        			}, (resp) => {
        				if (resp.status === 422) {
                            var json = JSON.parse(resp.body);
                            self.displayerrors(json);
                        }
        			});
                }else {
                    require(['toastr'], function(toastr){
                        errors.forEach(function(i) {
                            toastr.error(i); 
                        });
                    });
                }
    		},

            validateColorsAndSizes(){
                var self = this;
                var errors = [];
                let colors = $('#colors-div').find('span.tag').length;
                console.log('selected colors: ' + colors);
                if (!colors) {
                    errors.push('Please enter a color for this item');
                }
                return errors;   
            },

            clearErrors(){
                var self = this;
                self.error.title = '';
                self.error.prize = '';
                self.error.category = '';
                self.error.description = '';
            },

            displayerrors(json){
                var self = this;
                var props = ['title','price','description','category'];
                $.each(json, function(index, val) {
                    self.error[index] = val;
                });
            },

            afterSave(resp){
                var self = this;
                if (resp.status === 200) {
                    var json = JSON.parse(resp.body);
                    self.$parent.products.push(json.product);
                    json.saved_colors.b.forEach(function(model) { self.$parent.colors.push(model); });
                    json.saved_sizes.b.forEach(function(model) { self.$parent.sizes.push(model); });
                    self.clearForm();
                }
            },

            clearForm(){
                var self = this; self.form.title = '';
                 self.form.prize = ''; self.form.color = ''; self.form.size = ''; self.form.description = '';
                $('.tag').remove();
                require(['toastr'], function(toastr){
                    toastr.success('Product successfully saved.');
                });
            },

            arrangeColos(){
                var self = this;
                let text = '', colors = '';
                $('#colors-div').find('span.tag').each(function(){
                    text = $(this).text().replace('x','').trim();
                    text += ',';
                    colors += text;
                });
                if (colors) {
                    self.form.color = colors.split(',');
                }else {
                    self.form.color = [];
                }
                self.form.color.pop();
            }


    	}
    });
   
    return Component; 
});