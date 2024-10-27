"use client";

import Link from "next/link";
import { ShoppingCart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gift className="h-6 w-6" />
          <span className="text-xl font-bold">GiftHub</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/cart" className="flex items-center space-x-1">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}