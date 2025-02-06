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
        'user_id',
    ];

    protected $casts = [
        'description' => 'array', 
        'impact' => 'array', 
        'probability' => 'array', 
        'mitigation_strategies' => 'array', 
        'contingency_plan' => 'array', 
    ];

   
    public function launchPreparation()
    {
        return $this->belongsTo(LaunchPreparation::class);
    }

  
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
