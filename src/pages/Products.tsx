import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NutritionFacts from "@/components/NutritionFacts";
import ProductPricing from "@/components/ProductPricing";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-primary">{t.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.description}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.items.map((product, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full mb-6 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg`}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
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
      
      {/* Floating dairy elements */}
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
        className="fixed top-20 right-10 w-16 h-16 opacity-20 pointer-events-none"
      >
        <img src="/placeholder.svg" alt="floating-milk" className="w-full h-full object-contain" />
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
        className="fixed bottom-20 left-10 w-20 h-20 opacity-20 pointer-events-none"
      >
        <img src="/placeholder.svg" alt="floating-dairy" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default Products;