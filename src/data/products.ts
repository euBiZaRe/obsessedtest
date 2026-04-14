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
  clubName?: string;
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
  if (n.includes("slap") || n.includes("anti sticker")) return "Slap Stickers";
  if (n.includes("die-cut") || n.includes("die cut")) return "Die-cut";
  if (n.includes("decal") || n.includes("sticker")) return "Decals";
  return "Other";
}

function getClubName(name: string): string | undefined {
  const n = name.toLowerCase();
  if (n.includes("anti sticker sticker club")) return "Anti Sticker Sticker Club";
  if (n.includes("ford car club uk")) return "Ford Car Club UK";
  if (n.includes("ford granada club")) return "Ford Granada Club";
  if (n.includes("golf iv owners club")) return "Golf IV Owners Club";
  if (n.includes("insanity")) return "Insanity";
  if (n.includes("misguided")) return "Misguided";
  if (n.includes("modded car club")) return "Modded Car Club";
  if (n.includes("supa square car club")) return "Supa Square Car Club";
  if (n.includes("treat your shelf book club")) return "Treat Your Shelf Book Club";
  if (n.includes("aocd")) return "AOCD";
  if (n.includes("club") || n.match(/insanity|misguided|aocd/i)) return "Other Clubs";
  return undefined;
}

export const PRODUCTS: Product[] = (productsData as any[]).map(p => ({
  id: String(p.id),
  name: p.name,
  price: p.price,
  category: p.category,
  image: `/obsessedtest${p.image}`,
  description: p.description,
  isCarClub: /club|misguided|insanity|aocd/i.test(p.name),
  subCategory: getSubCategory(p.name),
  clubName: getClubName(p.name)
}));

