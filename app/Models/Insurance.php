<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{
    protected $fillable = [
        'business_setup_id',
        'user_id',
        'type',
        'provider',
        'coverage',
        'annual_cost',
    ];

    protected $casts = [
        'type' => 'array', 
        'provider' => 'array', 
        'coverage' => 'array', 
    ];

    /**
     * العلاقة مع BusinessSetup.
     */
    public function businessSetup()
    {
        return $this->belongsTo(BusinessSetup::class);
    }

   
    public function user()
    {
        return $this->belongsTo(User::class);
    }

  
    public function getType(string $locale = 'en'): string
    {
        return $this->type[$locale] ?? $this->type['en'] ?? '';
    }

  
    public function getProvider(string $locale = 'en'): string
    {
        return $this->provider[$locale] ?? $this->provider['en'] ?? '';
    }

   
    public function getCoverage(string $locale = 'en'): string
    {
        return $this->coverage[$locale] ?? $this->coverage['en'] ?? '';
    }
}