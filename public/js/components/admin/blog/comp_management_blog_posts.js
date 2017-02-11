define(['vue','vue-resource', 
  'components/admin/blog/comp_list_of_temporary_pics',
  'underscore','moment'], 
	function(Vue, VueResource, CompTemporaryFiles, _, moment) {
    
    Vue.use(VueResource);
    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

    var Component = Vue.extend({
    	template:
      `
        <div class="col-md-9 col-sm-9 col-xs-12">
          <div class="x_panel">
            <div class="x_title">
              <h2>Create Blog <small>Post</small></h2>
              <ul class="nav navbar-right panel_toolbox">
                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Settings 1</a>
                    </li>
                    <li><a href="#">Settings 2</a>
                    </li>
                  </ul>
                </li>
                <li><a class="close-link"><i class="fa fa-close"></i></a>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <br />
              <div id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">

                <div style="font-size: 11px">
                  <label>Title <br></label>
                  <input v-model="post.title" style="width: 500px" type="text" class="form-control input-sm" placeholder="sample-title-for-blog-posts">&nbsp;&nbsp;&nbsp;
                  <div id="file-uploader-demo1">    
                    <noscript>      
                      <p>Please enable JavaScript to use file uploader.</p>
                    </noscript>         
                  </div>
                  <br>
                 
                  <textarea v-model="post.body" class="form-control ckeditor" cols="30" id="editor1" name="editor1" rows="5"></textarea>
                  <button :disabled="posting" @click="savePost()" type="button" class="btn btn-primary btn-lg" style="margin-top: 10px">POST <i class="fa fa-send"></i></button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <files-temporary
          :files="temporaryFiles"
        ></files-temporary>
      `,
    	
      props: {
            user: {
              type: Object
            },
        		products: {
        			type: Array
        		},
            cat_name:{
                type: String
            },
            tag_name: {
                type: String
            }
    	 },
        
       data: function(){
            return {
                posting: false,
                post: {
                    title: '',
                    body: '',
                    true_date: ''
                },
                temporaryFiles: [],
                blog_categories: [],
                posts: [],
                blog_tags: []
            }
        },
       

        created(){
            let self = this;
            self.fetch();
            self.initTagsInput();
            self.getAllFilesInsideDir();
            require(['ckeditor'], function(ckeditor){
                CKEDITOR.replace( 'editor1' );
                CKEDITOR.on('instanceLoaded', function(e) {e.editor.resize(670, 300)} );
            });
            require(['file-uploader'], function(uploader){
                self.createUploader();
            });
        },
        components: {
          'files-temporary': CompTemporaryFiles
        },
        methods: {
          getAllFilesInsideDir(){
            let self = this;
            self.$http.get('/temporary/list_of_files').then((resp) => {
                if (resp.status === 200) {
                    let json = JSON.parse(resp.body);
                    let fullname = '';
                    for (var i = json.files.length - 1; i >= 0; i--) {
                        fullname = json.files[i];
                        self.temporaryFiles.push({filename: fullname.split('/')[2]});
                    }
                }
            }, (resp) => {
                console.log(resp);
            });
          },
          removeTemporaryFiles(){
              let self = this;
              self.$http.post('/removefiles/temporary').then((resp) => {
                  let json = JSON.parse(resp.body);
                  console.log(json);
              }, (resp) => {
                  console.log('error in deleting files in temporary images, Error type: ' +resp);
              });
          },
          createUploader(){         
              var self = this; 
              var uploader = new qq.FileUploader({
                  element: document.getElementById('file-uploader-demo1'),
                  action: 'upload_temporary_files_for_blog.php',
                  onComplete: function(id, fileName, responseJSON){
                      self.createUploader();
                      self.temporaryFiles.push({filename: fileName});
                  }
              });           
          },

          savePost(){
              let self = this;
              /* get CKEDITOR body */
              self.post.body = CKEDITOR.instances.editor1.getData();
              self.post.true_date = moment().format('MMMM DD, YYYY HH:mm:ss');
              self.posting = true;
              self.$http.post('/blog', self.post).then((resp) => {
                  let json = JSON.parse(resp.body);
                  if (json.blog.id) {
                      self.clearMess(json);
                      require(['toastr'], function(toastr){
                          toastr.success('Blog has been posted');
                      });
                  }
              }, (resp) => {
                  self.posting = false;
                  console.log(resp);
              });
          },
          clearMess(json){
              let self = this;
              self.posting = false;
              self.post.title = '';
              self.post.body = '';
              self.temporaryFiles = json.temporaryFiles;
              CKEDITOR.instances.editor1.setData('');
          },
          initTagsInput(){
              require(['tags-input-jquery'], function(){
                  $('.blog-categories, .blog-tags').tagsInput({
                      width: '500px',
                      height: '50px'
                  });
              });
          },

          showErrorsTostr(resp){
            if (resp.status == 422) {
               var json = JSON.parse(resp.body);
               require(['toastr'], function(toastr){
                   $.each(json, function(index, val) {
                        toastr.warning(val);
                   });
               });
            }
          },

          fetch(){
              var self = this;
              self.$http.get('/blogManagement').then( (resp) => {
                  if (resp.status === 200) {
                      var json = JSON.parse(resp.body);
                      $.each(json, function(prop, collection) {
                          self[prop] = collection;
                      });
                  }
              }, (resp) => {
                  console.log(resp);
              });
          }
        },

        watch: {
            'post.category': function(newVal, oldVal){
                var rs = _.where(this.blog_categories, { name: newVal});
                if (rs.length) {
                   var first = _.first(rs);
                   this.post.category_id = first.id;
                   console.log(first.id)
                }
            }
        },


    });
   
    return Component; 
});