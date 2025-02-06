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
        Schema::create('license_permits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_setup_id')->constrained()->onDelete('cascade'); 
            $table->unsignedBigInteger('user_id'); 
            $table->json('name'); 
            $table->json('requirements'); 
            $table->json('status'); 
            $table->date('deadline'); 
            $table->timestamps();

            
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('license_permits');
    }
};
