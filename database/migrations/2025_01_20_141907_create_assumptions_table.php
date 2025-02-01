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
            $table->string('description');
            $table->string('test_method');
            $table->string('success_criteria');
            $table->timestamps();
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
