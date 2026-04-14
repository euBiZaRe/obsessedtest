"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter(p => !p.isCarClub).slice(0, 4);
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-accent text-sm font-bold tracking-[0.2em] mb-2">NEW ARRIVALS</h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter">FEATURED GEAR.</h3>
        </div>
        <Link href="/clothing" className="text-sm font-bold tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors">
          VIEW ALL PRODUCTS
        </Link>
      </div>

      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {featured.map((product, index) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass aspect-[4/5] relative mb-6 overflow-hidden rounded-lg">
              {product.isNew && (
                <span className="absolute top-4 left-4 z-10 bg-accent text-black text-[10px] font-black px-2 py-1 rounded-sm">
                  NEW
                </span>
              )}
              
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
          </motion.div>
        </Link>
        ))}
      </div>
    </section>
  );
}
