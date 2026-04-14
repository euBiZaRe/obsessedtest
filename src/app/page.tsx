import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1440px] mx-auto px-6 text-center mb-16">
          <h2 className="text-accent text-sm font-bold tracking-[0.2em] mb-2">COLLECTIONS</h2>
          <h3 className="text-4xl font-black italic tracking-tighter">BROWSE CATEGORIES.</h3>
        </div>
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <CategoryCard title="CLOTHING" count="42 ITEMS" />
            <CategoryCard title="ACCESSORIES" count="18 ITEMS" />
            <CategoryCard title="STICKERS" count="124 ITEMS" />
          </div>
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
              <li><a href="#" className="hover:text-accent transition-colors block">Clothing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors block">Accessories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors block">Stickers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors block">Car Clubs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 tracking-widest uppercase text-xs">Help</h5>
            <ul className="space-y-4 text-secondary text-sm font-medium">
              <li><a href="#" className="hover:text-accent transition-colors block">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors block">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors block">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors block">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted font-bold tracking-[0.2em]">
          <p>© 2026 OBSESSED BRAND. FOR THE LOVE OF CARS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors">TIKTOK</a>
            <a href="#" className="hover:text-white transition-colors">FACEBOOK</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CategoryCard({ title, count }: { title: string; count: string }) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-lg glass cursor-pointer">
      <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-accent text-[10px] font-black tracking-[0.2em] mb-2">{count}</span>
        <h4 className="text-3xl font-black tracking-tighter italic">{title}</h4>
      </div>
    </div>
  );
}
