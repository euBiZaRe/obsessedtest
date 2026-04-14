"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, updateQuantity, removeItem, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[250]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-[#050505] border-l border-white/5 z-[300] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-accent" size={24} />
                <h2 className="text-xl font-black italic tracking-tighter">YOUR CART.</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={48} className="text-muted/20 mb-6" />
                  <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-8">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-accent text-black px-8 py-4 font-black tracking-widest text-xs rounded-sm glow hover:scale-105 transition-all"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-6 group">
                    <div className="relative w-24 h-24 bg-[#0a0a0a] rounded-lg border border-white/5 overflow-hidden flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 py-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-sm tracking-tight group-hover:text-accent transition-colors leading-tight max-w-[180px]">
                          {item.name}
                        </h3>
                        <button 
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-muted hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-accent text-xs font-black tracking-widest uppercase mb-4">
                        {item.size || "ONE SIZE"} • {item.price}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-white/10 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                            className="p-2 hover:bg-white/5 text-muted transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                            className="p-2 hover:bg-white/5 text-muted transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-black text-sm ml-auto">
                          £{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-[#080808] border-t border-white/5 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-bold tracking-widest text-xs uppercase">Subtotal</span>
                  <span className="text-2xl font-black italic tracking-tighter">£{totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-accent text-black py-6 font-black tracking-[0.2em] text-sm rounded-sm glow hover:scale-[1.02] transition-all">
                  PROCEED TO CHECKOUT
                </button>
                <p className="text-[10px] text-muted text-center font-bold tracking-widest uppercase">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
