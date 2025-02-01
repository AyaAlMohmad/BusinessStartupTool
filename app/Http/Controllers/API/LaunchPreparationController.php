<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\LaunchPreparation;
use Illuminate\Http\Request;

class LaunchPreparationController extends Controller
{ public function index()
    {
        return LaunchPreparation::with(['launchChecklists', 'marketingActivities', 'riskAssessments', 'launchMilestones'])->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'launch_checklists' => 'nullable|array',
            'launch_checklists.*.category' => 'required|string',
            'launch_checklists.*.task' => 'required|string',
            'launch_checklists.*.due_date' => 'required|date',
            'launch_checklists.*.status' => 'required|string',
            'launch_checklists.*.assignee' => 'required|string',
            'launch_checklists.*.notes' => 'nullable|string',
            'marketing_activities' => 'nullable|array',
            'marketing_activities.*.activity' => 'required|string',
            'marketing_activities.*.timeline' => 'required|string',
            'marketing_activities.*.budget' => 'required|numeric',
            'marketing_activities.*.status' => 'required|string',
            'marketing_activities.*.metrics' => 'nullable|array',
            'risk_assessments' => 'nullable|array',
            'risk_assessments.*.description' => 'required|string',
            'risk_assessments.*.impact' => 'required|string',
            'risk_assessments.*.probability' => 'required|string',
            'risk_assessments.*.mitigation_strategies' => 'nullable|array',
            'risk_assessments.*.contingency_plan' => 'nullable|string',
            'launch_milestones' => 'nullable|array',
            'launch_milestones.*.description' => 'required|string',
            'launch_milestones.*.due_date' => 'required|date',
            'launch_milestones.*.status' => 'required|string',
            'launch_milestones.*.dependencies' => 'nullable|array',
        ]);

        $launchPreparation = LaunchPreparation::create();

        if (isset($validatedData['launch_checklists'])) {
            foreach ($validatedData['launch_checklists'] as $checklist) {
                $launchPreparation->launchChecklists()->create($checklist);
            }
        }

        if (isset($validatedData['marketing_activities'])) {
            foreach ($validatedData['marketing_activities'] as $activity) {
                $launchPreparation->marketingActivities()->create($activity);
            }
        }

        if (isset($validatedData['risk_assessments'])) {
            foreach ($validatedData['risk_assessments'] as $risk) {
                $launchPreparation->riskAssessments()->create($risk);
            }
        }

        if (isset($validatedData['launch_milestones'])) {
            foreach ($validatedData['launch_milestones'] as $milestone) {
                $launchPreparation->launchMilestones()->create($milestone);
            }
        }

        return response()->json([
            'message' => 'Launch preparation created successfully',
            'data' => $launchPreparation->load(['launchChecklists', 'marketingActivities', 'riskAssessments', 'launchMilestones'])
        ], 201);
    }

    public function show($id)
    {
        $launchPreparation = LaunchPreparation::with(['launchChecklists', 'marketingActivities', 'riskAssessments', 'launchMilestones'])->findOrFail($id);
        return response()->json($launchPreparation, 200);
    }

    public function update(Request $request, $id)
    {
        $launchPreparation = LaunchPreparation::findOrFail($id);

        $validatedData = $request->validate([
            'launch_checklists' => 'nullable|array',
            'launch_checklists.*.category' => 'sometimes|required|string',
            'launch_checklists.*.task' => 'sometimes|required|string',
            'launch_checklists.*.due_date' => 'sometimes|required|date',
            'launch_checklists.*.status' => 'sometimes|required|string',
            'launch_checklists.*.assignee' => 'sometimes|required|string',
            'launch_checklists.*.notes' => 'nullable|string',
            'marketing_activities' => 'nullable|array',
            'marketing_activities.*.activity' => 'sometimes|required|string',
            'marketing_activities.*.timeline' => 'sometimes|required|string',
            'marketing_activities.*.budget' => 'sometimes|required|numeric',
            'marketing_activities.*.status' => 'sometimes|required|string',
            'marketing_activities.*.metrics' => 'nullable|array',
            'risk_assessments' => 'nullable|array',
            'risk_assessments.*.description' => 'sometimes|required|string',
            'risk_assessments.*.impact' => 'sometimes|required|string',
            'risk_assessments.*.probability' => 'sometimes|required|string',
            'risk_assessments.*.mitigation_strategies' => 'nullable|array',
            'risk_assessments.*.contingency_plan' => 'nullable|string',
            'launch_milestones' => 'nullable|array',
            'launch_milestones.*.description' => 'sometimes|required|string',
            'launch_milestones.*.due_date' => 'sometimes|required|date',
            'launch_milestones.*.status' => 'sometimes|required|string',
            'launch_milestones.*.dependencies' => 'nullable|array',
        ]);

        if (isset($validatedData['launch_checklists'])) {
            $launchPreparation->launchChecklists()->delete();
            foreach ($validatedData['launch_checklists'] as $checklist) {
                $launchPreparation->launchChecklists()->create($checklist);
            }
        }

        if (isset($validatedData['marketing_activities'])) {
            $launchPreparation->marketingActivities()->delete();
            foreach ($validatedData['marketing_activities'] as $activity) {
                $launchPreparation->marketingActivities()->create($activity);
            }
        }

        if (isset($validatedData['risk_assessments'])) {
            $launchPreparation->riskAssessments()->delete();
            foreach ($validatedData['risk_assessments'] as $risk) {
                $launchPreparation->riskAssessments()->create($risk);
            }
        }

        if (isset($validatedData['launch_milestones'])) {
            $launchPreparation->launchMilestones()->delete();
            foreach ($validatedData['launch_milestones'] as $milestone) {
                $launchPreparation->launchMilestones()->create($milestone);
            }
        }

        return response()->json([
            'message' => 'Launch preparation updated successfully',
            'data' => $launchPreparation->load(['launchChecklists', 'marketingActivities', 'riskAssessments', 'launchMilestones'])
        ], 200);
    }

    public function destroy($id)
    {
        LaunchPreparation::destroy($id);
        return response()->json(['message' => 'Launch preparation deleted successfully'], 204);
    }
}
