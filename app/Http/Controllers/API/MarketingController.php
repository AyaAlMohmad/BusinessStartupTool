<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Marketing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MarketingController extends Controller
{
    public function index()
    {
        return Marketing::with(['marketingChannels', 'contentStrategies', 'brandIdentity'])->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'audience_description' => 'required|array',
            'problem_statement' => 'required|array',
            'solution_overview' => 'required|array',
            'marketing_channels' => 'nullable|array',
            'marketing_channels.*.name' => 'required|array',
            'marketing_channels.*.strategy' => 'required|array',
            'marketing_channels.*.budget' => 'required|numeric',
            'marketing_channels.*.expected_roi' => 'required|array',
            'content_strategies' => 'nullable|array',
            'content_strategies.*.type' => 'required|array',
            'content_strategies.*.description' => 'required|array',
            'content_strategies.*.frequency' => 'required|array',
            'content_strategies.*.responsible_person' => 'required|array',
            'brand_identity' => 'nullable|array',
            'brand_identity.values' => 'nullable|array',
            'brand_identity.mission' => 'required|array',
            'brand_identity.vision' => 'required|array',
            'brand_identity.tone' => 'required|array',
            'brand_identity.visual_style' => 'required|array',
        ]);

        // إضافة user_id للمستخدم الحالي
        $validatedData['user_id'] = Auth::id();

        // إنشاء Marketing
        $marketing = Marketing::create([
            'user_id' => $validatedData['user_id'],
            'audience_description' => $validatedData['audience_description'],
            'problem_statement' => $validatedData['problem_statement'],
            'solution_overview' => $validatedData['solution_overview'],
        ]);

        // إنشاء MarketingChannels
        if (isset($validatedData['marketing_channels'])) {
            foreach ($validatedData['marketing_channels'] as $channel) {
                $channel['user_id'] = $validatedData['user_id'];
                $marketing->marketingChannels()->create($channel);
            }
        }

        // إنشاء ContentStrategies
        if (isset($validatedData['content_strategies'])) {
            foreach ($validatedData['content_strategies'] as $strategy) {
                $strategy['user_id'] = $validatedData['user_id'];
                $marketing->contentStrategies()->create($strategy);
            }
        }

        // إنشاء BrandIdentity
        if (isset($validatedData['brand_identity'])) {
            $validatedData['brand_identity']['user_id'] = $validatedData['user_id'];
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
            'audience_description' => 'sometimes|required|array',
            'problem_statement' => 'sometimes|required|array',
            'solution_overview' => 'sometimes|required|array',
            'marketing_channels' => 'nullable|array',
            'marketing_channels.*.name' => 'sometimes|required|array',
            'marketing_channels.*.strategy' => 'sometimes|required|array',
            'marketing_channels.*.budget' => 'sometimes|required|numeric',
            'marketing_channels.*.expected_roi' => 'sometimes|required|array',
            'content_strategies' => 'nullable|array',
            'content_strategies.*.type' => 'sometimes|required|array',
            'content_strategies.*.description' => 'sometimes|required|array',
            'content_strategies.*.frequency' => 'sometimes|required|array',
            'content_strategies.*.responsible_person' => 'sometimes|required|array',
            'brand_identity' => 'nullable|array',
            'brand_identity.values' => 'nullable|array',
            'brand_identity.mission' => 'sometimes|required|array',
            'brand_identity.vision' => 'sometimes|required|array',
            'brand_identity.tone' => 'sometimes|required|array',
            'brand_identity.visual_style' => 'sometimes|required|array',
        ]);

        // تحديث Marketing
        $marketing->update([
            'audience_description' => $validatedData['audience_description'] ?? $marketing->audience_description,
            'problem_statement' => $validatedData['problem_statement'] ?? $marketing->problem_statement,
            'solution_overview' => $validatedData['solution_overview'] ?? $marketing->solution_overview,
        ]);

        // تحديث أو إنشاء MarketingChannels
        if (isset($validatedData['marketing_channels'])) {
            $marketing->marketingChannels()->delete();
            foreach ($validatedData['marketing_channels'] as $channel) {
                $channel['user_id'] = $marketing->user_id;
                $marketing->marketingChannels()->create($channel);
            }
        }

        // تحديث أو إنشاء ContentStrategies
        if (isset($validatedData['content_strategies'])) {
            $marketing->contentStrategies()->delete();
            foreach ($validatedData['content_strategies'] as $strategy) {
                $strategy['user_id'] = $marketing->user_id;
                $marketing->contentStrategies()->create($strategy);
            }
        }

        // تحديث أو إنشاء BrandIdentity
        if (isset($validatedData['brand_identity'])) {
            $validatedData['brand_identity']['user_id'] = $marketing->user_id;
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