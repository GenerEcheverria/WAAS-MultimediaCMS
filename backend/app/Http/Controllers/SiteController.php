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
            'name' => 'required|string',
            'backgroundColor' => 'required|string',
            'views' => 'required|integer',
            'url' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = JWTAuth::parseToken()->authenticate();
        $siteData = $validator->validate();
        $siteData['idUser'] = $user->id;

        try {
            DB::beginTransaction();

            $site = Site::create($siteData);

            $headerData = [
                'idSite' => $site->id,
                'title' => $request->input('header.title'),
                'size' => $request->input('header.size'),
                'position' => $request->input('header.position'),
                'color' => $request->input('header.color'),
                'image' => $request->input('header.image'),
                'hero' => $request->input('header.hero'),
            ];

            $header = Header::create($headerData);

            $footerData =[
                'idSite'=> $site->id,
                'backgroundColor' => $request->input('footer.backgroundColor'),
                'textColor'=> $request->input('footer.textColor'),
                'setSocialMedia'=> $request->input('footer.socialMedia.setSocialMedia'),
                'facebook'=> $request->input('footer.socialMedia.facebook'),
                'twitter'=> $request->input('footer.socialMedia.twitter'),
                'instagram'=> $request->input('footer.socialMedia.instagram'),
                'tiktok' => $request->input('footer.socialMedia.tiktok'),
                'linkedin' => $request->input('footer.socialMedia.linkedin'),
                'otro'=> $request->input('footer.socialMedia.setSocialMedia'),
                'setContact'=> $request->input('footer.contact.setContact'),
                'address'=> $request->input('footer.contact.address'),
                'phone'=> $request->input('footer.contact.phone'),
                'setExtra'=> $request->input('footer.extra.setExtra'),
                'text'=> $request->input('footer.extra.text'),
                'image'=> $request->input('footer.extra.image')
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
