<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Lists;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $list = Lists::all();
        return Inertia::render('Tasks/Today',['list'=>$list]);
    }
}
