<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\TagController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/upcoming', [HomeController::class, 'upcoming'])->name('upcoming');
Route::get('/today', [HomeController::class, 'today'])->name('today');
Route::get('/list/{id}', [HomeController::class, 'list'])->name('list');
Route::post('/list', [ListController::class, 'store'])->name('save.list');
Route::post('/tasks', [TaskController::class, 'store'])->name('save.task');
Route::put('/task/{id}', [TaskController::class, 'update'])->name('update.task');
Route::put('/task/{id}', [TaskController::class, 'complete'])->name('finish.task');
Route::post('/tags', [TagController::class, 'store'])->name('save.tag');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
