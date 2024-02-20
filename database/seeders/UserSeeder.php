<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'id' => Str::uuid(),
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('admin'),
                'roles' => 'admin',
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => Str::uuid(),
                'name' => 'User',
                'email' => 'user@gmail.com',
                'password' => bcrypt('user'),
                'roles' => 'user',
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        User::insert($user);
    }
}
