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
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mvp_development_id')->constrained()->onDelete('cascade'); 
            $table->json('must_have_features')->nullable(); 
            $table->json('should_have_features')->nullable(); 
            $table->json('nice_to_have_features')->nullable(); 
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

          
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('features');
    }
};
