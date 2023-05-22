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
            // $user->fill($request->only([
            //     'user.name',
            //     'user.email',
            //     'user.phone'
            // ]));
            if ($request->has('cuenta.nombre')) {
                $user->name =  $request->input('cuenta.nombre');
                $user->email =  $request->input('cuenta.email');
                $user->phone =  $request->input('cuenta.tel');
            }

            if ($request->has('cuenta.cpass')) {
                $user->password = bcrypt($request->input('cuenta.cpass'));
            }
            $pass = $request->input('cuenta.cpass');

            $user->save();

            return response()->json([
                "message" => "User updated successfully",
                'user' => $user,
                'newpassword' => $pass
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
        $users = User::select('id', 'name')
            ->where('role', 'admin')
            ->get();
        return response()->json($users, 200);
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
