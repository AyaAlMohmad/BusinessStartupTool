<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessSetup extends Model
{
    protected $fillable = [
        'user_id',
        'business_type',
        'requirements',
        'timeline',
        'setup_costs',
    ];

    protected $casts = [
        'business_type' => 'array',
        'requirements' => 'array',
        'timeline' => 'array',
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


    // تعريف العلاقة مع نموذج User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}

