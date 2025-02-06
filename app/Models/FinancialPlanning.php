<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class FinancialPlanning extends Model
{
      protected $fillable = [
        'business_setup_id',
        'user_id',
        'startup_costs',
        'funding_sources',
        'revenue_projections',
        'expense_projections',
        'breakeven_analysis',
        'cash_flow_projections',
    ];

    protected $casts = [
        'startup_costs' => 'array',
        'funding_sources' => 'array',
        'revenue_projections' => 'array',
        'expense_projections' => 'array',
        'breakeven_analysis' => 'array',
        'cash_flow_projections' => 'array',
    ];

    /**
     * العلاقة مع BusinessSetup.
     */
    public function businessSetup(): BelongsTo
    {
        return $this->belongsTo(BusinessSetup::class);
    }
    public function startupCosts()
    {
        return $this->hasMany(StartupCost::class);
    }

    public function fundingSources()
    {
        return $this->hasMany(FundingSource::class);
    }

    public function revenueProjections()
    {
        return $this->hasMany(RevenueProjection::class);
    }

    public function expenseProjections()
    {
        return $this->hasMany(ExpenseProjection::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
