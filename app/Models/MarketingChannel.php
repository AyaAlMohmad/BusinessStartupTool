<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MarketingChannel extends Model
{
    protected $fillable = [
        'marketing_id',
        'name',
        'strategy',
        'budget',
        'expected_roi',
    ];

    public function marketing()
    {
        return $this->belongsTo(Marketing::class);
    }
}
