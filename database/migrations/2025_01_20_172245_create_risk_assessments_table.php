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
     Schema::create('risk_assessments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('launch_preparation_id')->constrained()->onDelete('cascade'); 
            $table->json('description'); 
            $table->json('impact'); 
            $table->json('probability'); 
            $table->json('mitigation_strategies')->nullable(); 
            $table->json('contingency_plan')->nullable();
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
        Schema::dropIfExists('risk_assessments');
    }
};
