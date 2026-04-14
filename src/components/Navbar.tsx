"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { name: "CLOTHING", href: "/clothing", items: ["Hoodies", "T-Shirts", "Coats & Jackets"] },
  { name: "ACCESSORIES", href: "/accessories", items: ["Lanyards", "Air Fresheners", "Flight Tags", "Show Plates"] },
  { name: "STICKERS", href: "/stickers", items: ["Sunstrips", "Slap Stickers & Vinyls"] },
  { name: "CAR CLUBS", href: "/car-clubs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Process Cart Update
    const parseCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("obsessed_cart") || "[]");
        setCartCount(cart.reduce((acc: number, item: any) => acc + item.quantity, 0));
      } catch (e) { }
    };
    parseCartCount();
    window.addEventListener("cart-updated", parseCartCount);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cart-updated", parseCartCount);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-2xl py-4 border-b border-accent/20" : "bg-[#050505] shadow-2xl py-6 border-b border-white/5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="bg-accent text-black px-2 py-1 rounded-sm rotate-[-2deg]">OBSESSED</span>
          <span className="hidden sm:inline">BRAND</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-sm font-semibold tracking-widest hover:text-accent transition-colors flex items-center gap-1 uppercase"
              >
                {link.name}
                {link.items && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.items && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 z-[100] translate-y-2 group-hover:translate-y-0">
                  <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl p-2 min-w-[280px] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.9)] border border-white/10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-2xl">
                    <ul className="space-y-1 relative z-10">
                      {link.items.map((item) => (
                        <li key={item}>
                          <Link 
                            href={link.name === "CAR CLUBS" ? `${link.href}/${encodeURIComponent(item.toLowerCase().replace(/ /g, '-'))}` : `${link.href}?filter=${encodeURIComponent(item)}`} 
                            className="group/item flex items-center justify-between text-[11px] font-bold tracking-[0.15em] text-secondary hover:text-accent transition-all duration-300 py-3 px-5 rounded-xl hover:bg-white/5 uppercase hover:pl-6"
                          >
                            <span>{item}</span>
                            <span className="text-accent opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-sm">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 glass p-2 rounded-full glass-hover transition-all">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </button>
          
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] bg-primary z-40 md:hidden p-6 glass"
          >
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xl font-bold tracking-widest uppercase block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
