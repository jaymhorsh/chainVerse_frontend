'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2 } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  students: number;
  revenue: string;
  status: 'active' | 'draft';
}

export function CourseTable() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Blockchain',
      students: 145,
      revenue: '$2,150',
      status: 'active',
    },
    {
      id: 2,
      title: 'Smart Contracts Mastery',
      students: 89,
      revenue: '$1,780',
      status: 'active',
    },
    {
      id: 3,
      title: 'DeFi Protocols Deep Dive',
      students: 64,
      revenue: '$1,280',
      status: 'active',
    },
    {
      id: 4,
      title: 'Web3 Development Bootcamp',
      students: 42,
      revenue: '$840',
      status: 'draft',
    },
    {
      id: 5,
      title: 'NFT Creation Guide',
      students: 2,
      revenue: '$40',
      status: 'draft',
    },
  ];

  return (
    <Card className="border border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your Courses</CardTitle>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + Create New Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Course Title
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Students
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Revenue
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900">{course.title}</td>
                  <td className="py-3 px-4 text-gray-600">{course.students}</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">{course.revenue}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        course.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {course.status === 'active' ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:bg-blue-50"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
