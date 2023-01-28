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
        $List = new Lists;
        $List->name=$request->nameList;
        $List->color=$request->color;
        $List->Save();
        return Redirect::back();
       
    }
}
