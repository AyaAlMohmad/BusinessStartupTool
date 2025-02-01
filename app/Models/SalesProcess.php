<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesProcess extends Model
{
    protected $fillable = [
        'sales_strategy_id',
        'stage',
        'activities',
        'duration',
        'responsible_person',
    ];

    public function salesStrategy()
    {
        return $this->belongsTo(SalesStrategy::class);
    }
}
