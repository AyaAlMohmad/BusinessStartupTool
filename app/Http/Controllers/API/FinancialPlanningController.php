<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\FinancialPlanning;
use App\Models\FundingSource;
use App\Models\RevenueProjection;
use App\Models\ExpenseProjection;
use App\Models\StartupCost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FinancialPlanningController extends Controller
{
    // Store Financial Planning Data
    public function store(Request $request)
    {
        $data = $request->validate([
            'startup_costs' => 'required|array',
            'funding_sources' => 'required|array',
            'revenue_projections' => 'required|array',
            'expense_projections' => 'required|array',
            'breakeven_analysis' => 'required|array',
            'cash_flow_projections' => 'required|array',
        ]);
        $data['user_id'] = Auth::id();
        // Create a new FinancialPlanning record
        $financialPlanning = FinancialPlanning::create($data);

        // Save the related models
        foreach ($data['startup_costs'] as $cost) {
            $cost['user_id'] = $data['user_id'];
            $financialPlanning->startupCosts()->create($cost);
        }

        foreach ($data['funding_sources'] as $source) {
            $source['user_id'] = $data['user_id'];
            $financialPlanning->fundingSources()->create($source);
        }

        foreach ($data['revenue_projections'] as $projection) {
            $projection['user_id'] = $data['user_id'];
            $financialPlanning->revenueProjections()->create($projection);
        }

        foreach ($data['expense_projections'] as $projection) {
            $projection['user_id'] = $data['user_id'];
            $financialPlanning->expenseProjections()->create($projection);
        }

        return response()->json($financialPlanning, 201);
    }

    // Get Financial Planning Data
    public function index()
    {
        $financialPlanning = FinancialPlanning::with([
            'startupCosts',
            'fundingSources',
            'revenueProjections',
            'expenseProjections'
        ])->get();

        return response()->json($financialPlanning, 200);
    }

    // Get a specific Financial Planning Data by ID
    public function show($id)
    {
        $financialPlanning = FinancialPlanning::with([
            'startupCosts',
            'fundingSources',
            'revenueProjections',
            'expenseProjections'
        ])->findOrFail($id);

        return response()->json($financialPlanning, 200);
    }
}
