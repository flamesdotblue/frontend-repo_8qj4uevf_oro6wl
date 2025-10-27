import React from 'react';
import { Search, Clock } from 'lucide-react';

const SearchBanner = ({ search, setSearch }) => {
  const quickSearches = ['Milk', 'Bread', 'Fruits', 'Eggs', 'Snacks', 'Ice Cream'];

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100/60 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 text-emerald-800 mb-4">
          <Clock className="w-5 h-5" />
          <p className="text-sm">Delivery in 10-20 minutes • Fresh and fast</p>
        </div>

        <div className="relative">
          <Search className="w-5 h-5 text-emerald-600 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for items, brands and more"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-emerald-200 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
          />
        </div>

        <div className="flex gap-2 mt-3 flex-wrap">
          {quickSearches.map((q) => (
            <button
              key={q}
              onClick={() => setSearch(q)}
              className="text-sm px-3 py-1.5 rounded-full border border-emerald-200 text-emerald-700 hover:bg-emerald-100/70"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
