import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";

export function GiftCard({ name, image, price }: Category) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">Starting from ${price}</p>
        </div>
        <Button>Buy Now</Button>
      </CardFooter>
    </Card>
  );
}