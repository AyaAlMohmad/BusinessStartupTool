<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{
    protected $fillable = ['business_setup_id', 'type', 'provider', 'coverage', 'annual_cost'];

    public function businessSetup()
    {
        return $this->belongsTo(BusinessSetup::class);
    }
}
