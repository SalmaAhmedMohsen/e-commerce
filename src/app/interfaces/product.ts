export interface Product {
  quantity?: number;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  availabilityStatus: string;
  images: string[];
}
