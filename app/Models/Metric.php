<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metric extends Model
{
    protected $fillable = [
        'mvp_development_id',
        'name',
        'target_value',
        'actual_value',
    ];

    public function mvpDevelopment()
    {
        return $this->belongsTo(MVPDevelopment::class);
    }
}
