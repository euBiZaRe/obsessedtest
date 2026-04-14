"use client";

import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";

export default function CarClubsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique clubs and a sample image for each
  const clubs = useMemo(() => {
    const clubMap = new Map();
    
    PRODUCTS.filter(p => p.isCarClub && p.clubName).forEach(p => {
      if (!clubMap.has(p.clubName)) {
        clubMap.set(p.clubName, {
          name: p.clubName,
          count: 0,
          image: p.image
        });
      }
      clubMap.get(p.clubName).count++;
    });

    return Array.from(clubMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredClubs = useMemo(() => {
    return clubs.filter(club => 
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [clubs, searchQuery]);

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      
      {/* Hero Header */}
      <div className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto text-center border-b border-white/5">
        <h2 className="text-accent text-sm font-bold tracking-[0.4em] mb-4 uppercase">Official Partners</h2>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic mb-8">CAR CLUBS.</h1>
        <p className="text-secondary max-w-2xl mx-auto mb-12 text-lg">
          Exclusive merchandise for the UK's most dedicated car clubs. Find your community and represent your club with pride.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-muted group-focus-within:text-accent transition-colors">
            <Search size={22} />
          </div>
          <input 
            type="text"
            placeholder="Search for your club..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-full py-6 pl-16 pr-8 text-lg font-bold tracking-tight focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted/50 shadow-2xl"
          />
        </div>
      </div>

      {/* Clubs Grid */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredClubs.map((club) => (
            <Link 
              href={`/car-clubs/${encodeURIComponent(club.name.toLowerCase().replace(/ /g, '-'))}`} 
              key={club.name}
              className="group relative"
            >
              <div className="glass aspect-square rounded-2xl overflow-hidden mb-6 group-hover:border-accent/40 transition-all duration-500 shadow-2xl bg-[#0a0a0a]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/40 to-transparent" />
                
                {/* Representative Image */}
                <div className="absolute inset-0 flex items-center justify-center p-12 group-hover:scale-105 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <Image 
                      src={club.image} 
                      alt={club.name}
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
                    <div className="flex items-end justify-between">
                        <div>
                            <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase mb-2 block">{club.count} PRODUCTS</span>
                            <h3 className="text-xl font-black italic tracking-tighter group-hover:text-accent transition-colors leading-none">{club.name}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-3xl font-black italic tracking-tighter mb-4">NO CLUBS FOUND</h3>
            <p className="text-secondary tracking-widest uppercase text-xs font-bold">Try searching for a different name</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-glass-border bg-[#050505]">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
             <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
              <span className="bg-accent text-black px-2 py-1 rounded-sm rotate-[-2deg]">OBSESSED</span>
              <span className="text-white">BRAND</span>
            </div>
            <p className="text-secondary max-w-sm mb-8 text-lg leading-relaxed">
              Redefining automotive enthusiast culture. Quality apparel and accessories for those who are obsessed with the drive.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 tracking-[0.2em] uppercase text-[10px] text-accent">Navigation</h5>
            <ul className="space-y-4 text-secondary text-sm font-bold tracking-tight">
              <li><a href="/" className="hover:text-accent transition-colors block">HOME</a></li>
              <li><a href="/clothing" className="hover:text-accent transition-colors block">CLOTHING</a></li>
              <li><a href="/accessories" className="hover:text-accent transition-colors block">ACCESSORIES</a></li>
              <li><a href="/stickers" className="hover:text-accent transition-colors block">STICKERS</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 tracking-[0.2em] uppercase text-[10px] text-accent">Car Clubs</h5>
            <ul className="space-y-4 text-secondary text-sm font-bold tracking-tight">
              <li><a href="/car-clubs" className="hover:text-accent transition-colors block">VIEW ALL CLUBS</a></li>
              <li><a href="/car-clubs?search=Ford" className="hover:text-accent transition-colors block">FORD CLUBS</a></li>
              <li><a href="/car-clubs?search=VAG" className="hover:text-accent transition-colors block">VAG CLUBS</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
