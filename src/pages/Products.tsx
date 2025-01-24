import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import NutritionFacts from "@/components/NutritionFacts";
import { motion } from "framer-motion";
import { Package, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        className="space-y-6"
      >
        {t.items.map((product, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="aspect-square w-full max-w-md mx-auto bg-muted rounded-md overflow-hidden">
                  <img
                    src={`/placeholder.svg`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <Package className="mr-2 h-4 w-4" />
                    View Packaging
                  </Button>
                  <Button variant="outline" size="sm">
                    <Info className="mr-2 h-4 w-4" />
                    More Details
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">{product.name}</h2>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="nutrition">
                    <AccordionTrigger className="text-lg font-semibold">
                      Nutrition Information
                    </AccordionTrigger>
                    <AccordionContent>
                      <NutritionFacts
                        facts={{
                          fat: "3.5g",
                          solidsNotFat: "8.5g",
                          protein: "3.2g",
                          carbohydrate: "4.8g",
                          minerals: "0.7g",
                          energyValue: "67 kcal/100g"
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing">
                    <AccordionTrigger className="text-lg font-semibold">
                      Available Quantities & Pricing
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg text-center">
                          <p className="font-medium">500ml</p>
                          <p className="text-xl font-bold mt-1">₹25</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg text-center">
                          <p className="font-medium">1L</p>
                          <p className="text-xl font-bold mt-1">₹48</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;