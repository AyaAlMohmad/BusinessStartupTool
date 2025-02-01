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
            $table->string('name');
            $table->json('requirements');
            $table->string('status');
            $table->date('deadline');
            $table->timestamps();
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
