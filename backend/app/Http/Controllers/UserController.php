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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        if (User::where("id", $id)->exists()) {
            $user = User::find($id);

            // Actualizar los campos del usuario con los datos del request
            $user->fill($request->only([
                'name',
                'email',
                'phone',
                'photo'
            ]));

            if ($request->has('password')) {
                // Si se proporciona una nueva contraseña, se actualiza
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
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
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
}
