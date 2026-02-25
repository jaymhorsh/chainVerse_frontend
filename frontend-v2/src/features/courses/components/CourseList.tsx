'use client';

import { CourseCard } from './courseCard';

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

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          onAddToCart={() => console.log(`Added ${course.title} to cart`)}
        />
      ))}
    </div>
  );
}
