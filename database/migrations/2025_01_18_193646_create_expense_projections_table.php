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
        Schema::create('expense_projections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('financial_planning_id')->constrained()->onDelete('cascade'); 
            $table->unsignedBigInteger('user_id'); 
            $table->date('month');
            $table->decimal('fixed_expenses', 10, 2); 
            $table->decimal('variable_expenses', 10, 2); 
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
        Schema::dropIfExists('expense_projections');
    }
};
