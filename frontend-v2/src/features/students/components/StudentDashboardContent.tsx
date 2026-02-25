'use client';

import {
  StudentWelcome,
  ProgressCards,
  LearningProgressChart,
  InProgressCourses,
} from './StudentDashboardCards';

export function StudentDashboardContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <StudentWelcome />

        {/* Progress Stats */}
        <ProgressCards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Learning Progress */}
          <div className="lg:col-span-2">
            <LearningProgressChart />
          </div>

          {/* Right: In Progress Courses */}
          <div className="lg:col-span-1">
            <InProgressCourses />
          </div>
        </div>
      </div>
    </div>
  );
}
