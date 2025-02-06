<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentStrategy extends Model
{
    use HasFactory;
    protected $fillable = [
        'marketing_id',
        'type',
        'description',
        'frequency',
        'responsible_person',
        'user_id',
    ];

    protected $casts = [
        'type' => 'array',
        'description' => 'array',
        'frequency' => 'array', 
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
