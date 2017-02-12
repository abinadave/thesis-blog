define(['underscore','vue',
'components/admin/event/category/comp_form_event_category',
'components/admin/event/category/comp_events_category_list'], 
function(_, Vue, CompForm, CompList) {
   
    var Component = Vue.extend({
    	template: `
    		<div>
	    		<ul class="nav nav-tabs">
				  <li class="active"><a data-toggle="tab" href="#home">Create</a></li>
				  <li><a data-toggle="tab" href="#menu1">Category list</a></li>
				</ul>

				<div class="tab-content">
				  <div id="home" class="tab-pane fade in active">
				     <form-create-category></form-create-category>
				  </div>
				  <div id="menu1" class="tab-pane fade">
				     <events-categories></events-categories>
				  </div>
				</div>
    		</div>
    	`,
    	created(){
    		console.log('im created');
    	},
    	components: {
    		'form-create-category': CompForm,
    		'events-categories': CompList
    	}
    });
   
    return Component; 
});