<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::get('check', 'App\Http\Controllers\AuthController@checkToken');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'account'
], function ($router) {
    Route::get('users', 'App\Http\Controllers\UserController@index');
    Route::get('users/{id}', 'App\Http\Controllers\UserController@show');
    Route::put('users/{id}', 'App\Http\Controllers\UserController@update');
    Route::delete('users/{id}', 'App\Http\Controllers\UserController@destroy');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'media'
], function ($router){
    Route::get('sites', 'App\Http\Controllers\SiteController@index');
    Route::post('sites', 'App\Http\Controllers\SiteController@store');
    Route::get('mySites', 'App\Http\Controllers\SiteController@getSitesForCurrentUser');
    Route::post('updateState', 'App\Http\Controllers\SiteController@updateState');
    Route::get('userSites/{id}', 'App\Http\Controllers\SiteController@getSitesForUser');
    Route::get('site/{id}', 'App\Http\Controllers\SiteController@show');
    Route::get('id/{url}', 'App\Http\Controllers\SiteController@getIdSite');
    Route::put('site/{id}', 'App\Http\Controllers\SiteController@update');
    Route::delete('site/{id}', 'App\Http\Controllers\SiteController@destroy');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
