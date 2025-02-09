<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BusinessSetup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BusinessSetupController extends Controller
{
    public function index()
    {
        return response()->json(BusinessSetup::with(['licenses', 'locations', 'insurances'])->get(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'legal_structure.business_type' => 'required|array',
            'legal_structure.requirements' => 'required|array',
            'legal_structure.timeline' => 'required|array',
            'legal_structure.setup_costs' => 'required|numeric',
            'licenses_and_permits' => 'nullable|array',
            'licenses_and_permits.*.name' => 'required|array',
            'licenses_and_permits.*.requirements' => 'required|array',
            'licenses_and_permits.*.status' => 'required|array',
            'licenses_and_permits.*.deadline' => 'required|date',
            'locations' => 'nullable|array',
            'locations.*.type' => 'required|array',
            'locations.*.address' => 'required|array',
            'locations.*.size' => 'required|numeric',
            'locations.*.monthly_cost' => 'required|numeric',
            'insurance' => 'nullable|array',
            'insurance.*.type' => 'required|array',
            'insurance.*.provider' => 'required|array',
            'insurance.*.coverage' => 'required|array',
            'insurance.*.annual_cost' => 'required|numeric',
        ]);

      
        $data['user_id'] = Auth::id();

       
        $businessSetup = BusinessSetup::create([
            'user_id' => $data['user_id'],
            'business_type' => $data['legal_structure']['business_type'],
            'requirements' => $data['legal_structure']['requirements'],
            'timeline' => $data['legal_structure']['timeline'],
            'setup_costs' => $data['legal_structure']['setup_costs'],
        ]);

       
        if (isset($data['licenses_and_permits'])) {
            foreach ($data['licenses_and_permits'] as $licenseData) {
                $licenseData['user_id'] = $data['user_id'];
                $businessSetup->licenses()->create($licenseData);
            }
        }

        if (isset($data['locations'])) {
            foreach ($data['locations'] as $locationData) {
                $locationData['user_id'] = $data['user_id'];
                $businessSetup->locations()->create($locationData);
            }
        }

        
        if (isset($data['insurance'])) {
            foreach ($data['insurance'] as $insuranceData) {
                $insuranceData['user_id'] = $data['user_id'];
                $businessSetup->insurances()->create($insuranceData);
            }
        }

        return response()->json($businessSetup->load(['licenses', 'locations', 'insurances']), 201);
    }

    public function show($id)
    {
        $businessSetup = BusinessSetup::with(['licenses', 'locations', 'insurances'])->findOrFail($id);
        return response()->json($businessSetup, 200);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'legal_structure.business_type' => 'sometimes|required|array',
            'legal_structure.requirements' => 'sometimes|required|array',
            'legal_structure.timeline' => 'sometimes|required|array',
            'legal_structure.setup_costs' => 'sometimes|required|numeric',
            'licenses_and_permits' => 'nullable|array',
            'licenses_and_permits.*.name' => 'sometimes|required|array',
            'licenses_and_permits.*.requirements' => 'sometimes|required|array',
            'licenses_and_permits.*.status' => 'sometimes|required|array',
            'licenses_and_permits.*.deadline' => 'sometimes|required|date',
            'locations' => 'nullable|array',
            'locations.*.type' => 'sometimes|required|array',
            'locations.*.address' => 'sometimes|required|array',
            'locations.*.size' => 'sometimes|required|numeric',
            'locations.*.monthly_cost' => 'sometimes|required|numeric',
            'insurance' => 'nullable|array',
            'insurance.*.type' => 'sometimes|required|array',
            'insurance.*.provider' => 'sometimes|required|array',
            'insurance.*.coverage' => 'sometimes|required|array',
            'insurance.*.annual_cost' => 'sometimes|required|numeric',
        ]);

        $businessSetup = BusinessSetup::findOrFail($id);

       
        $businessSetup->update([
            'business_type' => $data['legal_structure']['business_type'] ?? $businessSetup->business_type,
            'requirements' => $data['legal_structure']['requirements'] ?? $businessSetup->requirements,
            'timeline' => $data['legal_structure']['timeline'] ?? $businessSetup->timeline,
            'setup_costs' => $data['legal_structure']['setup_costs'] ?? $businessSetup->setup_costs,
        ]);

        
        if (isset($data['licenses_and_permits'])) {
            $businessSetup->licenses()->delete();
            foreach ($data['licenses_and_permits'] as $licenseData) {
                $licenseData['user_id'] = $businessSetup->user_id;
                $businessSetup->licenses()->create($licenseData);
            }
        }

       
        if (isset($data['locations'])) {
            $businessSetup->locations()->delete();
            foreach ($data['locations'] as $locationData) {
                $locationData['user_id'] = $businessSetup->user_id;
                $businessSetup->locations()->create($locationData);
            }
        }

       
        if (isset($data['insurance'])) {
            $businessSetup->insurances()->delete();
            foreach ($data['insurance'] as $insuranceData) {
                $insuranceData['user_id'] = $businessSetup->user_id;
                $businessSetup->insurances()->create($insuranceData);
            }
        }

        return response()->json($businessSetup->load(['licenses', 'locations', 'insurances']), 200);
    }

    public function destroy($id)
    {
        $businessSetup = BusinessSetup::findOrFail($id);
        $businessSetup->delete();
        return response()->json(null, 204);
    }
}