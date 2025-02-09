<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MarketResearch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MarketResearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return MarketResearch::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'target_customer_name' => 'required|array',
            'age' => 'nullable|integer',
            'income' => 'nullable|numeric',
            'education' => 'nullable|array',
            'must_have_solutions' => 'nullable|array',
            'should_have_solutions' => 'nullable|array',
            'nice_to_have_solutions' => 'nullable|array',
        ]);

        // إضافة user_id للمستخدم الحالي
        $validatedData['user_id'] = Auth::id();

        $marketResearch = MarketResearch::create($validatedData);

        return response()->json(['message' => 'Market research created successfully', 'data' => $marketResearch], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return MarketResearch::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $marketResearch = MarketResearch::findOrFail($id);

        $validatedData = $request->validate([
            'target_customer_name' => 'sometimes|required|array',
            'age' => 'nullable|integer',
            'income' => 'nullable|numeric',
            'education' => 'nullable|array',
            'must_have_solutions' => 'nullable|array',
            'should_have_solutions' => 'nullable|array',
            'nice_to_have_solutions' => 'nullable|array',
        ]);

        $marketResearch->update($validatedData);

        return response()->json(['message' => 'Market research updated successfully', 'data' => $marketResearch], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        MarketResearch::destroy($id);

        return response()->json(['message' => 'Market research deleted successfully'], 204);
    }
}