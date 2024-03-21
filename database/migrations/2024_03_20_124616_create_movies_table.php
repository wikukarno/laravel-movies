<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->uuid('id')->index();
            $table->foreignUuid('genre_id')->references('id')->on('genres');
            $table->string('title');
            $table->string('thumbnail');
            $table->date('release_date');
            $table->decimal('rating');
            $table->string('country');
            $table->string('actors');
            $table->string('director');
            $table->text('description');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
