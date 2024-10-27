"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { AdminGiftCardForm } from "@/components/admin-gift-card-form";
import { AdminGiftCardList } from "@/components/admin-gift-card-list";
import { AdminPromotions } from "@/components/admin-promotions";

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container py-8">
      <Card>
        <Tabs defaultValue="gift-cards" className="p-6">
          <TabsList>
            <TabsTrigger value="gift-cards">Gift Cards</TabsTrigger>
            <TabsTrigger value="promotions">Promotions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gift-cards" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gift Cards Management</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                {showForm ? "Cancel" : "Add Gift Card"}
              </button>
            </div>
            {showForm && <AdminGiftCardForm onClose={() => setShowForm(false)} />}
            <AdminGiftCardList />
          </TabsContent>
          
          <TabsContent value="promotions">
            <AdminPromotions />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}