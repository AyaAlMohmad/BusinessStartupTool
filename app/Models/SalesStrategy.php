<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesStrategy extends Model
{
    protected $table = 'sales_strategies';

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
}
