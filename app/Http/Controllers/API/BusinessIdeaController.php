<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BusinessIdea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BusinessIdeaController extends Controller
{
    public function index()
    {
        return response()->json(BusinessIdea::all(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'skills_experience' => 'required|array',
            'passions_interests' => 'required|array',
            'values_goals' => 'required|array',
            'business_ideas' => 'required|array',
        ]);
        $data['user_id'] = Auth::id();
        $businessIdea = BusinessIdea::create($data);
        return response()->json($businessIdea, 201);
    }
}