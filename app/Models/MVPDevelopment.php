<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MVPDevelopment extends Model
{
    protected $table = 'mvp_developments';

    public function features()
    {
        return $this->hasOne(Feature::class,'mvp_development_id');
    }

    public function assumptions()
    {
        return $this->hasMany(Assumption::class,'mvp_development_id');
    }

    public function timelines()
    {
        return $this->hasMany(Timeline::class,'mvp_development_id');
    }

    public function metrics()
    {
        return $this->hasMany(Metric::class,'mvp_development_id');
    }
}
