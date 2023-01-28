<?php

namespace App\Http\Controllers;

use App\Models\Tags;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TagController extends Controller
{
    public function store(Request $request)
    {
        $Tag = new Tags;
        $Tag->name=$request->nameTag;
        $Tag->color=$request->color;
        $Tag->Save();
        return Redirect::back();
       
    }
}
