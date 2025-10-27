import React from 'react';
import { ShoppingCart, MapPin } from 'lucide-react';

const Navbar = ({ cartCount, location, setLocation }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-green-600 text-white grid place-items-center font-bold">B</div>
          <div className="leading-tight">
            <div className="text-lg font-semibold">BlinkCart</div>
            <div className="text-xs text-gray-500">Groceries delivered in minutes</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 text-green-600" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 w-64"
          />
        </div>

        <button className="relative flex items-center gap-2 px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-white text-green-700 border border-green-600 rounded-full grid place-items-center font-semibold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
