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
   
        Schema::create('startup_costs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('financial_planning_id')->constrained()->onDelete('cascade'); 
            $table->unsignedBigInteger('user_id'); 
            $table->json('item'); 
            $table->json('category'); 
            $table->decimal('amount', 15, 2); 
            $table->json('timing'); 
            $table->json('notes'); 
            $table->timestamps();

            
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('startup_costs');
    }
};
