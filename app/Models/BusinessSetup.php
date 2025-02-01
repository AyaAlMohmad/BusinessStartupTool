<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessSetup extends Model
{
    protected $fillable = ['business_type', 'requirements', 'timeline', 'setup_costs'];

    protected $casts = [
        'requirements' => 'array',
    ];

    public function licenses()
    {
        return $this->hasMany(LicensePermit::class);
    }

    public function locations()
    {
        return $this->hasMany(Location::class);
    }

    public function insurances()
    {
        return $this->hasMany(Insurance::class);
    }
}

