import React from 'react';
import { Plus, Minus } from 'lucide-react';

const ProductCard = ({ product, quantity, onAdd, onRemove }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col">
      <div className="aspect-square rounded-lg bg-gray-50 grid place-items-center text-3xl">
        {product.emoji}
      </div>
      <h3 className="mt-3 font-medium leading-tight line-clamp-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.weight}</p>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="font-semibold">₹{product.price}</div>
          {product.mrp && (
            <div className="text-xs text-gray-400 line-through">₹{product.mrp}</div>
          )}
        </div>
        {quantity > 0 ? (
          <div className="flex items-center gap-2">
            <button
              onClick={onRemove}
              className="p-1.5 rounded-md border border-gray-200 hover:bg-gray-50"
              aria-label="Decrease"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-medium">{quantity}</span>
            <button
              onClick={onAdd}
              className="p-1.5 rounded-md bg-green-600 text-white hover:bg-green-700"
              aria-label="Increase"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={onAdd}
            className="px-3 py-1.5 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

const ProductGrid = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            quantity={cart[p.id] || 0}
            onAdd={() => addToCart(p.id)}
            onRemove={() => removeFromCart(p.id)}
          />)
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
