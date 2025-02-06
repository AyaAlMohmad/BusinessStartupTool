<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesTeam extends Model
{
    protected $fillable = [
        'sales_strategy_id',
        'role',
        'responsibilities',
        'required_skills',
        'target_metrics',
        'user_id',
    ];

    protected $casts = [
        'role' => 'array', 
        'responsibilities' => 'array', 
        'required_skills' => 'array', 
        'target_metrics' => 'array', 
    ];

    
    public function salesStrategy()
    {
        return $this->belongsTo(SalesStrategy::class);
    }

   
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
