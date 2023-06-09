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
    // Endpoint para iniciar sesión
    Route::post('login', 'App\Http\Controllers\AuthController@login');

    // Endpoint para registrar un usuario
    Route::post('register', 'App\Http\Controllers\AuthController@register');

    // Endpoint para cerrar sesión
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');

    // Endpoint para refrescar el token de autenticación
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');

    // Endpoint para obtener los datos del usuario autenticado
    Route::post('me', 'App\Http\Controllers\AuthController@me');

    // Endpoint para verificar el token de autenticación
    Route::get('check', 'App\Http\Controllers\AuthController@checkToken');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'account'
], function ($router) {
    Route::get('sausers', 'App\Http\Controllers\UserController@getSaUsers');
    Route::get('users', 'App\Http\Controllers\UserController@index');

    // Endpoint para obtener un usuario específico por ID
    Route::get('users/{id}', 'App\Http\Controllers\UserController@show');

    // Endpoint para actualizar un usuario específico por ID
    Route::put('users/{id}', 'App\Http\Controllers\UserController@update');

    // Endpoint para eliminar un usuario específico por ID
    Route::delete('users/{id}', 'App\Http\Controllers\UserController@destroy');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'media'
], function ($router){
    // Endpoint para obtener todos los sitios
    Route::get('sites', 'App\Http\Controllers\SiteController@index');

    // Endpoint para crear un nuevo sitio
    Route::post('sites', 'App\Http\Controllers\SiteController@store');

    // Endpoint para obtener los sitios del usuario actual
    Route::get('mySites', 'App\Http\Controllers\SiteController@getSitesForCurrentUser');
    Route::post('updateState', 'App\Http\Controllers\SiteController@updateState');
    Route::get('userSites/{id}', 'App\Http\Controllers\SiteController@getSitesForUser');
    Route::get('site/{id}', 'App\Http\Controllers\SiteController@show');
    Route::get('id/{url}', 'App\Http\Controllers\SiteController@getIdSite');
    Route::put('site/{id}', 'App\Http\Controllers\SiteController@update');

    // Endpoint para eliminar un sitio específico por ID
    Route::delete('site/{id}', 'App\Http\Controllers\SiteController@destroy');
});

// Endpoint para obtener los datos del usuario autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
