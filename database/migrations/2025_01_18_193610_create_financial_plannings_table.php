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
        Schema::create('financial_plannings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_setup_id')->constrained()->onDelete('cascade'); 
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->json('startup_costs'); 
            $table->json('funding_sources'); 
            $table->json('revenue_projections'); 
            $table->json('expense_projections');
            $table->json('breakeven_analysis'); 
            $table->json('cash_flow_projections'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('financial_plannings');
    }
};
