import productsData from './products.json';

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  isNew?: boolean;
  description?: string;
}

export const PRODUCTS: Product[] = (productsData as any[]).map(p => ({
  id: String(p.id),
  name: p.name,
  price: p.price,
  category: p.category,
  image: p.image,
  description: p.description
}));
