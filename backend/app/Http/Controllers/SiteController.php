<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Footer;
use App\Models\Site;
use App\Models\Header;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;

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
            'newCrearSitio.name' => 'required|string',
            'newCrearSitio.backgroundColor' => 'required|string',
            'newCrearSitio.views' => 'required|integer',
            'newCrearSitio.url' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = JWTAuth::parseToken()->authenticate();
        $siteData = [
            'idUser' => $user->id,
            'name' => $request->input('newCrearSitio.name'),
            'backgroundColor' => $request->input('newCrearSitio.backgroundColor'),
            'views' => $request->input('newCrearSitio.views'),
            'url' => $request->input('newCrearSitio.url'),
        ];
        
        try {
            DB::beginTransaction();
            $site = Site::create($siteData);
            $headerData = [
                'idSite' => $site->id,
                'title' => $request->input('newCrearSitio.header.title'),
                'size' => $request->input('newCrearSitio.header.size'),
                'position' => $request->input('newCrearSitio.header.position'),
                'color' => $request->input('newCrearSitio.header.color'),
                'image' => $request->input('newCrearSitio.header.image'),
                'hero' => $request->input('newCrearSitio.header.hero'),
            ];

            $header = Header::create($headerData);

            $footerData = [
                'idSite' => $site->id,
                'backgroundColor' => $request->input('newCrearSitio.footer.backgroundColor'),
                'textColor' => $request->input('newCrearSitio.footer.textColor'),
                'setSocialMedia' => $request->input('newCrearSitio.footer.socialMedia.setSocialMedia'),
                'facebook' => $request->input('newCrearSitio.footer.socialMedia.facebook'),
                'twitter' => $request->input('newCrearSitio.footer.socialMedia.twitter'),
                'instagram' => $request->input('newCrearSitio.footer.socialMedia.instagram'),
                'tiktok' => $request->input('newCrearSitio.footer.socialMedia.tiktok'),
                'linkedin' => $request->input('newCrearSitio.footer.socialMedia.linkedin'),
                'otro' => $request->input('newCrearSitio.footer.socialMedia.otro'),
                'setContact' => $request->input('newCrearSitio.footer.contact.setContact'),
                'address' => $request->input('newCrearSitio.footer.contact.address'),
                'phone' => $request->input('newCrearSitio.footer.contact.phone'),
                'setExtra' => $request->input('newCrearSitio.footer.extra.setExtra'),
                'text' => $request->input('newCrearSitio.footer.extra.text'),
                'image' => $request->input('newCrearSitio.footer.extra.image'),
            ];

            $footer = Footer::create($footerData);

            DB::commit();

            return response()->json([
                'message' => 'Successfully created',
                'site' => $site,
                'header' => $header,
                'footer' => $footer
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Failed to create',
                'error' => $e->getMessage()
            ], 500);
        }
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
            'backgroundColor' => 'string',
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
