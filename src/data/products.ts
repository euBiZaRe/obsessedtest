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
  if (n.includes("lanyard")) return "Lanyards";
  if (n.includes("hoodie")) return "Hoodies";
  if (n.includes("t-shirt") || n.includes("t shirt") || n.includes("tee")) return "T-Shirts";
  if (n.includes("coat") || n.includes("jacket") || n.includes("windbreaker")) return "Coats & Jackets";
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
  
  const clubs = [
    "anti sticker sticker", "ford car club", "ford elite", "ford granada", 
    "golf iv owners", "insanity", "misguided", "modded car club", 
    "supa square", "treat your shelf", "aocd", "all wheels uk",
    "arcane autos", "audi tt addicts", "auditt", "auto society", "ayrshore", "ayshore",
    "boostology", "bristol detailing", "broken spannerz", "devoted",
    "fezgxng", "girlscargang", "guys girls & cars", "ignxtion", "insta carmunity",
    "just ford", "nefo", "notts royals", "offbranded", "official rep", "outcasted",
    "overperform", "redlined rejects", "reformed automotive", "ride revolution", 
    "scpl", "sclp", "simply static", "smkduk", "south coast tt", "southwest unelite",  
    "trvisions", "unlxcky", "united rover", "vally commandos", "wds", "xclusive auto",
    "unique ford", "hcc", "modified bristol", "og low", "pay my bills", "crop top drop top", "low show plate", "low mini lanyard"
  ];
  
  for (const club of clubs) {
    if (n.includes(club)) return club.split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  
  if (n.includes("club") && !n.includes("treat your shelf")) return "Other Clubs";
  return undefined;
}

function getCoreCategory(subCategory: string, originalCategory: string): string {
  if (["Hoodies", "T-Shirts", "Coats & Jackets"].includes(subCategory)) return "CLOTHING";
  if (["Sunstrips", "Slap Stickers", "Die-cut", "Decals"].includes(subCategory)) return "STICKERS";
  if (["Lanyards", "Air Fresheners", "Flight Tags", "Show Plates"].includes(subCategory)) return "ACCESSORIES";
  return originalCategory;
}

export const PRODUCTS: Product[] = (productsData as any[]).map(p => {
  const subCat = getSubCategory(p.name);
  const clubName = getClubName(p.name);
  return {
    id: String(p.id),
    name: p.name,
    price: p.price,
    category: getCoreCategory(subCat, p.category),
    image: `/obsessedtest${p.image}`,
    description: p.description,
    isCarClub: clubName !== undefined,
    subCategory: subCat,
    clubName: clubName
  };
});
