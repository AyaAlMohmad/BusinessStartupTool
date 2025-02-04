<x-app-layout>

    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .dashboard {
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .summary {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .summary-item {
            width: 22%;
            padding: 15px;
            background-color: #f9f9f9;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .details>div {
            width: 48%;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table,
        th,
        td {
            border: 1px solid #ddd;
        }

        th,
        td {
            padding: 10px;
            text-align: left;
        }

        h3 {
            margin-top: 0;
        }

        .status-item {
            width: 30%;
            text-align: center;
            background-color: #f9f9f9;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .funding-status {
            display: flex;
            justify-content: space-between;
        }

        .icon {
            margin-right: 10px;
        }

        .oval {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 25px;
            background-color: #ddd;
            font-size: 1em;
            text-align: center;

        }

        .oval-green {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 25px;
            background-color: rgb(46, 125, 50);
            font-size: 1em;
            color: white;
            text-align: center;
        }

        .oval-orange {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 25px;
            background-color: rgb(237, 108, 2);
            font-size: 1em;
            color: white;
            text-align: center;
        }
    </style>

    <div class="dashboard">
        <div class="summary">
            <div class="summary-item">
                <h3><i class="fas fa-dollar-sign icon"></i>{{  trans('messages.Total Startup Costs') }}</h3>
                <p>${{ $startupCosts->sum('amount') }}</p>
                <span>{{  trans('messages.Across all users') }}</span>
            </div>
            <div class="summary-item">
                <h3><i class="fas fa-chart-line icon"></i>{{  trans('messages.Average Startup Cost') }}</h3>
                <p>${{ $startupCosts->avg('amount') }}</p>
                <span>{{  trans('messages.Per business') }}</span>
            </div>
            <div class="summary-item">
                <h3><i class="fas fa-hand-holding-usd icon"></i>{{  trans('messages.Total Funding') }}</h3>
                <p>${{ $fundingSources->sum('amount') }}</p>
                <span>{{  trans('messages.All sources') }}</span>
            </div>
            <div class="summary-item">
                <h3><i class="fas fa-calendar-alt icon"></i>{{  trans('messages.Avg. Breakeven') }}</h3>
                <p>0 {{  trans('messages.months') }}</p>
                <span>{{  trans('messages.Expected timeline') }}</span>
            </div>
        </div>
        <div class="details">
            <div class="funding-distribution">
                <h3><i class="fas fa-piggy-bank icon"></i>{{  trans('messages.Funding Distribution') }}</h3>
                <table>
                    <tr>
                        <th>{{  trans('messages.Source') }}</th>
                        <th>{{  trans('messages.Amount') }}</th>
                        <th>%</th>
                    </tr>
                    @foreach ($fundingSources as $funding)
                    <tr>
                        <td>{{ $funding->source }}</td>
                        <td>${{ $funding->amount }}</td>
                        <td>{{ ($funding->amount / $fundingSources->sum('amount')) * 100 }}%</td>
                    </tr>
                    @endforeach
                </table>
            </div>
            <div class="cost-categories">
                <h3><i class="fas fa-coins icon"></i>{{  trans('messages.Cost Categories') }}</h3>
                <table>
                    <tr>
                        <th>{{  trans('messages.Category') }}</th>
                        <th>{{  trans('messages.Amount') }}</th>
                        <th>%</th>
                    </tr>
                    @foreach ($startupCosts as $cost)
                    <tr>
                        <td>{{ $cost->category }}</td>
                        <td>${{ $cost->amount }}</td>
                        <td>{{ ($cost->amount / $startupCosts->sum('amount')) * 100 }}%</td>
                    </tr>
                    @endforeach
                </table>
            </div>
        </div>
        <div class="funding-status">
            <h3><i class="fas fa-chart-pie icon"></i>{{  trans('messages.Funding Status Overview') }}</h3>
            <div class="status-item">
                <h4><i class="fas fa-tasks icon"></i>{{  trans('messages.Planned') }}</h4>
                <p>$0</p>
                <span class="oval">0%</span>
            </div>
            <div class="status-item">
                <h4><i class="fas fa-check-circle icon"></i>{{  trans('messages.Secured') }}</h4>
                <p>${{ $fundingSources->sum('amount') }}</p>
                <span class="oval-green">100%</span>
            </div>
            <div class="status-item">
                <h4><i class="fas fa-hourglass-half icon"></i>{{  trans('messages.Pending') }}</h4>
                <p>$0</p>
                <span class="oval-orange">0%</span>
            </div>
        </div>
    </div>

</x-app-layout>