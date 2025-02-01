<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVPDevelopment;
use Illuminate\Http\Request;

class MVPDevelopmentController extends Controller
{
    public function index()
    {
        return MVPDevelopment::with(['features', 'assumptions', 'timelines', 'metrics'])->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'features.must_have_features' => 'nullable|array',
            'features.should_have_features' => 'nullable|array',
            'features.nice_to_have_features' => 'nullable|array',
            'assumptions' => 'nullable|array',
            'assumptions.*.description' => 'required|string',
            'assumptions.*.test_method' => 'required|string',
            'assumptions.*.success_criteria' => 'required|string',
            'timelines' => 'nullable|array',
            'timelines.*.name' => 'required|string',
            'timelines.*.duration' => 'required|string',
            'timelines.*.milestones' => 'nullable|array',
            'metrics' => 'nullable|array',
            'metrics.*.name' => 'required|string',
            'metrics.*.target_value' => 'required|numeric',
            'metrics.*.actual_value' => 'required|numeric',
        ]);

        $mvpDevelopment = MVPDevelopment::create();

        if (isset($validatedData['features'])) {
            $mvpDevelopment->features()->create($validatedData['features']);
        }

        if (isset($validatedData['assumptions'])) {
            foreach ($validatedData['assumptions'] as $assumption) {
                $mvpDevelopment->assumptions()->create($assumption);
            }
        }

        if (isset($validatedData['timelines'])) {
            foreach ($validatedData['timelines'] as $timeline) {
                $mvpDevelopment->timelines()->create($timeline);
            }
        }

        if (isset($validatedData['metrics'])) {
            foreach ($validatedData['metrics'] as $metric) {
                $mvpDevelopment->metrics()->create($metric);
            }
        }

        return response()->json(['message' => 'MVP Development created successfully', 'data' => $mvpDevelopment->load(['features', 'assumptions', 'timelines', 'metrics'])], 201);
    }

    public function show($id)
    {
        return MVPDevelopment::with(['features', 'assumptions', 'timelines', 'metrics'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $mvpDevelopment = MVPDevelopment::findOrFail($id);

        $validatedData = $request->validate([
            'features.must_have_features' => 'nullable|array',
            'features.should_have_features' => 'nullable|array',
            'features.nice_to_have_features' => 'nullable|array',
            'assumptions' => 'nullable|array',
            'assumptions.*.description' => 'sometimes|required|string',
            'assumptions.*.test_method' => 'sometimes|required|string',
            'assumptions.*.success_criteria' => 'sometimes|required|string',
            'timelines' => 'nullable|array',
            'timelines.*.name' => 'sometimes|required|string',
            'timelines.*.duration' => 'sometimes|required|string',
            'timelines.*.milestones' => 'nullable|array',
            'metrics' => 'nullable|array',
            'metrics.*.name' => 'sometimes|required|string',
            'metrics.*.target_value' => 'sometimes|required|numeric',
            'metrics.*.actual_value' => 'sometimes|required|numeric',
        ]);

        if (isset($validatedData['features'])) {
            $mvpDevelopment->features()->updateOrCreate([], $validatedData['features']);
        }

        if (isset($validatedData['assumptions'])) {
            $mvpDevelopment->assumptions()->delete();
            foreach ($validatedData['assumptions'] as $assumption) {
                $mvpDevelopment->assumptions()->create($assumption);
            }
        }

        if (isset($validatedData['timelines'])) {
            $mvpDevelopment->timelines()->delete();
            foreach ($validatedData['timelines'] as $timeline) {
                $mvpDevelopment->timelines()->create($timeline);
            }
        }

        if (isset($validatedData['metrics'])) {
            $mvpDevelopment->metrics()->delete();
            foreach ($validatedData['metrics'] as $metric) {
                $mvpDevelopment->metrics()->create($metric);
            }
        }

        return response()->json([
            'message' => 'MVP development updated successfully',
            'data' => $mvpDevelopment->load(['features', 'assumptions', 'timelines', 'metrics'])
        ], 200);
    }

    public function destroy($id)
    {
        MVPDevelopment::destroy($id);
        return response()->json(['message' => 'MVP development deleted successfully'], 204);
    }
}
