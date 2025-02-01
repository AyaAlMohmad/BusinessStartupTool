<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RiskAssessment extends Model
{
    protected $fillable = [
        'launch_preparation_id',
        'description',
        'impact',
        'probability',
        'mitigation_strategies',
        'contingency_plan',
    ];

    protected $casts = [
        'mitigation_strategies' => 'array',
    ];

    public function launchPreparation()
    {
        return $this->belongsTo(LaunchPreparation::class);
    }
}
