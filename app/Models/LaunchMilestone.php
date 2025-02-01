<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaunchMilestone extends Model
{
    protected $fillable = [
        'launch_preparation_id',
        'description',
        'due_date',
        'status',
        'dependencies',
    ];

    protected $casts = [
        'dependencies' => 'array',
    ];

    public function launchPreparation()
    {
        return $this->belongsTo(LaunchPreparation::class);
    }
}
