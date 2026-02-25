'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, BookOpen, Star } from 'lucide-react';

interface StatCard {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
}

export function AnalyticsCards() {
  const stats: StatCard[] = [
    {
      label: 'Total Revenue',
      value: '$1,240',
      icon: <TrendingUp className="w-6 h-6" />,
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Total Students',
      value: '342',
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-green-50',
    },
    {
      label: 'Active Courses',
      value: '8',
      icon: <BookOpen className="w-6 h-6" />,
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Average Rating',
      value: '4.7',
      icon: <Star className="w-6 h-6" />,
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border border-gray-200">
          <CardContent className={`p-6 ${stat.bgColor}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className="text-gray-600">{stat.icon}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
