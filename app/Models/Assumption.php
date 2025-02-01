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
    ];

    public function mvpDevelopment()
    {
        return $this->belongsTo(MVPDevelopment::class);
    }
}
