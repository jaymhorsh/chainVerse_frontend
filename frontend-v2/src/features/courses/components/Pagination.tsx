'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages =
    totalPages <= 5
      ? pages
      : currentPage <= 3
        ? pages.slice(0, 3)
        : currentPage >= totalPages - 2
          ? pages.slice(totalPages - 3)
          : pages.slice(currentPage - 2, currentPage + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="gap-1"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Prev</span>
      </Button>

      {/* First page if not visible */}
      {currentPage > 3 && totalPages > 5 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(1)}
            className="w-10"
          >
            1
          </Button>
          <span className="text-gray-500">...</span>
        </>
      )}

      {/* Visible pages */}
      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? 'default' : 'outline'}
          size="sm"
          onClick={() => onPageChange(page)}
          className={`w-10 ${page === currentPage ? 'bg-indigo-600 text-white' : ''}`}
        >
          {page}
        </Button>
      ))}

      {/* Last page if not visible */}
      {currentPage < totalPages - 2 && totalPages > 5 && (
        <>
          <span className="text-gray-500">...</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            className="w-10"
          >
            {totalPages}
          </Button>
        </>
      )}

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="gap-1"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
