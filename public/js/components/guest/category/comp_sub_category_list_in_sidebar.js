define([
	'vue',
	'vue-resource'], 
	function(
        Vue,
        VueResource) {
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
        props: {
            categories: {
                type: Array
            },
            subCategories: {
                type: Array
            },
            cid: {
                type: Number
            }
        },
    	template: `
            <div>
                <ul>
                    <li v-for="sub in subCategories">
                        <a style="cursor: pointer; " @click="filterBySubCategory(sub)">{{ sub.name }}</a>
                    </li>
                </ul>
            </div>
        `,
    	data: function(){
    		return {
    			
    		}
    	},
    	components: {
    	
    	},
    	
    	created(){

    	},

        computed: {
            
        },

    	methods: {
           filterBySubCategory(sub){
                let self = this;
                self.$parent.$emit('viewchange', sub);
           }
    	}

    });
   
    return Component; 
});