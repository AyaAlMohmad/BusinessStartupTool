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
        Schema::create('business_ideas', function (Blueprint $table) {
            $table->id();
            $table->json('skills_experience');
            $table->json('passions_interests');
            $table->json('values_goals');
            $table->json('business_ideas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_ideas');
    }
};
