<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FundingSource extends Model
{
   
    protected $fillable = [
        'financial_planning_id',
        'user_id',
        'source',
        'type',
        'amount',
        'status',
        'terms',
    ];

    protected $casts = [
        'source' => 'array',
        'type' => 'array',
        'status' => 'array',
        'terms' => 'array',
    ];

   
    public function financialPlanning()
    {
        return $this->belongsTo(FinancialPlanning::class);
    }

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
