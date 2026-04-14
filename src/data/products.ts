import productsData from './products.json';

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  isNew?: boolean;
  description?: string;
  isCarClub: boolean;
  subCategory: string;
}

function getSubCategory(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("hoodie")) return "Hoodies";
  if (n.includes("t-shirt") || n.includes("t shirt") || n.includes("tee")) return "T-Shirts";
  if (n.includes("coat") || n.includes("jacket") || n.includes("windbreaker")) return "Coats & Jackets";
  if (n.includes("lanyard")) return "Lanyards";
  if (n.includes("air freshener")) return "Air Fresheners";
  if (n.includes("flight tag")) return "Flight Tags";
  if (n.includes("show plate") || n.includes("plate")) return "Show Plates";
  if (n.includes("sunstrip")) return "Sunstrips";
  if (n.includes("slap")) return "Slap Stickers";
  if (n.includes("die-cut") || n.includes("die cut")) return "Die-cut";
  if (n.includes("decal") || n.includes("sticker")) return "Decals";
  return "Other";
}

export const PRODUCTS: Product[] = (productsData as any[]).map(p => ({
  id: String(p.id),
  name: p.name,
  price: p.price,
  category: p.category,
  image: `/obsessedtest${p.image}`,
  description: p.description,
  isCarClub: /club/i.test(p.name),
  subCategory: getSubCategory(p.name)
}));

