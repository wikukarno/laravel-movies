<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Genre extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id', 
        'users_id',
        'name', 
        'slug'
    ];

    public $incrementing = false;

    protected $keyType = 'string';
}
