import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NutritionFacts from "@/components/NutritionFacts";
import ProductPricing from "@/components/ProductPricing";
import { motion } from "framer-motion";
import { Milk, Package, ShoppingCart } from "lucide-react";

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language].products;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {t.items.map((product, index) => (
          <motion.div key={index} variants={item}>
            <Card className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="p-4 space-y-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-base font-semibold text-primary">
                  {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-4">
                <div className="aspect-square w-full bg-muted rounded-md overflow-hidden">
                  <img
                    src={`/placeholder.svg`}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <ProductPricing
                  options={[
                    { quantity: "500ml", price: "₹25" },
                    { quantity: "1L", price: "₹48" }
                  ]}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;