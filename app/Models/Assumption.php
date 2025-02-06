<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assumption extends Model
{
    protected $fillable = [
        'mvp_development_id',
        'description',
        'test_method',
        'success_criteria',
        'user_id',
    ];

    protected $casts = [
        'description' => 'array', 
        'test_method' => 'array', 
        'success_criteria' => 'array', 
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
