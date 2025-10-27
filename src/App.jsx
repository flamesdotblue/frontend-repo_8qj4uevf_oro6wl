import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBanner from './components/SearchBanner';
import CategoryScroller from './components/CategoryScroller';
import ProductGrid from './components/ProductGrid';

const initialProducts = [
  { id: 'milk-toned', name: 'Toned Milk', category: 'Dairy', price: 54, mrp: 60, weight: '1L', emoji: '🥛' },
  { id: 'bread-wheat', name: 'Whole Wheat Bread', category: 'Bakery', price: 40, mrp: 45, weight: '400g', emoji: '🍞' },
  { id: 'banana', name: 'Bananas', category: 'Fruits', price: 35, weight: '6 pcs', emoji: '🍌' },
  { id: 'egg-12', name: 'Farm Fresh Eggs', category: 'Dairy', price: 72, mrp: 80, weight: '12 pcs', emoji: '🥚' },
  { id: 'chips', name: 'Salted Potato Chips', category: 'Snacks', price: 20, weight: '52g', emoji: '🍟' },
  { id: 'ice-cream', name: 'Vanilla Ice Cream', category: 'Frozen', price: 199, mrp: 220, weight: '700ml', emoji: '🍨' },
  { id: 'apple', name: 'Shimla Apples', category: 'Fruits', price: 120, weight: '1kg', emoji: '🍎' },
  { id: 'tomato', name: 'Fresh Tomatoes', category: 'Vegetables', price: 38, weight: '500g', emoji: '🍅' },
  { id: 'rice', name: 'Basmati Rice', category: 'Grains', price: 560, mrp: 599, weight: '5kg', emoji: '🍚' },
  { id: 'atta', name: 'Wheat Atta', category: 'Grains', price: 299, weight: '5kg', emoji: '🌾' },
  { id: 'paneer', name: 'Paneer Cubes', category: 'Dairy', price: 89, weight: '200g', emoji: '🧀' },
  { id: 'cola', name: 'Cola Beverage', category: 'Beverages', price: 40, weight: '750ml', emoji: '🥤' },
];

function App() {
  const [location, setLocation] = useState('Bengaluru, India');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState({}); // { productId: qty }

  const categories = useMemo(() => {
    const set = new Set(initialProducts.map((p) => p.category));
    return Array.from(set);
  }, []);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch = q === '' || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [search, selectedCategory]);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const cartCount = useMemo(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart]);
  const cartTotal = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const product = initialProducts.find((p) => p.id === id);
      return sum + (product ? product.price * qty : 0);
    }, 0);
  }, [cart]);

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <Navbar cartCount={cartCount} location={location} setLocation={setLocation} />
      <SearchBanner search={search} setSearch={setSearch} />
      <div className="py-2">
        <CategoryScroller
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
      <ProductGrid
        products={filteredProducts}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      {cartCount > 0 && (
        <div className="sticky bottom-4 z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between bg-green-600 text-white rounded-xl shadow-lg px-4 py-3">
              <div className="text-sm">
                <span className="font-semibold">{cartCount} item{cartCount > 1 ? 's' : ''}</span>
                <span className="opacity-80"> • ₹{cartTotal}</span>
              </div>
              <button className="bg-white text-green-700 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-gray-100 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-500">
          <div className="font-medium text-gray-700">Why BlinkCart?</div>
          <p className="mt-2">Get essentials delivered in minutes with fresh quality, fair prices, and real-time tracking.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
