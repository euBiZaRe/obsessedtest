"use client";

import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      onClick={handleClick}
      className={`flex-1 font-black py-5 rounded-sm tracking-widest flex items-center justify-center gap-2 glow hover:scale-[1.02] transition-all duration-300 ${added ? 'bg-white text-black' : 'bg-accent text-black'}`}
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
  );
}
