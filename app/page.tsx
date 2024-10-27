import { GiftCard } from "@/components/gift-card";
import { PromotionSlider } from "@/components/promotion-slider";
import { categories, promotions } from "@/lib/data";

export default function Home() {
  const activePromotions = promotions.filter(promo => promo.active);

  return (
    <div className="container py-8 space-y-12">
      <PromotionSlider promotions={activePromotions} />
      
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Digital Gift Cards</h1>
          <p className="text-muted-foreground">Perfect gifts for any occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <GiftCard key={category.id} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
}