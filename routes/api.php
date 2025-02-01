<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\FinancialPlanningController;
use App\Http\Controllers\API\BusinessIdeaController;
use App\Http\Controllers\API\BusinessSetupController;
use App\Http\Controllers\API\LaunchPreparationController;
use App\Http\Controllers\API\MarketingChannelController;
use App\Http\Controllers\API\MarketingController;
use App\Http\Controllers\API\MarketResearchController;
use App\Http\Controllers\API\MVPDevelopmentController;
use App\Http\Controllers\API\SalesStrategyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});







Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']); 
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


// Business Idea Routes
Route::prefix('business-ideas')->group(function() {
    Route::get('/', [BusinessIdeaController::class, 'index']);
    Route::post('/', [BusinessIdeaController::class, 'store']);
});

// Business Setup Routes 
Route::prefix('business-setups')->group(function() {
    Route::get('/', [BusinessSetupController::class, 'index']);
    Route::post('/', [BusinessSetupController::class, 'store']);
    Route::get('/{id}', [BusinessSetupController::class, 'show']);
    Route::put('/{id}', [BusinessSetupController::class, 'update']);
    Route::delete('/{id}', [BusinessSetupController::class, 'destroy']);
});


Route::get('/financial-planning', [FinancialPlanningController::class, 'index']); // GET all
Route::get('/financial-planning/{id}', [FinancialPlanningController::class, 'show']); // GET by ID
Route::post('/financial-planning', [FinancialPlanningController::class, 'store']); // POST create


Route::apiResource('market-researches', MarketResearchController::class);

 
Route::apiResource('marketing', MarketingController::class);
// Route::apiResource('marketing.channels', MarketingChannelController::class)->shallow();


Route::apiResource('mvp-development', MVPDevelopmentController::class);


Route::apiResource('launch-preparations', LaunchPreparationController::class);

Route::apiResource('sales-strategies', SalesStrategyController::class);