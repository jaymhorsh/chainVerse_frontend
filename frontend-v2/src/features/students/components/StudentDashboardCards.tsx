'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, Trophy, Star } from 'lucide-react';

export function StudentWelcome() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-8 mb-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
        <p className="text-blue-100">
          You're doing great! Keep up the momentum and complete your in-progress courses.
        </p>
        <Button className="mt-4 bg-white text-indigo-600 hover:bg-gray-100">
          Continue Learning
        </Button>
      </div>
    </div>
  );
}

export function ProgressCards() {
  const stats = [
    {
      label: 'Courses Enrolled',
      value: '5',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Learning Hours',
      value: '32.5',
      icon: Target,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      label: 'Certificates',
      value: '2',
      icon: Trophy,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Average Rating',
      value: '4.8',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function LearningProgressChart() {
  const weekData = [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 3.5 },
    { day: 'Wed', hours: 1.5 },
    { day: 'Thu', hours: 4 },
    { day: 'Fri', hours: 2.5 },
    { day: 'Sat', hours: 5 },
    { day: 'Sun', hours: 3 },
  ];

  const maxHours = Math.max(...weekData.map((d) => d.hours));

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Weekly Learning Time</h2>
        <div className="flex items-end justify-between h-64 gap-2">
          {weekData.map((data) => (
            <div key={data.day} className="flex flex-col items-center gap-2 flex-1">
              <div className="relative w-full h-48 bg-gray-100 rounded-t-lg flex items-end justify-center">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-lg"
                  style={{ height: `${(data.hours / maxHours) * 100}%` }}
                ></div>
              </div>
              <div className="text-center text-sm font-medium text-gray-700">
                <p>{data.day}</p>
                <p className="text-xs text-gray-600">{data.hours}h</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function InProgressCourses() {
  const courses = [
    {
      id: 1,
      title: 'Advanced DeFi Smart Contracts Mastery',
      instructor: 'Sarah Johnson',
      progress: 65,
      image: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'NFT Development Guide',
      instructor: 'Mike Chen',
      progress: 42,
      image: 'bg-purple-500',
    },
    {
      id: 3,
      title: 'Web3 Full Stack Development',
      instructor: 'Lisa Wang',
      progress: 28,
      image: 'bg-green-500',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">In Progress Courses</h2>
      {courses.map((course) => (
        <Card key={course.id} className="border border-gray-200 hover:shadow-lg transition">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className={`w-24 h-24 ${course.image} rounded-lg flex-shrink-0`}></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">By {course.instructor}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
