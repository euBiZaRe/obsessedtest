import Navbar from "@/components/Navbar";
import { ShoppingCart, Star, ShieldCheck, Truck, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-muted hover:text-accent font-bold text-xs tracking-widest mb-12 transition-colors">
          <ChevronLeft size={16} /> BACK TO SHOP
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="glass aspect-square relative overflow-hidden rounded-xl bg-[#0a0a0a] w-full min-h-[500px]">
               <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-contain p-12"
                  priority
                  unoptimized
               />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="glass aspect-square rounded-lg bg-[#0f0f0f] border-accent/20 cursor-pointer hover:border-accent transition-colors" />
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-accent text-xs font-black tracking-[0.2em] mb-4 uppercase">{product.category}</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-black">{product.price}</span>
              <div className="flex items-center gap-1 text-accent">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-secondary text-xs font-bold ml-2">(42 REVIEWS)</span>
              </div>
            </div>

            <p className="text-secondary mb-12 leading-relaxed max-w-lg text-lg">
              {product.description || "The For The Love Of Cars Hoodies are 310gsm of pure comfort. They come with our latest logo intertwined with cherry blossom flowers on the back and our signature raised font Obsessed Brand logo on the front."}
            </p>

            {/* Size Selector */}
            <div className="mb-10">
              <h3 className="text-xs font-black tracking-widest uppercase mb-4">Select Size</h3>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL', '2XL'].map(size => (
                  <button key={size} className="w-14 h-14 border border-glass-border flex items-center justify-center font-bold hover:bg-accent hover:text-black transition-all rounded-sm">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-1 bg-accent text-black font-black py-5 rounded-sm tracking-widest flex items-center justify-center gap-2 glow hover:scale-[1.02] transition-transform">
                <ShoppingCart size={20} /> ADD TO CART
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-glass-border">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">SSL SECURE</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">FAST SHIPPING</span>
              </div>
              <div className="flex items-center gap-3">
                <Star size={20} className="text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">PREMIUM QUALITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
