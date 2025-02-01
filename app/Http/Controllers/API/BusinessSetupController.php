<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BusinessSetup;
use Illuminate\Http\Request;

class BusinessSetupController extends Controller
{
    public function index()
    {
        return response()->json(BusinessSetup::with(['licenses', 'locations', 'insurances'])->get(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'legal_structure.business_type' => 'required|string',
            'legal_structure.requirements' => 'required|array',
            'legal_structure.timeline' => 'required|string',
            'legal_structure.setup_costs' => 'required|numeric',
            'licenses_and_permits' => 'nullable|array',
            'licenses_and_permits.*.name' => 'required|string',
            'licenses_and_permits.*.requirements' => 'required|array',
            'licenses_and_permits.*.status' => 'required|string',
            'licenses_and_permits.*.deadline' => 'required|date',
            'locations' => 'nullable|array',
            'locations.*.type' => 'required|string',
            'locations.*.address' => 'required|string',
            'locations.*.size' => 'required|numeric',
            'locations.*.monthly_cost' => 'required|numeric',
            'insurance' => 'nullable|array',
            'insurance.*.type' => 'required|string',
            'insurance.*.provider' => 'required|string',
            'insurance.*.coverage' => 'required|string',
            'insurance.*.annual_cost' => 'required|numeric',
        ]);

        // إنشاء BusinessSetup
        $businessSetup = BusinessSetup::create([
            'business_type' => $data['legal_structure']['business_type'],
            'requirements' => $data['legal_structure']['requirements'],
            'timeline' => $data['legal_structure']['timeline'],
            'setup_costs' => $data['legal_structure']['setup_costs'],
        ]);

        // إنشاء Licenses
        if (isset($data['licenses_and_permits'])) {
            foreach ($data['licenses_and_permits'] as $licenseData) {
                $businessSetup->licenses()->create($licenseData);
            }
        }

        // إنشاء Locations
        if (isset($data['locations'])) {
            foreach ($data['locations'] as $locationData) {
                $businessSetup->locations()->create($locationData);
            }
        }

        // إنشاء Insurances
        if (isset($data['insurance'])) {
            foreach ($data['insurance'] as $insuranceData) {
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
            'legal_structure.business_type' => 'sometimes|required|string',
            'legal_structure.requirements' => 'sometimes|required|array',
            'legal_structure.timeline' => 'sometimes|required|string',
            'legal_structure.setup_costs' => 'sometimes|required|numeric',
            'licenses_and_permits' => 'nullable|array',
            'licenses_and_permits.*.name' => 'sometimes|required|string',
            'licenses_and_permits.*.requirements' => 'sometimes|required|array',
            'licenses_and_permits.*.status' => 'sometimes|required|string',
            'licenses_and_permits.*.deadline' => 'sometimes|required|date',
            'locations' => 'nullable|array',
            'locations.*.type' => 'sometimes|required|string',
            'locations.*.address' => 'sometimes|required|string',
            'locations.*.size' => 'sometimes|required|numeric',
            'locations.*.monthly_cost' => 'sometimes|required|numeric',
            'insurance' => 'nullable|array',
            'insurance.*.type' => 'sometimes|required|string',
            'insurance.*.provider' => 'sometimes|required|string',
            'insurance.*.coverage' => 'sometimes|required|string',
            'insurance.*.annual_cost' => 'sometimes|required|numeric',
        ]);

        $businessSetup = BusinessSetup::findOrFail($id);

        // تحديث BusinessSetup
        $businessSetup->update([
            'business_type' => $data['legal_structure']['business_type'] ?? $businessSetup->business_type,
            'requirements' => $data['legal_structure']['requirements'] ?? $businessSetup->requirements,
            'timeline' => $data['legal_structure']['timeline'] ?? $businessSetup->timeline,
            'setup_costs' => $data['legal_structure']['setup_costs'] ?? $businessSetup->setup_costs,
        ]);

        // تحديث أو إنشاء Licenses
        if (isset($data['licenses_and_permits'])) {
            $businessSetup->licenses()->delete();
            foreach ($data['licenses_and_permits'] as $licenseData) {
                $businessSetup->licenses()->create($licenseData);
            }
        }

        // تحديث أو إنشاء Locations
        if (isset($data['locations'])) {
            $businessSetup->locations()->delete();
            foreach ($data['locations'] as $locationData) {
                $businessSetup->locations()->create($locationData);
            }
        }

        // تحديث أو إنشاء Insurances
        if (isset($data['insurance'])) {
            $businessSetup->insurances()->delete();
            foreach ($data['insurance'] as $insuranceData) {
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