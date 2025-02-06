<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
        'status',
        'registration_date',
        'last_login',
        'progress',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'registration_date' => 'datetime',
        'last_login' => 'datetime',
    ];
    public function businessSetups()
    {
        return $this->hasMany(BusinessSetup::class);
    }
    public function businessIdeas()
    {
        return $this->hasMany(BusinessIdea::class);
    }
    public function licensePermits()
    {
        return $this->hasMany(LicensePermit::class);
    }
    public function locations()
    {
        return $this->hasMany(Location::class);
    }
    public function startupCosts()
    {
        return $this->hasMany(StartupCost::class);
    }
    public function financialPlannings()
    {
        return $this->hasMany(FinancialPlanning::class);
    }
    public function insurances()
    {
        return $this->hasMany(Insurance::class);
    }
    public function fundingSources()
    {
        return $this->hasMany(FundingSource::class);
    }
    public function revenueProjections()
    {
        return $this->hasMany(RevenueProjection::class);
    }
    public function expenseProjections()
    {
        return $this->hasMany(ExpenseProjection::class);
    }
    public function marketResearches()
    {
        return $this->hasMany(MarketResearch::class);
    }
    public function marketings()
    {
        return $this->hasMany(Marketing::class);
    }
    public function marketingChannels()
    {
        return $this->hasMany(MarketingChannel::class);
    }
    public function contentStrategies()
    {
        return $this->hasMany(ContentStrategy::class);
    }
    public function brandIdentities()
    {
        return $this->hasMany(BrandIdentity::class);
    }
    public function features()
    {
        return $this->hasMany(Feature::class);
    }
    public function assumptions()
    {
        return $this->hasMany(Assumption::class);
    }
    public function timelines()
    {
        return $this->hasMany(Timeline::class);
    }
    public function metrics()
    {
        return $this->hasMany(Metric::class);
    }
    public function salesChannels()
    {
        return $this->hasMany(SalesChannel::class);
    }
    public function pricingTiers()
    {
        return $this->hasMany(PricingTier::class);
    }
    public function salesProcesses()
    {
        return $this->hasMany(SalesProcess::class);
    }
    public function salesTeams()
    {
        return $this->hasMany(SalesTeam::class);
    }
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
