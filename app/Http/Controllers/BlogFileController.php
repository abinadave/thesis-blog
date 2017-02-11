<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\BlogFile as BlogFile;

class BlogFileController extends Controller
{
    public function insert($filename, $blog){
    	$blogFile = new BlogFile;
    	$blogFile->title_slug = $blog->title_slug;
    	$blogFile->blog_id = $blog->id;
    	$blogFile->filename = $filename;
    	$blogFile->save();
    	return $blogFile;
    }
}
