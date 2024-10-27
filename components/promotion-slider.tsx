"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromotionSlider({ promotions }: { promotions: Promotion[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [promotions.length]);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? promotions.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr + 1) % promotions.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {promotions.map((promotion, index) => (
        <div
          key={promotion.id}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-transform duration-500",
            index === current ? "translate-x-0" : "translate-x-full"
          )}
          style={{ transform: `translateX(${(index - current) * 100}%)` }}
        >
          <Image
            src={promotion.image}
            alt={promotion.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{promotion.title}</h2>
            <p className="text-sm">{promotion.description}</p>
          </div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === current ? "bg-white" : "bg-white/50"
            )}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}