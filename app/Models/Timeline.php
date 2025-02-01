<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeline extends Model
{
    protected $fillable = [
        'mvp_development_id',
        'name',
        'duration',
        'milestones',
    ];

    protected $casts = [
        'milestones' => 'array',
    ];

    public function mvpDevelopment()
    {
        return $this->belongsTo(MVPDevelopment::class);
    }
}
