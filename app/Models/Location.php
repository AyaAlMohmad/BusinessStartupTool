<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'business_setup_id',
        'user_id',
        'type',
        'address',
        'size',
        'monthly_cost',
    ];

    protected $casts = [
        'type' => 'array', 
        'address' => 'array', 
    ];

 
    public function businessSetup(): BelongsTo
    {
        return $this->belongsTo(BusinessSetup::class);
    }

    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

 
    public function getType(string $locale = 'en'): string
    {
        return $this->type[$locale] ?? $this->type['en'] ?? '';
    }

   
    public function getAddress(string $locale = 'en'): string
    {
        return $this->address[$locale] ?? $this->address['en'] ?? '';
    }
}
