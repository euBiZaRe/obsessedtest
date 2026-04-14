import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function AccessoriesPage() {
  const accessories = PRODUCTS.filter(p => p.category === "ACCESSORIES");

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-accent text-sm font-bold tracking-[0.3em] mb-4 uppercase">Collection</h2>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-8">ACCESSORIES.</h1>
        <p className="text-secondary max-w-2xl mx-auto mb-12">
          The finishing touches. 3D printed parts, flight tags, and show accessories for the ultimate car build.
        </p>
      </div>

      <section className="pb-24 px-6 max-w-[1440px] mx-auto">
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {accessories.map((product) => (
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
                {product.category}
              </span>
              <h4 className="font-bold text-sm tracking-tight mb-2 group-hover:text-accent transition-colors">
                {product.name}
              </h4>
              <p className="font-black text-lg">{product.price}</p>
            </Link>
          ))}
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
              <li><a href="/accessories" className="text-accent transition-colors block">Accessories</a></li>
              <li><a href="/stickers" className="hover:text-accent transition-colors block">Stickers</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
