import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CarClubsDirectory() {
  const clubs = [
    "Anti Sticker Sticker Club", "Ford Car Club UK", "Ford Granada Club", 
    "Golf IV Owners Club", "Insanity", "Misguided", "Modded Car Club", 
    "Supa Square Car Club", "Treat Your Shelf Book Club", "AOCD"
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clubs.map((club) => {
            const slug = encodeURIComponent(club.toLowerCase().replace(/ /g, '-'));
            // Find a product image from the club to use as a cover
            const clubProduct = PRODUCTS.find(p => p.clubName === club);
            const coverImage = clubProduct ? clubProduct.image : "/obsessedtest/images/hero.png";

            return (
              <Link href={`/car-clubs/${slug}`} key={club} className="group relative h-64 overflow-hidden rounded-lg glass cursor-pointer block">
                <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700">
                  <Image 
                    src={coverImage} 
                    alt={club} 
                    fill 
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity" 
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 flexitems-center justify-between">
                  <div>
                    <span className="text-accent text-[10px] font-black tracking-[0.2em] mb-2 block">OFFICIAL PARTNER</span>
                    <h4 className="text-2xl font-black tracking-tighter italic">{club}</h4>
                  </div>
                  <ArrowRight className="text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            )
          })}
        </div>
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
