<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FundingSource extends Model
{
    protected $fillable = ['financial_planning_id', 'source', 'type', 'amount', 'status', 'terms'];

    public function financialPlanning()
    {
        return $this->belongsTo(FinancialPlanning::class);
    }
}
