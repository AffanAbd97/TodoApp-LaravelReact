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
        // $tasks = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $tasks = Tasks::all();
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
    public function upcoming()
    {
        $list = Lists::all();
        $tag = Tags::all();
        $today = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $tomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get();
        // $week = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $tasks = Tasks::all();
        // dd($tasks);
        // foreach ($week as $val ) {
 
        //     $week->tag_id = $val->tag;        
        //     $week->list_id = $val->list;   
        // }
     
        foreach ($tomorrow as $val ) {
 
            $tomorrow->tag_id = $val->tag;        
            $tomorrow->list_id = $val->list;   
        }
     
        foreach ($today as $val ) {
 
            $today->tag_id = $val->tag;        
            $today->list_id = $val->list;   
        }
     
        return Inertia::render('Tasks/Upcoming',[
            'list'=>$list,
            'today'=>$today,
            'tomorrow'=>$tomorrow,
            // 'week'=>$week,
            'tag'=>$tag
    ]);
    }
}
