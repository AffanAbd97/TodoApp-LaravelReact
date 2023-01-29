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
}
