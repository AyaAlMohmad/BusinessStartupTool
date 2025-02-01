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
    ];

    public function marketing()
    {
        return $this->belongsTo(Marketing::class);
    }
}
