import { CourseDetailContent } from '@/features/courses/components/CourseDetailContent';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return <CourseDetailContent courseId={params.id} />;
}
