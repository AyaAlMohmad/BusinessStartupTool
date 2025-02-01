<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RevenueProjection extends Model
{
    protected $fillable = ['financial_planning_id', 'month', 'amount', 'assumptions'];

    protected $casts = [
        'assumptions' => 'array',
    ];

    public function financialPlanning()
    {
        return $this->belongsTo(FinancialPlanning::class);
    }
}
