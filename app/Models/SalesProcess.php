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
        'user_id',
    ];

    protected $casts = [
        'stage' => 'array',
         'responsible_person' => 'array', 
        'activities' => 'array', 
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
