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
        'user_id',
    ];

    protected $casts = [
        'milestones' => 'array', 
    ];

    
    public function mvpDevelopment()
    {
        return $this->belongsTo(MvpDevelopment::class);
    }

   
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
