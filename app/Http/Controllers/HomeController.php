<?php

namespace App\Http\Controllers;

use App\Models\Tags;
use Inertia\Inertia;
use App\Models\Lists;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $list = Lists::all();
        $tag = Tags::all();
        return Inertia::render('Tasks/Today',[
            'list'=>$list,
            'tag'=>$tag
    ]);
    }
}
