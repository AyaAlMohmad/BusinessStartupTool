<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaunchChecklist extends Model
{
    protected $fillable = [
        'launch_preparation_id',
        'category',
        'task',
        'due_date',
        'status',
        'assignee',
        'notes',
    ];

    public function launchPreparation()
    {
        return $this->belongsTo(LaunchPreparation::class);
    }
}
