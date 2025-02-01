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
    ];

    protected $casts = [
        'values' => 'array',
    ];

    public function marketing()
    {
        return $this->belongsTo(Marketing::class);
    }
}
