<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        // dd($request);
        $Task = new Tasks;
        $Task->title=$request->title;
        $Task->description=$request->description;
        $Task->date=$request->date;
        $Task->status='running';
        $Task->tag_id=$request->tags;
        $Task->list_id=$request->list;
        $Task->Save();
        return Redirect::back();
       
    }
    public function update(Request $request,$id)
    {
   
        $Task = Tasks::find($id);
        $Task->title=$request->title;
        $Task->description=$request->description;
        $Task->date=$request->date;
      
        $Task->tag_id=$request->tags;
        $Task->list_id=$request->list;
        $Task->Save();
        return Redirect::back();
       
    }

    public function complete($id)
    {
   
        $Task = Tasks::find($id);
       
        if ($Task->status=='finished') {
            # code...
            $Task->status='running';
        }else{
            $Task->status='finished';

        }
       
        $Task->Save();
        return Redirect::back();
       
    }
}
