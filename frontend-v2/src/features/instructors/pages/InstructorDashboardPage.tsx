'use client';

import { AnalyticsCards } from '../components/AnalyticsCards';
import { RevenueChart } from '../components/RevenueChart';
import { CourseTable } from '../components/CourseTable';

export function InstructorDashboardPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Instructor Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's an overview of your teaching activity.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="mb-8">
        <AnalyticsCards />
      </div>

      {/* Charts and Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-gray-700">This Month</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">$340</p>
            <p className="text-xs text-gray-600 mt-1">Earned this month</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <h3 className="text-sm font-semibold text-gray-700">New Enrollments</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">24</p>
            <p className="text-xs text-gray-600 mt-1">Last 30 days</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
            <h3 className="text-sm font-semibold text-gray-700">Avg Rating</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">4.7 ⭐</p>
            <p className="text-xs text-gray-600 mt-1">Based on 165 reviews</p>
          </div>
        </div>
      </div>

      {/* Courses Table */}
      <div>
        <CourseTable />
      </div>
    </section>
  );
}
