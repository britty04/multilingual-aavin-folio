import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language].products;

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground">{t.description}</p>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full mb-4 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={`/placeholder.svg`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Products;