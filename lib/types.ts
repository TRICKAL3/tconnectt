export interface Category {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface GiftCard {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
}