<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MarketingChannel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MarketingChannelController extends Controller
{
    public function index($marketingId)
    {
        return MarketingChannel::where('marketing_id', $marketingId)->get();
    }

    public function store(Request $request, $marketingId)
    {
        $validatedData = $request->validate([
            'name' => 'required|array',
            'strategy' => 'required|array',
            'budget' => 'required|numeric',
            'expected_roi' => 'required|array',
        ]);

        // إضافة user_id للمستخدم الحالي
        $validatedData['user_id'] = Auth::id();
        $validatedData['marketing_id'] = $marketingId;

        $channel = MarketingChannel::create($validatedData);

        return response()->json(['message' => 'Marketing channel created successfully', 'data' => $channel], 201);
    }

    public function show($id)
    {
        return MarketingChannel::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $channel = MarketingChannel::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'sometimes|required|array',
            'strategy' => 'sometimes|required|array',
            'budget' => 'sometimes|required|numeric',
            'expected_roi' => 'sometimes|required|array',
        ]);

        $channel->update($validatedData);

        return response()->json(['message' => 'Marketing channel updated successfully', 'data' => $channel], 200);
    }

    public function destroy($id)
    {
        MarketingChannel::destroy($id);

        return response()->json(['message' => 'Marketing channel deleted successfully'], 204);
    }
}