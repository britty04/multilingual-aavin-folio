import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NutritionFacts from "@/components/NutritionFacts";
import ProductPricing from "@/components/ProductPricing";
import { motion } from "framer-motion";
import { Milk, Droplet, Container } from "lucide-react";

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language].products;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-24 right-10 text-black/10"
      >
        <Container size={48} />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed bottom-20 left-10 text-black/10"
      >
        <Droplet size={32} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {t.items.map((product, index) => (
          <motion.div key={index} variants={item}>
            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-2 border-black/10">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl group-hover:text-black transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-xl font-bold text-black">
                  {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="aspect-square w-full bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={`/placeholder.svg`}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-gray-600 text-lg">{product.description}</p>
                
                <NutritionFacts
                  facts={{
                    fat: "6g",
                    solidsNotFat: "9g",
                    protein: "3.4g",
                    carbohydrate: "4.9g",
                    minerals: "740mg",
                    energyValue: "90 K.Cal"
                  }}
                />
                
                <ProductPricing
                  options={[
                    { quantity: "500ml", price: "₹25" },
                    { quantity: "1L", price: "₹48" },
                    { quantity: "2L", price: "₹92" }
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
