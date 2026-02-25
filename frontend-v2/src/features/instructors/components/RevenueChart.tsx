'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RevenueChart() {
  const monthlyData = [
    { month: 'Jan', revenue: 240 },
    { month: 'Feb', revenue: 380 },
    { month: 'Mar', revenue: 350 },
    { month: 'Apr', revenue: 430 },
    { month: 'May', revenue: 520 },
    { month: 'Jun', revenue: 680 },
  ];

  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

  return (
    <Card className="border border-gray-200">
      <CardHeader>
        <CardTitle>Revenue Over Last 6 Months</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-flex-end justify-around gap-4 px-4">
          {monthlyData.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-12 bg-blue-400 rounded-t-lg" 
                   style={{ height: `${(data.revenue / maxRevenue) * 200}px` }}>
              </div>
              <span className="text-sm font-medium text-gray-600">{data.month}</span>
              <span className="text-xs text-gray-500">${data.revenue}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
