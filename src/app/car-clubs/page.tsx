"use client";

import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function CarClubsGrid() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  
  const [clubs, setClubs] = useState(PRODUCTS.filter(p => p.isCarClub));

  useEffect(() => {
    let filtered = PRODUCTS.filter(p => p.isCarClub);
    if (filter) {
      // If we decide to let people filter clubs by name later
      filtered = filtered.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    }
    setClubs(filtered);
  }, [filter]);

  return (
    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
      {clubs.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} className="group">
          <div className="glass aspect-[4/5] relative mb-6 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#0f0f0f] flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  unoptimized
                />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black to-transparent z-20">
              <button className="w-full bg-white text-black font-bold py-3 text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                <Plus size={16} /> QUICK ADD
              </button>
            </div>
          </div>
          <span className="text-muted text-[10px] font-bold tracking-widest mb-1 block">
            {product.subCategory !== "Other" ? product.subCategory : product.category}
          </span>
          <h4 className="font-bold text-sm tracking-tight mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h4>
          <p className="font-black text-lg">{product.price}</p>
        </Link>
      ))}
      {clubs.length === 0 && (
        <div className="col-span-full py-20 text-center text-muted font-bold tracking-widest uppercase">
          No club merchandise found.
        </div>
      )}
    </div>
  );
}

export default function CarClubsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-accent text-sm font-bold tracking-[0.3em] mb-4 uppercase">Community</h2>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-8">CAR CLUBS.</h1>
        <p className="text-secondary max-w-2xl mx-auto mb-12">
          Exclusive merchandise and gear for our partnered automotive communities and car clubs.
        </p>
      </div>

      <section className="pb-24 px-6 max-w-[1440px] mx-auto">
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><span className="text-accent tracking-widest animate-pulse">LOADING...</span></div>}>
          <CarClubsGrid />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-glass-border bg-bg-primary">
         <div className="max-w-[1440px] mx-auto grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
             <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6 text-white">
              <span className="bg-accent text-black px-2 py-1 rounded-sm rotate-[-2deg]">OBSESSED</span>
              <span>BRAND</span>
            </div>
            <p className="text-secondary max-w-sm mb-8">
              Redefining automotive enthusiast culture. Quality apparel and accessories for those who are obsessed with the drive.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 tracking-widest uppercase text-xs">Shop</h5>
            <ul className="space-y-4 text-secondary text-sm font-medium">
              <li><a href="/" className="hover:text-accent transition-colors block">Home</a></li>
              <li><a href="/clothing" className="hover:text-accent transition-colors block">Clothing</a></li>
              <li><a href="/accessories" className="hover:text-accent transition-colors block">Accessories</a></li>
              <li><a href="/car-clubs" className="text-accent transition-colors block">Car Clubs</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
