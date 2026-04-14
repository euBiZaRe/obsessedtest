"use client";

import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export default function ProductClientActions({ isClothing, productId, productName, price }: { isClothing: boolean, productId: string, productName: string, price: string }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (isClothing && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    // Add to localStorage Cart
    const currentCart = JSON.parse(localStorage.getItem("obsessed_cart") || "[]");
    currentCart.push({ id: productId, name: productName, price, size: selectedSize || "One Size", quantity: 1 });
    localStorage.setItem("obsessed_cart", JSON.stringify(currentCart));

    // Dispatch event to update Navbar count
    window.dispatchEvent(new Event("cart-updated"));

    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full relative z-10">
      {/* Size Selector */}
      {isClothing && (
        <div className="mb-10">
          <h3 className="text-xs font-black tracking-widest uppercase mb-4 text-accent">Select Size</h3>
          <div className="flex gap-3 relative z-10">
            {['S', 'M', 'L', 'XL', '2XL'].map(size => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-14 h-14 border flex items-center justify-center font-bold transition-all rounded-sm hover:-translate-y-1 relative z-20 cursor-pointer ${
                  selectedSize === size 
                    ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(0,255,0,0.4)]" 
                    : "border-glass-border hover:bg-white/5"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button 
          onClick={handleAddToCart}
          className={`flex-1 font-black py-5 rounded-sm tracking-widest flex items-center justify-center gap-2 glow hover:scale-[1.02] transition-all duration-300 relative z-20 cursor-pointer ${
            added ? 'bg-white text-black' : 'bg-accent text-black'
          }`}
        >
          {added ? (
            <>
              <Check size={20} /> ADDED TO CART
            </>
          ) : (
            <>
              <ShoppingCart size={20} /> ADD TO CART
            </>
          )}
        </button>
      </div>
    </div>
  );
}
