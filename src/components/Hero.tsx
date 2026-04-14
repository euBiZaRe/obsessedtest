"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/obsessedtest/images/hero.png"
          alt="Premium Automotive Car"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/50 opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
            The New Era of Automotive Culture
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            FOR THE LOVE <br /> OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ccff00]">CARS.</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg md:text-xl mb-10 font-medium">
            Redefining premium automotive apparel. Quality that speaks for itself. 
            Designed for the obsessed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-accent text-black font-bold py-4 px-10 rounded-sm tracking-widest hover:scale-105 transition-transform glow">
              SHOP EVERYTHING
            </button>
            <button className="glass py-4 px-10 rounded-sm tracking-widest font-bold hover:bg-white/10 transition-all">
              CAR CLUBS
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
    </section>
  );
}
