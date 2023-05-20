<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Site;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class SiteController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        return Site::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'views' => 'required|integer',
            'url' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = JWTAuth::parseToken()->authenticate(); 
        $siteData = $validator->validate();
        $siteData['idUser'] = $user->id; 
        $site = Site::create($siteData);
        return response()->json([
            'message' => 'Successfully created',
            'site' => $site
        ], 201);
    }

    public function getSitesForCurrentUser()
    {
        $user = JWTAuth::parseToken()->authenticate();
        $sites = $user->sites; 
        return response()->json([
            'sites' => $sites
        ], 200);
    }

    public function show(string $id)
    {
        $site = Site::findOrFail($id);
        return response()->json([
            'site' => $site
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'views' => 'integer',
            'url' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $site = Site::findOrFail($id);
        $siteData = $validator->validate();
        $site->update($siteData);

        return response()->json([
            'message' => 'Successfully updated',
            'site' => $site
        ], 200);
    }

    public function destroy(string $id)
    {
        $site = Site::findOrFail($id);
        $site->delete();

        return response()->json([
            'message' => 'Successfully deleted',
            'site' => $site
        ], 200);
    }
}
