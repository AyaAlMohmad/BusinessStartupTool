<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketingActivity extends Model
{
    protected $fillable = [
        'launch_preparation_id',
        'activity',
        'timeline',
        'budget',
        'status',
        'metrics',
    ];

    protected $casts = [
        'metrics' => 'array',
    ];

    public function launchPreparation()
    {
        return $this->belongsTo(LaunchPreparation::class);
    }
}
