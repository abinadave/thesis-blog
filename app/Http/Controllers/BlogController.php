<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Blog as Blog;
use Storage;
use App\Http\Controllers\BlogFileController as BlogFileController;

class BlogController extends Controller
{
    public function fetchRecentArticles(){
        return response()->json([
            'articles' => \App\Blog::orderBy('id','desc')->take(5)->get()
        ]);
    }

    public function destroy($id){
        $blog = Blog::findOrFail($id);
        $title = $blog->title_slug;
        $rs = $blog->delete();
        if ($rs) {
            $dirDeleted = Storage::deleteDirectory('posts/'.$title);
            return response()->json([
                'deleted' => $rs,
                'dir_deleted' => $dirDeleted
            ]);
        }
    }

    public function insert(Request $request){
    	$title= $request->input('title');
    	$body= $request->input('body');
    	$this->validate($request, [
    		'title' => 'required|unique:blogs|min:8|max:255',
    		'body'  => 'required',
    		'true_date' => 'required'
    	]);
    	$blog = new Blog;
    	$blog->title = $request->input('title');
    	$blog->title_slug = str_slug($request->input('title'));
    	$blog->body = $request->input('body');
    	$blog->true_date = $request->input('true_date');
    	$rs = $blog->save();
        if ($rs) {
            $temporaryFiles = $this->saveMoveFiles($blog);
            return response()->json([
                'blog' => $blog,
                'temporaryFiles' => $temporaryFiles
            ]);
        }
    }

    private function saveMoveFiles($blog){
        if (!is_dir('uploads/posts')) { Storage::makeDirectory('posts'); }
        $files = Storage::files('temporary-blog-images');
        $directory = 'posts/'.$blog->title_slug;
        Storage::makeDirectory($directory);
        foreach ($files as $key => $file) {
            $filename = explode("/", $file)[1];
            Storage::move($file, $directory . '/' .$filename);
            $this->saveFile($filename, $blog);
        }
        return Storage::files('temporary-blog-images');
    }

    private function saveFile($filename, $blog){
        $blogFileController = new BlogFileController;
        $file = $blogFileController->insert($filename, $blog);
    }

}
