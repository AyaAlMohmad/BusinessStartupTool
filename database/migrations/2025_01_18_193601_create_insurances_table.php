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
        Schema::create('insurances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('business_setup_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            $table->json('type'); 
            $table->json('provider'); 
            $table->json('coverage'); 
            $table->decimal('annual_cost', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurances');
    }
};
