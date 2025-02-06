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
        Schema::create('assumptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mvp_development_id')->constrained()->onDelete('cascade'); 
            $table->json('description'); 
            $table->json('test_method');
            $table->json('success_criteria');
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
        Schema::dropIfExists('assumptions');
    }
};
