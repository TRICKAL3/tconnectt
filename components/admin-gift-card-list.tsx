"use client";

import { Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

const mockGiftCards = [
  {
    id: "1",
    categoryId: "gaming",
    name: "Steam $50",
    description: "Digital gift card for Steam gaming platform",
    price: 50,
    image: "https://example.com/steam.jpg",
    stock: 100,
  },
  {
    id: "2",
    categoryId: "shopping",
    name: "Amazon $100",
    description: "Digital gift card for Amazon.com",
    price: 100,
    image: "https://example.com/amazon.jpg",
    stock: 50,
  },
];

export function AdminGiftCardList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockGiftCards.map((card) => (
            <TableRow key={card.id}>
              <TableCell className="font-medium">{card.name}</TableCell>
              <TableCell>
                {categories.find((c) => c.id === card.categoryId)?.name}
              </TableCell>
              <TableCell>${card.price}</TableCell>
              <TableCell>{card.stock}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}