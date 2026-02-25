'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FilterState {
  categories: string[];
  level: string;
  priceRange: [number, number];
}

export function CourseFilters() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    level: 'all',
    priceRange: [0, 500],
  });

  const categories = ['Blockchain', 'DeFi', 'NFTs', 'Smart Contracts'];
  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const toggleCategory = (cat: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  return (
    <Card className="h-fit border border-gray-200">
      <CardContent className="p-6 space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm text-gray-600">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Level */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Level</h3>
          <div className="space-y-2">
            {levels.map((lv) => (
              <label key={lv.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="level"
                  value={lv.value}
                  checked={filters.level === lv.value}
                  onChange={(e) => setFilters((prev) => ({ ...prev, level: e.target.value }))}
                  className="w-4 h-4 rounded-full border-gray-300"
                />
                <span className="text-sm text-gray-600">{lv.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [prev.priceRange[0], parseInt(e.target.value)],
              }))
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={() =>
            setFilters({ categories: [], level: 'all', priceRange: [0, 500] })
          }
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 rounded-lg transition"
        >
          Reset Filters
        </button>
      </CardContent>
    </Card>
  );
}
