define([
    'vue',
    'underscore',
    'vue-resource',
	'text!templates/category/temp_category_management.html'], 
    function(Vue, _, VueResource, template) {
   
   	Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
   
    var Component = Vue.extend({
    	template: template,

        props: {
            cat_name: {
                type: String
            },
            categories: {
                type: Array
            },
            products: {
                type: Array
            }
        },

    	created(){

        },

    	methods: {
            prepareForRemoval(cat){
                var self = this;
                require(['alertify'], function(alertify){
                    alertify.defaults.glossary.title = 'Confirmation';
                    alertify.confirm('Would you like to remove: <b>'+cat.name.toUpperCase()  +'</b> , from the Categry list ?', function(e){
                        if (e) {
                            var rsItems = _.where(self.products, {category: cat.id});
                            if(!rsItems.length){
                                self.removeCategory(cat);
                            }else {
                                alertify.warning('Cant remove this category with existing '+ rsItems.length+' products remaining');
                            }
                        }
                    });
                });
            },

            removeCategory(cat){
                var self = this;
                var resource = self.$resource('category/{id}');
                resource.delete({id: cat.id}).then( (resp) => {
                    if (resp.status === 200) {
                        var json = JSON.parse(resp.body);
                        if (json.deleted) {
                            self.categories.$remove(cat);
                            require(['alertify'], function(alertify){
                                alertify.success('Category successfully deleted');
                            });
                        }
                    }
                }, (resp) => {
                    console.log(resp);
                });
            },

            navigateToCategory(cid){
                var self = this;
                self.getProductsWithCat(cid);
            },

            getProductsWithCat(cid){
                var self = this;
                var parentProducts = self.$parent.$parent.products;
                var tableProducts = self.$parent.products;
                self.$parent.products = parentProducts.filter(function(index) {
                    return Number(index.category) === Number(cid);
                });
                /*
                    *** Back end fetching ***
                   
                    var resource = self.$resource('product/cid/{id}');
                    resource.get({id: cid}).then( (resp) => {
                        var json = JSON.parse(resp.body);
                        self.$parent.products = json.products;
                    }, (resp) => {
                        console.log(resp);
                    });
                
                */
            },

            saveCategory(event){
                event.preventDefault();
                var self = this;
                self.$http.post('/category', {cat_name: self.cat_name}).then( (resp) => {
                    var json = JSON.parse(resp.body);
                    self.categories.push({
                        id: json.id,
                        name: self.cat_name
                    });
                    self.afterSave();
                }, (error) => {
                    console.log(error)
                })
            },

            afterSave(){
                var self = this;
                self.cat_name = '';
            }
    	}
    });
   
    return Component; 
});