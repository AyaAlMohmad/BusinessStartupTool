<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandIdentity extends Model
{
    use HasFactory;
    protected $fillable = [
        'marketing_id',
        'values',
        'mission',
        'vision',
        'tone',
        'visual_style',
        'user_id',
    ];

    protected $casts = [
        'values' => 'array',
        'mission' => 'array', 
        'vision' => 'array', 
        'tone' => 'array', 
        'visual_style' => 'array', 
    ];

   
    public function marketing()
    {
        return $this->belongsTo(Marketing::class);
    }

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
