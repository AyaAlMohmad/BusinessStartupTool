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
        Schema::create('sales_processes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sales_strategy_id')->constrained()->onDelete('cascade'); 
            $table->json('stage'); 
            $table->json('activities'); 
            $table->string('duration');
            $table->json('responsible_person');
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
        Schema::dropIfExists('sales_processes');
    }
};
