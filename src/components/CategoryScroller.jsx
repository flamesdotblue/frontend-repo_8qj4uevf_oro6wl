import React from 'react';

const CategoryScroller = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar py-3">
        <button
          onClick={() => onSelect('All')}
          className={`whitespace-nowrap px-3 py-1.5 rounded-full border ${
            selectedCategory === 'All'
              ? 'bg-green-600 text-white border-green-600'
              : 'border-gray-200 text-gray-700 hover:border-green-400'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full border ${
              selectedCategory === cat
                ? 'bg-green-600 text-white border-green-600'
                : 'border-gray-200 text-gray-700 hover:border-green-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
