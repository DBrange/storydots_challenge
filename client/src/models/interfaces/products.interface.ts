export interface Product {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  image: string;
  price: number;
  brand: Brand
}

export interface Brand {
  id: string;
  createdAt: string;
  updatedAt: string;
  brand: string;
}