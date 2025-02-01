<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Marketing;
use Illuminate\Http\Request;

class MarketingController extends Controller
{
    public function index()
    {
        return Marketing::with(['marketingChannels', 'contentStrategies', 'brandIdentity'])->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'audience_description' => 'required|string',
            'problem_statement' => 'required|string',
            'solution_overview' => 'required|string',
            'marketing_channels' => 'nullable|array',
            'marketing_channels.*.name' => 'required|string',
            'marketing_channels.*.strategy' => 'required|string',
            'marketing_channels.*.budget' => 'required|numeric',
            'marketing_channels.*.expected_roi' => 'required|string',
            'content_strategies' => 'nullable|array',
            'content_strategies.*.type' => 'required|string',
            'content_strategies.*.description' => 'required|string',
            'content_strategies.*.frequency' => 'required|string',
            'content_strategies.*.responsible_person' => 'required|string',
            'brand_identity' => 'nullable|array',
            'brand_identity.values' => 'nullable|array',
            'brand_identity.mission' => 'required|string',
            'brand_identity.vision' => 'required|string',
            'brand_identity.tone' => 'required|string',
            'brand_identity.visual_style' => 'required|string',
        ]);

        $marketing = Marketing::create([
            'audience_description' => $validatedData['audience_description'],
            'problem_statement' => $validatedData['problem_statement'],
            'solution_overview' => $validatedData['solution_overview'],
        ]);

        if (isset($validatedData['marketing_channels'])) {
            foreach ($validatedData['marketing_channels'] as $channel) {
                $marketing->marketingChannels()->create($channel);
            }
        }

        if (isset($validatedData['content_strategies'])) {
            foreach ($validatedData['content_strategies'] as $strategy) {
                $marketing->contentStrategies()->create($strategy);
            }
        }

        if (isset($validatedData['brand_identity'])) {
            $marketing->brandIdentity()->create($validatedData['brand_identity']);
        }

        return response()->json([
            'message' => 'Marketing plan created successfully',
            'data' => $marketing->load(['marketingChannels', 'contentStrategies', 'brandIdentity'])
        ], 201);
    }

    public function show($id)
    {
        return Marketing::with(['marketingChannels', 'contentStrategies', 'brandIdentity'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $marketing = Marketing::findOrFail($id);

        $validatedData = $request->validate([
            'audience_description' => 'sometimes|required|string',
            'problem_statement' => 'sometimes|required|string',
            'solution_overview' => 'sometimes|required|string',
            'marketing_channels' => 'nullable|array',
            'marketing_channels.*.name' => 'sometimes|required|string',
            'marketing_channels.*.strategy' => 'sometimes|required|string',
            'marketing_channels.*.budget' => 'sometimes|required|numeric',
            'marketing_channels.*.expected_roi' => 'sometimes|required|string',
            'content_strategies' => 'nullable|array',
            'content_strategies.*.type' => 'sometimes|required|string',
            'content_strategies.*.description' => 'sometimes|required|string',
            'content_strategies.*.frequency' => 'sometimes|required|string',
            'content_strategies.*.responsible_person' => 'sometimes|required|string',
            'brand_identity' => 'nullable|array',
            'brand_identity.values' => 'nullable|array',
            'brand_identity.mission' => 'sometimes|required|string',
            'brand_identity.vision' => 'sometimes|required|string',
            'brand_identity.tone' => 'sometimes|required|string',
            'brand_identity.visual_style' => 'sometimes|required|string',
        ]);

        $marketing->update([
            'audience_description' => $validatedData['audience_description'] ?? $marketing->audience_description,
            'problem_statement' => $validatedData['problem_statement'] ?? $marketing->problem_statement,
            'solution_overview' => $validatedData['solution_overview'] ?? $marketing->solution_overview,
        ]);

        if (isset($validatedData['marketing_channels'])) {
            $marketing->marketingChannels()->delete();
            foreach ($validatedData['marketing_channels'] as $channel) {
                $marketing->marketingChannels()->create($channel);
            }
        }

        if (isset($validatedData['content_strategies'])) {
            $marketing->contentStrategies()->delete();
            foreach ($validatedData['content_strategies'] as $strategy) {
                $marketing->contentStrategies()->create($strategy);
            }
        }

        if (isset($validatedData['brand_identity'])) {
            $marketing->brandIdentity()->updateOrCreate([], $validatedData['brand_identity']);
        }

        return response()->json([
            'message' => 'Marketing strategy updated successfully',
            'data' => $marketing->load(['marketingChannels', 'contentStrategies', 'brandIdentity'])
        ], 200);
    }

    public function destroy($id)
    {
        Marketing::destroy($id);
        return response()->json(['message' => 'Marketing strategy deleted successfully'], 204);
    }
}
