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
        Schema::create('content_strategies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('marketing_id')->constrained()->onDelete('cascade');
            $table->json('type'); 
            $table->json('description');
            $table->json('frequency'); 
            $table->string('responsible_person');
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
        Schema::dropIfExists('content_strategies');
    }
};
