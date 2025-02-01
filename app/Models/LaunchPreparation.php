<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LaunchPreparation extends Model
{
    protected $table = 'launch_preparations';

    public function launchChecklists()
    {
        return $this->hasMany(LaunchChecklist::class);
    }

    public function marketingActivities()
    {
        return $this->hasMany(MarketingActivity::class);
    }

    public function riskAssessments()
    {
        return $this->hasMany(RiskAssessment::class);
    }

    public function launchMilestones()
    {
        return $this->hasMany(LaunchMilestone::class);
    }
}
