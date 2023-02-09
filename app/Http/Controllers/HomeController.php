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
       
        // $tasks = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $tasks = Tasks::where('status','running')->get();
        $finish = Tasks::where('status','finished')->get();
        $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
        $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
        $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])
            ->get()->count();
        $count = Tasks::where('status','running')->get()->count();
        // dd($tasks);
        foreach ($tasks as $val ) {
 
            $tasks->tag_id = $val->tag;        
            $tasks->list_id = $val->list;   
        }
     
        foreach ($finish as $val ) {
 
            $finish->tag_id = $val->tag;        
            $finish->list_id = $val->list;   
        }
     
        return Inertia::render('Tasks/Index',[
            'list'=>$list,
            'tasks'=>$tasks,
            'finish'=>$finish,
       
            'countToday'=>$countToday,
            'countTomorrow'=>$countTomorrow,
            'countWeek'=>$countWeek,
            'count'=>$count,
    ]);
    }
    public function today()
    {
        $list = Lists::all();
       
        $tasks = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        // $tasks = Tasks::all();
        // dd($tasks);
        $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
        $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
        $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])
            ->get()->count();
        $count = Tasks::where('status','running')->get()->count();
        foreach ($tasks as $val ) {
 
            $tasks->tag_id = $val->tag;        
            $tasks->list_id = $val->list;   
        }
     
        return Inertia::render('Tasks/Today',[
            'list'=>$list,
            'tasks'=>$tasks,
       
            'countToday'=>$countToday,
            'countTomorrow'=>$countTomorrow,
            'countWeek'=>$countWeek,
            'count'=>$count,
    ]);
    }
    public function upcoming()
    {
        $list = Lists::all();
       
        $today = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $tomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get();
        // $week = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
        $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
        
        $week  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])
        ->get();
        $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])
            ->get()->count();
        $count = Tasks::where('status','running')->get()->count();
        // dd( $data );
        foreach ($week as $val ) {
 
               
            $week->list_id = $val->list;   
        }
     
        foreach ($tomorrow as $val ) {
 
                
            $tomorrow->list_id = $val->list;   
        }
     
        foreach ($today as $val ) {
 
              
            $today->list_id = $val->list;   
        }
     
        return Inertia::render('Tasks/Upcoming',[
            'list'=>$list,
            'today'=>$today,
            'tomorrow'=>$tomorrow,
            'week'=>$week,
            'countToday'=>$countToday,
            'countTomorrow'=>$countTomorrow,
            'countWeek'=>$countWeek,
            'count'=>$count,
            
    ]);
    }
    public function list($slug){
        {
            $list = Lists::all();
            $id = lists::where('slug',$slug)->first()->id;
            $tasks = Tasks::where('list_id',$id)->get();
            // $tasks = Tasks::all();
            // dd($tasks);
            $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
            $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
            $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
            $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
            $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])
                ->get()->count();
            $count = Tasks::where('status','running')->get()->count();
            foreach ($tasks as $val ) {
            
                $tasks->list_id = $val->list;   
            }
         
            return Inertia::render('Tasks/List',[
                'list'=>$list,
                'tasks'=>$tasks,
                'id'=>$id,
           
                'countToday'=>$countToday,
                'countTomorrow'=>$countTomorrow,
                'countWeek'=>$countWeek,
                'count'=>$count,
        ]);
        }
    }
}
