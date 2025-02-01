<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = ['business_setup_id', 'type', 'address', 'size', 'monthly_cost'];

    public function businessSetup()
    {
        return $this->belongsTo(BusinessSetup::class);
    }
}
