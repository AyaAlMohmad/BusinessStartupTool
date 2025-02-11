<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SalesStrategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SalesStrategyController extends Controller
{
    public function index()
    {
        return SalesStrategy::with(['salesChannels', 'pricingTiers', 'salesProcesses', 'salesTeams'])->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'sales_channels' => 'nullable|array',
            'sales_channels.*.name' => 'required|array',
            'sales_channels.*.description' => 'required|array',
            'sales_channels.*.target_revenue' => 'required|numeric',
            'sales_channels.*.commission_structure' => 'required|array',
            'pricing_tiers' => 'nullable|array',
            'pricing_tiers.*.name' => 'required|array',
            'pricing_tiers.*.price' => 'required|numeric',
            'pricing_tiers.*.features' => 'nullable|array',
            'pricing_tiers.*.target_customer' => 'required|array',
            'sales_processes' => 'nullable|array',
            'sales_processes.*.stage' => 'required|array',
            'sales_processes.*.activities' => 'required|array',
            'sales_processes.*.duration' => 'required|string',
            'sales_processes.*.responsible_person' => 'required|array',
            'sales_teams' => 'nullable|array',
            'sales_teams.*.role' => 'required|array',
            'sales_teams.*.responsibilities' => 'required|array',
            'sales_teams.*.required_skills' => 'required|array',
            'sales_teams.*.target_metrics' => 'required|array',
        ]);

        $salesStrategy = SalesStrategy::create([
            'user_id' => Auth::id(),
        ]);

        if (isset($validatedData['sales_channels'])) {
            foreach ($validatedData['sales_channels'] as $channel) {
                $channel['user_id'] = Auth::id();
                $salesStrategy->salesChannels()->create($channel);
            }
        }

        if (isset($validatedData['pricing_tiers'])) {
            foreach ($validatedData['pricing_tiers'] as $tier) {
                $tier['user_id'] = Auth::id();
                $salesStrategy->pricingTiers()->create($tier);
            }
        }

        if (isset($validatedData['sales_processes'])) {
            foreach ($validatedData['sales_processes'] as $process) {
                $process['user_id'] = Auth::id();
                $salesStrategy->salesProcesses()->create($process);
            }
        }

        if (isset($validatedData['sales_teams'])) {
            foreach ($validatedData['sales_teams'] as $team) {
                $team['user_id'] = Auth::id();
                $salesStrategy->salesTeams()->create($team);
            }
        }

        return response()->json([
            'message' => 'Sales strategy created successfully',
            'data' => $salesStrategy->load(['salesChannels', 'pricingTiers', 'salesProcesses', 'salesTeams'])
        ], 201);
    }

    public function show($id)
    {
        return SalesStrategy::with(['salesChannels', 'pricingTiers', 'salesProcesses', 'salesTeams'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $salesStrategy = SalesStrategy::findOrFail($id);

        $validatedData = $request->validate([
            'sales_channels' => 'nullable|array',
            'sales_channels.*.name' => 'sometimes|required|array',
            'sales_channels.*.description' => 'sometimes|required|array',
            'sales_channels.*.target_revenue' => 'sometimes|required|numeric',
            'sales_channels.*.commission_structure' => 'sometimes|required|array',
            'pricing_tiers' => 'nullable|array',
            'pricing_tiers.*.name' => 'sometimes|required|array',
            'pricing_tiers.*.price' => 'sometimes|required|numeric',
            'pricing_tiers.*.features' => 'nullable|array',
            'pricing_tiers.*.target_customer' => 'sometimes|required|array',
            'sales_processes' => 'nullable|array',
            'sales_processes.*.stage' => 'sometimes|required|array',
            'sales_processes.*.activities' => 'sometimes|required|array',
            'sales_processes.*.duration' => 'sometimes|required|string',
            'sales_processes.*.responsible_person' => 'sometimes|required|array',
            'sales_teams' => 'nullable|array',
            'sales_teams.*.role' => 'sometimes|required|array',
            'sales_teams.*.responsibilities' => 'sometimes|required|array',
            'sales_teams.*.required_skills' => 'sometimes|required|array',
            'sales_teams.*.target_metrics' => 'sometimes|required|array',
        ]);

        if (isset($validatedData['sales_channels'])) {
            $salesStrategy->salesChannels()->delete();
            foreach ($validatedData['sales_channels'] as $channel) {
                $channel['user_id'] = Auth::id();
                $salesStrategy->salesChannels()->create($channel);
            }
        }

        if (isset($validatedData['pricing_tiers'])) {
            $salesStrategy->pricingTiers()->delete();
            foreach ($validatedData['pricing_tiers'] as $tier) {
                $tier['user_id'] = Auth::id();
                $salesStrategy->pricingTiers()->create($tier);
            }
        }
     
        if (isset($validatedData['sales_processes'])) {
            $salesStrategy->salesProcesses()->delete();
            foreach ($validatedData['sales_processes'] as $process) {
                $process['user_id'] = Auth::id();
                $salesStrategy->salesProcesses()->create($process);
            }
        }

        if (isset($validatedData['sales_teams'])) {
            $salesStrategy->salesTeams()->delete();
            foreach ($validatedData['sales_teams'] as $team) {
                $team['user_id'] = Auth::id();
                $salesStrategy->salesTeams()->create($team);
            }
        }

        return response()->json([
            'message' => 'Sales strategy updated successfully',
            'data' => $salesStrategy->load(['salesChannels', 'pricingTiers', 'salesProcesses', 'salesTeams'])
        ], 200);
    }

    public function destroy($id)
    {
        SalesStrategy::destroy($id);
        return response()->json(['message' => 'Sales strategy deleted successfully'], 204);
    }
}
