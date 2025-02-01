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
        Schema::create('brand_identities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('marketing_id')->constrained()->onDelete('cascade');
            $table->json('values')->nullable();
            $table->string('mission');
            $table->string('vision');
            $table->string('tone');
            $table->string('visual_style');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brand_identities');
    }
};
