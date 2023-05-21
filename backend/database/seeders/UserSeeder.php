<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'SA',
            "email"=>"albaficas@gmail.com",
            'password' => '$2y$10$LftVbB.xbgKRAhwZEDQMVeNZC1Y0PVjhNlyYKdreWaqODB.gNIYsK',
            "role"=>"superadmin",
            "phone"=> "9991732101",
            "photo"=>"a"
        ]);
        User::create([
            'name' => 'Gener Echeverria',
            "email"=>"gener.echeverria@gmail.com",
            'password' => '$2y$10$LftVbB.xbgKRAhwZEDQMVeNZC1Y0PVjhNlyYKdreWaqODB.gNIYsK',
            "role"=>"admin",
            "phone"=> "9991732101",
            "photo"=>"a"
        ]);
    }
}
