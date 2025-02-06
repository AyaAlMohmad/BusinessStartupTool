<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StartupCost extends Model
{
    protected $fillable = [
        'financial_planning_id',
        'user_id',
        'item',
        'category',
        'amount',
        'timing',
        'notes',
    ];

    protected $casts = [
        'item' => 'array',
        'category' => 'array',
        'timing' => 'array',
        'notes' => 'array',
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
