<?php

namespace App\Http\Controllers;

use App\Models\Lists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ListController extends Controller
{
    public function index()
    {
        # code...
    }
    public function store(Request $request)
    {
        $lowercase = strtolower($request->nameList);
        $hyphenated = str_replace(" ", "-", $lowercase);
        // dd($hyphenated);
        $List = new Lists;
        $List->name=$request->nameList;
      
        
        $List->slug=$hyphenated;
        $List->color=$request->color;
        $List->Save();
        return Redirect::back()->with('success',"List Added!");
       
    }
    public function delete($id)
    {
      
        $List =Lists::find($id);;
      
        $List->delete();
        return Redirect::route('home')->with('error',"List Deleted!");
       
    }
}
