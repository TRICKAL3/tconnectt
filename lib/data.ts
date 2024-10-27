import { Category, Promotion } from "./types";

export const categories: Category[] = [
  {
    id: "gaming",
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800",
    price: 10,
  },
  {
    id: "shopping",
    name: "Shopping",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800",
    price: 25,
  },
  {
    id: "streaming",
    name: "Streaming",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800",
    price: 15,
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800",
    price: 50,
  },
  {
    id: "travel",
    name: "Travel",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800",
    price: 100,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800",
    price: 30,
  },
];

export const promotions: Promotion[] = [
  {
    id: "1",
    title: "Holiday Special: 20% Off All Gift Cards",
    description: "Get ready for the holidays with our biggest discount of the year!",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200",
    active: true
  },
  {
    id: "2",
    title: "New: Gaming Gift Cards",
    description: "Perfect for gamers - Steam, PlayStation, and Xbox cards available now!",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    active: true
  },
  {
    id: "3",
    title: "Double Rewards Points",
    description: "Earn 2x points on all gift card purchases this week",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1200",
    active: true
  }
];