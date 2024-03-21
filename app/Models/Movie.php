<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{
    use SoftDeletes, HasUuids;

    protected $fillable = [
        'title',
        'description',
        'release_date',
        'country',
        'genre_id',
        'actors',
        'director',
        'thumbnail',
        'url',
        'slug',
    ];

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }
}
