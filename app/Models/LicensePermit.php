<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LicensePermit extends Model
{
    protected $fillable = [
        'business_setup_id',
        'user_id',
        'name',
        'requirements',
        'status',
        'deadline',
    ];

    protected $casts = [
        'name' => 'array',
        'requirements' => 'array',
        'status' => 'array',
    ];
    public function businessSetup()
    {
        return $this->belongsTo(BusinessSetup::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
