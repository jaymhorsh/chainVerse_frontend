import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { courseService } from '@/features/courses/services/course.service';
import { Course, CoursesResponse } from '@/features/courses/types';

interface UseCoursesParams {
  page?: number;
  limit?: number;
  category?: string;
  level?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function useCourses(params?: UseCoursesParams): UseQueryResult<CoursesResponse> {
  return useQuery({
    queryKey: ['courses', params],
    queryFn: () => courseService.getCourses(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useCourseById(courseId: string): UseQueryResult<Course> {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => courseService.getCourseById(courseId),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!courseId,
  });
}

export function useCourseSearch(query: string): UseQueryResult<Course[]> {
  return useQuery({
    queryKey: ['courses-search', query],
    queryFn: () => courseService.searchCourses(query),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: query.length > 0,
  });
}
