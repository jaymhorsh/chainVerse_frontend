'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface CourseSection {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface CourseDetailProps {
  courseId: string;
}

const MOCK_COURSE = {
  id: '1',
  title: 'Advanced DeFi Smart Contracts Mastery',
  instructor: 'Sarah Johnson',
  rating: 4.9,
  reviews: 245,
  students: 1240,
  price: 99.99,
  level: 'Advanced',
  category: 'DeFi',
  description:
    'Master writing secure DeFi smart contracts with Solidity. Learn best practices for building decentralized finance applications.',
  longDescription: `This comprehensive course teaches you everything you need to know about building production-grade DeFi smart contracts.
  
You'll learn industry-standard patterns, security best practices, and real-world optimization techniques used by leading DeFi protocols.`,
  duration: '16 weeks',
  certificate: true,
  sections: [
    {
      id: 1,
      title: 'Fundamentals of DeFi',
      lessons: [
        { id: 1, title: 'Introduction to DeFi', duration: '15 mins', isCompleted: true },
        { id: 2, title: 'Smart Contract Basics', duration: '25 mins', isCompleted: true },
        { id: 3, title: 'Solidity Essentials', duration: '45 mins', isCompleted: false },
      ],
    },
    {
      id: 2,
      title: 'Advanced Patterns',
      lessons: [
        { id: 4, title: 'Flash Loans', duration: '35 mins', isCompleted: false },
        { id: 5, title: 'Liquidity Pools', duration: '40 mins', isCompleted: false },
        { id: 6, title: 'Yield Farming Mechanics', duration: '50 mins', isCompleted: false },
      ],
    },
    {
      id: 3,
      title: 'Security & Optimization',
      lessons: [
        { id: 7, title: 'Auditing Smart Contracts', duration: '60 mins', isCompleted: false },
        { id: 8, title: 'Gas Optimization', duration: '35 mins', isCompleted: false },
        { id: 9, title: 'Security Best Practices', duration: '45 mins', isCompleted: false },
      ],
    },
  ],
};

export function CourseDetailContent({ courseId }: CourseDetailProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  const course = MOCK_COURSE;

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    );
  };

  const completedLessons = course.sections.reduce(
    (acc, section) => acc + section.lessons.filter((l) => l.isCompleted).length,
    0,
  );
  const totalLessons = course.sections.reduce((acc, section) => acc + section.lessons.length, 0);
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {course.level}
              </div>
              <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
              <p className="text-blue-100 mb-4 text-lg">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span>{course.rating} ({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                {course.certificate && (
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificate included</span>
                  </div>
                )}
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="text-3xl font-bold text-indigo-600">${course.price}</div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Course Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-700 leading-relaxed">{course.longDescription}</p>
              </CardContent>
            </Card>

            {/* Course Content Section */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
                <div className="space-y-3">
                  {course.sections.map((section) => (
                    <div key={section.id} className="border rounded-lg">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center gap-3">
                          {expandedSections.includes(section.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                          <span className="font-semibold text-gray-900">{section.title}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {section.lessons.length} lessons
                        </span>
                      </button>

                      {expandedSections.includes(section.id) && (
                        <div className="border-t bg-gray-50">
                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center gap-3 p-4 border-b last:border-b-0 hover:bg-gray-100 transition cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={lesson.isCompleted}
                                readOnly
                                className="w-4 h-4 rounded"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{lesson.title}</p>
                              </div>
                              <span className="text-sm text-gray-600">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Card */}
            <Card className="border border-gray-200 sticky top-4">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-gray-900">Your Progress</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>
                      {completedLessons} of {totalLessons} lessons completed
                    </span>
                    <span className="font-semibold">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor Card */}
            <Card className="border border-gray-200">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-gray-900">Instructor</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{course.instructor}</p>
                    <p className="text-sm text-gray-600">DeFi Expert</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
