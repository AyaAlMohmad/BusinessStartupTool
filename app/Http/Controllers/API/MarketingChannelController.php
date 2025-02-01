<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MarketingChannel;
use Illuminate\Http\Request;

class MarketingChannelController extends Controller
{
    public function index($marketingId)
    {
        return MarketingChannel::where('marketing_id', $marketingId)->get();
    }

    public function store(Request $request, $marketingId)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'strategy' => 'required|string',
            'budget' => 'required|numeric',
            'expected_roi' => 'required|string',
        ]);

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
            'name' => 'sometimes|required|string',
            'strategy' => 'sometimes|required|string',
            'budget' => 'sometimes|required|numeric',
            'expected_roi' => 'sometimes|required|string',
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
