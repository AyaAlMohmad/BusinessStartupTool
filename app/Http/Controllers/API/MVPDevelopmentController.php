<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVPDevelopment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            'assumptions.*.description' => 'required|array',
            'assumptions.*.test_method' => 'required|array',
            'assumptions.*.success_criteria' => 'required|array',
            'timelines' => 'nullable|array',
            'timelines.*.name' => 'required|string',
            'timelines.*.duration' => 'required|string',
            'timelines.*.milestones' => 'nullable|array',
            'metrics' => 'nullable|array',
            'metrics.*.name' => 'required|array',
            'metrics.*.target_value' => 'required|numeric',
            'metrics.*.actual_value' => 'required|numeric',
        ]);

        // إضافة user_id للمستخدم الحالي
        $validatedData['user_id'] = Auth::id();

        // إنشاء MVPDevelopment
        $mvpDevelopment = MVPDevelopment::create(['user_id' => $validatedData['user_id']]);

        // إنشاء Features
        if (isset($validatedData['features'])) {
            $validatedData['features']['user_id'] = $validatedData['user_id'];
            $mvpDevelopment->features()->create($validatedData['features']);
        }

        // إنشاء Assumptions
        if (isset($validatedData['assumptions'])) {
            foreach ($validatedData['assumptions'] as $assumption) {
                $assumption['user_id'] = $validatedData['user_id'];
                $mvpDevelopment->assumptions()->create($assumption);
            }
        }

        // إنشاء Timelines
        if (isset($validatedData['timelines'])) {
            foreach ($validatedData['timelines'] as $timeline) {
                $timeline['user_id'] = $validatedData['user_id'];
                $mvpDevelopment->timelines()->create($timeline);
            }
        }

        // إنشاء Metrics
        if (isset($validatedData['metrics'])) {
            foreach ($validatedData['metrics'] as $metric) {
                $metric['user_id'] = $validatedData['user_id'];
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
            'assumptions.*.description' => 'required|array',
            'assumptions.*.test_method' => 'required|array',
            'assumptions.*.success_criteria' => 'required|array',
            'timelines' => 'nullable|array',
            'timelines.*.name' => 'required|string',
            'timelines.*.duration' => 'required|string',
            'timelines.*.milestones' => 'nullable|array',
            'metrics' => 'nullable|array',
            'metrics.*.name' => 'required|array',
            'metrics.*.target_value' => 'required|numeric',
            'metrics.*.actual_value' => 'required|numeric',
        ]);

        // تحديث أو إنشاء Features
        if (isset($validatedData['features'])) {
            $validatedData['features']['user_id'] = $mvpDevelopment->user_id;
            $mvpDevelopment->features()->updateOrCreate([], $validatedData['features']);
        }

        // تحديث أو إنشاء Assumptions
        if (isset($validatedData['assumptions'])) {
            $mvpDevelopment->assumptions()->delete();
            foreach ($validatedData['assumptions'] as $assumption) {
                $assumption['user_id'] = $mvpDevelopment->user_id;
                $mvpDevelopment->assumptions()->create($assumption);
            }
        }

        // تحديث أو إنشاء Timelines
        if (isset($validatedData['timelines'])) {
            $mvpDevelopment->timelines()->delete();
            foreach ($validatedData['timelines'] as $timeline) {
                $timeline['user_id'] = $mvpDevelopment->user_id;
                $mvpDevelopment->timelines()->create($timeline);
            }
        }

        // تحديث أو إنشاء Metrics
        if (isset($validatedData['metrics'])) {
            $mvpDevelopment->metrics()->delete();
            foreach ($validatedData['metrics'] as $metric) {
                $metric['user_id'] = $mvpDevelopment->user_id;
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