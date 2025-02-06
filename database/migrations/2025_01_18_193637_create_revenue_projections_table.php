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
        Schema::create('revenue_projections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('financial_planning_id')->constrained()->onDelete('cascade')->index(); 
            $table->unsignedBigInteger('user_id'); 
            $table->date('month');
            $table->decimal('amount', 15, 2); 
            $table->json('assumptions');
            $table->timestamps();

        
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('revenue_projections');
    }
};
