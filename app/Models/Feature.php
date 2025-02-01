<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $fillable = [
        'mvp_development_id',
        'must_have_features',
        'should_have_features',
        'nice_to_have_features',
    ];

    protected $casts = [
        'must_have_features' => 'array',
        'should_have_features' => 'array',
        'nice_to_have_features' => 'array',
    ];

    public function mvpDevelopment()
    {
        return $this->belongsTo(MVPDevelopment::class,'mvp_development_id');
    }
}
