'use client';

import { useState } from 'react';
import { CourseFilters } from './CourseFilters';
import { CourseList } from './CourseList';
import { Pagination } from './Pagination';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  price: number;
  level: string;
  category: string;
  image: string;
  currency: string;
}

const MOCK_COURSES: Course[] = [
  {
    id: 1,
    title: 'Introduction to Blockchain',
    description: 'Learn the fundamentals of blockchain technology and cryptocurrency',
    instructor: 'John Smith',
    rating: 4.8,
    price: 49.99,
    level: 'beginner',
    category: 'Blockchain',
    image: '',
    currency: 'USD',
  },
  {
    id: 2,
    title: 'DeFi Smart Contracts Mastery',
    description: 'Master writing secure DeFi smart contracts with Solidity',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    price: 99.99,
    level: 'advanced',
    category: 'DeFi',
    image: '',
    currency: 'USD',
  },
  {
    id: 3,
    title: 'NFT Development Guide',
    description: 'Create and deploy your own NFT collections on Ethereum',
    instructor: 'Mike Chen',
    rating: 4.7,
    price: 79.99,
    level: 'intermediate',
    category: 'NFTs',
    image: '',
    currency: 'USD',
  },
  {
    id: 4,
    title: 'Solidity for Beginners',
    description: 'Start your Solidity journey with this comprehensive course',
    instructor: 'Emily Davis',
    rating: 4.6,
    price: 59.99,
    level: 'beginner',
    category: 'Smart Contracts',
    image: '',
    currency: 'USD',
  },
  {
    id: 5,
    title: 'Advanced DeFi Protocols',
    description: 'Deep dive into advanced DeFi protocols and yield farming strategies',
    instructor: 'Alex Martinez',
    rating: 4.9,
    price: 129.99,
    level: 'advanced',
    category: 'DeFi',
    image: '',
    currency: 'USD',
  },
  {
    id: 6,
    title: 'Web3 Full Stack Development',
    description: 'Build complete dApps from frontend to smart contracts',
    instructor: 'Lisa Wang',
    rating: 4.8,
    price: 149.99,
    level: 'intermediate',
    category: 'Blockchain',
    image: '',
    currency: 'USD',
  },
  {
    id: 7,
    title: 'NFT Marketplace Tutorial',
    description: 'Create your own NFT marketplace on Ethereum and Polygon',
    instructor: 'David Garcia',
    rating: 4.7,
    price: 89.99,
    level: 'intermediate',
    category: 'NFTs',
    image: '',
    currency: 'USD',
  },
  {
    id: 8,
    title: 'Blockchain Security Essentials',
    description: 'Learn to audit and secure smart contracts',
    instructor: 'Rachel Brown',
    rating: 4.9,
    price: 119.99,
    level: 'advanced',
    category: 'Blockchain',
    image: '',
    currency: 'USD',
  },
  {
    id: 9,
    title: 'Getting Started with Smart Contracts',
    description: 'Your first smart contract in under 2 hours',
    instructor: 'Tom Wilson',
    rating: 4.5,
    price: 39.99,
    level: 'beginner',
    category: 'Smart Contracts',
    image: '',
    currency: 'USD',
  },
  {
    id: 10,
    title: 'DeFi Protocol Development',
    description: 'Build your own DeFi protocol from scratch',
    instructor: 'Jennifer Lee',
    rating: 4.8,
    price: 139.99,
    level: 'advanced',
    category: 'DeFi',
    image: '',
    currency: 'USD',
  },
  {
    id: 11,
    title: 'Crypto Trading Fundamentals',
    description: 'Learn technical analysis and trading strategies in crypto markets',
    instructor: 'Kevin Zhang',
    rating: 4.6,
    price: 69.99,
    level: 'intermediate',
    category: 'Blockchain',
    image: '',
    currency: 'USD',
  },
  {
    id: 12,
    title: 'Staking and Yield Farming',
    description: 'Maximize your crypto returns through staking and yield farming',
    instructor: 'Amanda Hall',
    rating: 4.7,
    price: 59.99,
    level: 'beginner',
    category: 'DeFi',
    image: '',
    currency: 'USD',
  },
];

export function CoursesListingContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const totalPages = Math.ceil(MOCK_COURSES.length / coursesPerPage);

  const startIdx = (currentPage - 1) * coursesPerPage;
  const endIdx = startIdx + coursesPerPage;
  const displayedCourses = MOCK_COURSES.slice(startIdx, endIdx);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Courses</h1>
          <p className="text-gray-600 mt-2">
            Learn blockchain, DeFi, smart contracts, and NFTs from industry experts
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <CourseFilters />
          </div>

          {/* Main - Courses */}
          <div className="lg:col-span-3">
            <CourseList courses={displayedCourses} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
