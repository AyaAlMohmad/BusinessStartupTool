<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PricingTier extends Model
{
    protected $fillable = [
        'sales_strategy_id',
        'name',
        'price',
        'features',
        'target_customer',
    ];

    protected $casts = [
        'features' => 'array',
    ];

    public function salesStrategy()
    {
        return $this->belongsTo(SalesStrategy::class);
    }
}
