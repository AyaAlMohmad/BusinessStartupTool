<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SalesStrategy;
use Illuminate\Http\Request;

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
            'sales_channels.*.name' => 'required|string',
            'sales_channels.*.description' => 'required|string',
            'sales_channels.*.target_revenue' => 'required|numeric',
            'sales_channels.*.commission_structure' => 'required|string',
            'pricing_tiers' => 'nullable|array',
            'pricing_tiers.*.name' => 'required|string',
            'pricing_tiers.*.price' => 'required|numeric',
            'pricing_tiers.*.features' => 'nullable|array',
            'pricing_tiers.*.target_customer' => 'required|string',
            'sales_processes' => 'nullable|array',
            'sales_processes.*.stage' => 'required|string',
            'sales_processes.*.activities' => 'required|string',
            'sales_processes.*.duration' => 'required|string',
            'sales_processes.*.responsible_person' => 'required|string',
            'sales_teams' => 'nullable|array',
            'sales_teams.*.role' => 'required|string',
            'sales_teams.*.responsibilities' => 'required|string',
            'sales_teams.*.required_skills' => 'required|string',
            'sales_teams.*.target_metrics' => 'required|string',
        ]);

        $salesStrategy = SalesStrategy::create();

        if (isset($validatedData['sales_channels'])) {
            foreach ($validatedData['sales_channels'] as $channel) {
                $salesStrategy->salesChannels()->create($channel);
            }
        }

        if (isset($validatedData['pricing_tiers'])) {
            foreach ($validatedData['pricing_tiers'] as $tier) {
                $salesStrategy->pricingTiers()->create($tier);
            }
        }

        if (isset($validatedData['sales_processes'])) {
            foreach ($validatedData['sales_processes'] as $process) {
                $salesStrategy->salesProcesses()->create($process);
            }
        }

        if (isset($validatedData['sales_teams'])) {
            foreach ($validatedData['sales_teams'] as $team) {
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
            'sales_channels.*.name' => 'sometimes|required|string',
            'sales_channels.*.description' => 'sometimes|required|string',
            'sales_channels.*.target_revenue' => 'sometimes|required|numeric',
            'sales_channels.*.commission_structure' => 'sometimes|required|string',
            'pricing_tiers' => 'nullable|array',
            'pricing_tiers.*.name' => 'sometimes|required|string',
            'pricing_tiers.*.price' => 'sometimes|required|numeric',
            'pricing_tiers.*.features' => 'nullable|array',
            'pricing_tiers.*.target_customer' => 'sometimes|required|string',
            'sales_processes' => 'nullable|array',
            'sales_processes.*.stage' => 'sometimes|required|string',
            'sales_processes.*.activities' => 'sometimes|required|string',
            'sales_processes.*.duration' => 'sometimes|required|string',
            'sales_processes.*.responsible_person' => 'sometimes|required|string',
            'sales_teams' => 'nullable|array',
            'sales_teams.*.role' => 'sometimes|required|string',
            'sales_teams.*.responsibilities' => 'sometimes|required|string',
            'sales_teams.*.required_skills' => 'sometimes|required|string',
            'sales_teams.*.target_metrics' => 'sometimes|required|string',
        ]);

        if (isset($validatedData['sales_channels'])) {
            $salesStrategy->salesChannels()->delete();
            foreach ($validatedData['sales_channels'] as $channel) {
                $salesStrategy->salesChannels()->create($channel);
            }
        }

        if (isset($validatedData['pricing_tiers'])) {
            $salesStrategy->pricingTiers()->delete();
            foreach ($validatedData['pricing_tiers'] as $tier) {
                $salesStrategy->pricingTiers()->create($tier);
            }
        }

        if (isset($validatedData['sales_processes'])) {
            $salesStrategy->salesProcesses()->delete();
            foreach ($validatedData['sales_processes'] as $process) {
                $salesStrategy->salesProcesses()->create($process);
            }
        }

        if (isset($validatedData['sales_teams'])) {
            $salesStrategy->salesTeams()->delete();
            foreach ($validatedData['sales_teams'] as $team) {
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
