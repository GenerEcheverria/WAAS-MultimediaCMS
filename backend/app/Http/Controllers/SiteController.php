<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Footer;
use App\Models\Site;
use App\Models\Body;
use App\Models\Text;
use App\Models\Image;
use App\Models\Video;
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

            $bodyDataContent = $request->input('newCrearSitio.body');
            foreach ($bodyDataContent as $index => $item) {
                $bodyData= [
                    'idSite' => $site->id,
                    'indexPage'=> $index,
                ];
                $body = Body::create($bodyData);
                if (isset($item['full'])) {
                    if (isset($item['full']['text'])) {
                        $textData= [
                            'idCol' => $body->id,
                            'titleText' => $item['full']['text']['title'],
                            'positionTitle' => $item['full']['text']['alignment'],
                            'text' => $item['full']['text']['text'],
                            'positionText' => $item['full']['text']['position']
                        ];
                        $text = Text::create($textData);
                        $body->idType = $text->id;
                        $body->Type = 'text';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['full']['image'])) {
                        $imageData= [
                            'idCol' => $body->id,
                            'url' => $item['full']['image']['image'],
                            'size' => $item['full']['image']['size'],
                            'text' => $item['full']['image']['caption']
                        ];
                        $image = Image::create($imageData);
                        $body->idType = $image->id;
                        $body->Type = 'image';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['full']['video'])) {
                        $videoData= [
                            'idCol' => $body->id,
                            'url' => $item['full']['video']['video'],
                            'size' => $item['full']['video']['size']
                        ];
                        $video = Video::create($videoData);
                        $body->idType = $video->id;
                        $body->Type = 'video';
                        $body->fill($bodyData);
                        $body->save();
                    }
                } elseif (isset($item['left'])) {
                    if (isset($item['left']['text'])) {
                        $textData= [
                            'idCol' => $body->id,
                            'titleText' => $item['left']['text']['title'],
                            'positionTitle' => $item['left']['text']['alignment'],
                            'text' => $item['left']['text']['text'],
                            'positionText' => $item['left']['text']['position']
                        ];
                        $text = Text::create($textData);
                        $body->idType = $text->id;
                        $body->Type = 'text';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['left']['image'])) {
                        $imageData= [
                            'idCol' => $body->id,
                            'url' => $item['left']['image']['image'],
                            'size' => $item['left']['image']['size'],
                            'text' => $item['left']['image']['caption']
                        ];
                        $image = Image::create($imageData);
                        $body->idType = $image->id;
                        $body->Type = 'image';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['left']['video'])) {
                        $videoData= [
                            'idCol' => $body->id,
                            'url' => $item['left']['video']['video'],
                            'size' => $item['left']['video']['size']
                        ];
                        $video = Video::create($videoData);
                        $body->idType = $video->id;
                        $body->Type = 'video';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['right']['text'])) {
                        $textData= [
                            'idCol' => $body->id,
                            'titleText' => $item['right']['text']['title'],
                            'positionTitle' => $item['right']['text']['alignment'],
                            'text' => $item['right']['text']['text'],
                            'positionText' => $item['right']['text']['position']
                        ];
                        $text = Text::create($textData);
                        $body->idType2 = $text->id;
                        $body->Type2 = 'text';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['right']['image'])) {
                        $imageData= [
                            'idCol' => $body->id,
                            'url' => $item['right']['image']['image'],
                            'size' => $item['right']['image']['size'],
                            'text' => $item['right']['image']['caption']
                        ];
                        $image = Image::create($imageData);
                        $body->idType2 = $image->id;
                        $body->Type2 = 'image';
                        $body->fill($bodyData);
                        $body->save();
                    }
                    if (isset($item['right']['video'])) {
                        $videoData= [
                            'idCol' => $body->id,
                            'url' => $item['right']['video']['video'],
                            'size' => $item['right']['video']['size']
                        ];
                        $video = Video::create($videoData);
                        $body->idType2 = $video->id;
                        $body->Type2 = 'video';
                        $body->fill($bodyData);
                        $body->save();
                    }
                }
            }

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
