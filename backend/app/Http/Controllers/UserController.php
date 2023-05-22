<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        return User::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if (User::where("id", $id)->exists()) {
            $user = User::find($id);
            $user->fill($request->only([
                'name',
                'email',
                'phone',
                'photo'
            ]));

            if ($request->has('password')) {
                $user->password = bcrypt($request->input('password'));
            }

            $user->save();

            return response()->json([
                "message" => "User updated successfully",
                'user' => $user
            ], 200);
        } else {
            return response()->json([
                "error" => "User not found",
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->delete();
            return response()->json([
                "message" => "User deleted successfully",
            ], 202);
        } else {
            return response()->json([
                "error" => "User not found",
            ], 404);
        }
    }

    public function getSaUsers(Request $request)
{
    $users = User::with('sites')->select('name')->get();

    $userList = [];
    foreach ($users as $user) {
        $siteCount =$user->sites;
        $userList[] = [
            'name' => $user->name,
            'siteCount' => $siteCount,
        ];
    }

    return response()->json($userList, 200);
}

public function getSitesForUser($userId)
{
    $user = User::findOrFail($userId);
    $sites = $user->sites;

    return response()->json([
        'sites' => $sites
    ], 200);
}

public function getnumSitesForUser($userId)
{
    $user = User::findOrFail($userId);
    $siteCount = $user->sites()->count();

    return $siteCount;
}
}
