<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Marketing extends Model
{
    protected $fillable = [
        'audience_description',
        'problem_statement',
        'solution_overview',
    ];

    public function marketingChannels()
    {
        return $this->hasMany(MarketingChannel::class);
    }

    public function contentStrategies()
    {
        return $this->hasMany(ContentStrategy::class);
    }

    public function brandIdentity()
    {
        return $this->hasOne(BrandIdentity::class);
    }
}
