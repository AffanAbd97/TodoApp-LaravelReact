<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Tags;
use Inertia\Inertia;
use App\Models\Lists;
use App\Models\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $userId = Auth::user()->id;
    
        $list = Lists::where('user_id',$userId)->get();
        
        $tasks = Tasks::where('status','running')->where('user_id',$userId)->get();
        $finish = Tasks::where('status','finished')->where('user_id',$userId)->get();
        $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
        $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
        $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])->where('user_id',$userId)->get()
            ->count();
        $count = Tasks::where('status','running')->where('user_id',$userId)->get()->count();
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
        $userId = Auth::user()->id;
        $tasks = Tasks::where('status','running')->where('user_id',$userId)->get();
        $today = Tasks::where('status','running')->where('user_id',$userId)->where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $list = Lists::where('user_id',$userId)->get();
        $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
        $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
        $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])->where('user_id',$userId)->get()
            ->count();
        $count = Tasks::where('status','running')->where('user_id',$userId)->get()->count();
        foreach ($tasks as $val ) {
 
            $tasks->tag_id = $val->tag;        
            $tasks->list_id = $val->list;   
        }
     
        return Inertia::render('Tasks/Today',[
            'list'=>$list,
            'tasks'=>$tasks,
            'today'=>$today,
       
            'countToday'=>$countToday,
            'countTomorrow'=>$countTomorrow,
            'countWeek'=>$countWeek,
            'count'=>$count,
    ]);
    }
    public function upcoming()
    {
        $userId = Auth::user()->id;
    
        $list = Lists::where('user_id',$userId)->get();
        $tasks = Tasks::where('status','running')->where('user_id',$userId)->get();
        $today = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get();
        $tomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get();
        $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
        $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
        
        $week  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])->where('user_id',$userId)
        ->get();
        $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
        $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])->where('user_id',$userId)->get()
            ->count();
        $count = Tasks::where('status','running')->where('user_id',$userId)->get()->count();
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
            'tasks'=>$tasks,
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
            $userId = Auth::user()->id;
        
            $list = Lists::where('user_id',$userId)->get();
            $id = lists::where('slug',$slug)->first()->id;
            $category = lists::where('slug',$slug)->first();
            $tasks = Tasks::where('list_id',$id)->get();
            $startOfWeek = Carbon::now('Asia/Jakarta')->startOfWeek()->toDateString();
            $endOfWeek = Carbon::now('Asia/Jakarta')->endOfWeek()->toDateString();
            $countToday = Tasks::where('date',Carbon::now('Asia/Jakarta')->format('Y-m-d'))->get()->count();
            $countTomorrow = Tasks::where('date',Carbon::tomorrow('Asia/Jakarta')->format('Y-m-d'))->get()->count();
            $countWeek  = Tasks::whereBetween('date', [$startOfWeek, $endOfWeek])->where('user_id',$userId)->get()->count();
            $count = Tasks::where('status','running')->where('user_id',$userId)->get()->count();
            foreach ($tasks as $val ) {
            
                $tasks->list_id = $val->list;   
            }
         $categoryCount = $tasks->count();
            return Inertia::render('Tasks/List',[
                'list'=>$list,
                'tasks'=>$tasks,
                'id'=>$id,
                'category'=>$category,
           
                'countToday'=>$countToday,
                'categoryCount'=>$categoryCount,
                'countTomorrow'=>$countTomorrow,
                'countWeek'=>$countWeek,
                'count'=>$count,
        ]);
        }
    }
}
