<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Tags;
use Inertia\Inertia;
use App\Models\Lists;
use App\Models\Tasks;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $list = Lists::all();
        $tag = Tags::all();
        $tasks = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        // $tasks = Tasks::find(2);
        // dd($tasks);
        foreach ($tasks as $val ) {
 
            $tasks->tag_id = $val->tag;        
            $tasks->list_id = $val->list;   
        }
     
        return Inertia::render('Tasks/Today',[
            'list'=>$list,
            'tasks'=>$tasks,
            'tag'=>$tag
    ]);
    }
}
