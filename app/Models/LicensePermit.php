<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LicensePermit extends Model
{
    protected $fillable = ['business_setup_id', 'name', 'requirements', 'status', 'deadline'];

    protected $casts = [
        'requirements' => 'array',
        'deadline' => 'date',
    ];

    public function businessSetup()
    {
        return $this->belongsTo(BusinessSetup::class);
    }
}
