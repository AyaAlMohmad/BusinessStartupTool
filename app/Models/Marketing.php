<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Marketing extends Model
{
    protected $fillable = [
        'audience_description',
        'problem_statement',
        'solution_overview',
        'user_id', 
    ];

    protected $casts = [
        'audience_description' => 'array',
        'problem_statement' => 'array', 
        'solution_overview' => 'array', 
    ];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
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
