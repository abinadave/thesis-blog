define(['vue','vue-resource'], function(Vue, VueResource){
	let Component = Vue.extend({
		template: `
			<div class="col-md-3 col-sm-3 col-xs-3">
	          <div class="x_panel">
	            <div class="x_title"> file length: {{ files.length }}</div>
	            <div class="x_content">
	            	<ul>
	            		<li v-for="file in files">
	            			 <img style="width: 100%; display: block;" :src="'uploads/temporary-blog-images/' + file.filename" alt="image" />
	            		</li>
	            	</ul>
	            </div>
	        </div>
	       </div> 
		`,
		props: {
			files: {
				type: Array
			}
		},
		created(){

		},
		methods: {
			getFile(file){

			},
		},
		watch: {

		}
	});
	return Component;
});