<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProgressAnalyticsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});

Route::get('/das', function () {
    return view('dashboard');
})->middleware(['auth', 'verified']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::prefix('admin/')->name('admin.')->middleware('admin')->group(function () {
    // Route::get('/', [UserController::class, 'index'])->name('index'); 
    // Route::get('/{id}', [UserController::class, 'show'])->name('show');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/Progress', [ProgressAnalyticsController::class, 'index'])->name('ProgressAnalytics');
    Route::patch('/{id}/status', [UserController::class, 'changeStatus'])->name('changeStatus'); 
    // Route::delete('/{id}', [UserController::class, 'destroy'])->name('destroy'); 
    Route::resource('users', UserController::class);

});

require __DIR__.'/auth.php';
