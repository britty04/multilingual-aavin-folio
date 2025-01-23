import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HelpCircle, MessageCircle, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  const categories = [
    {
      title: language === "en" ? "General Questions" : "பொதுவான கேள்விகள்",
      icon: "/faq-general.jpg",
    },
    {
      title: language === "en" ? "Products & Quality" : "தயாரிப்புகள் & தரம்",
      icon: "/faq-products.jpg",
    },
    {
      title: language === "en" ? "Orders & Delivery" : "ஆர்டர்கள் & டெலிவரி",
      icon: "/faq-delivery.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn relative">
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-32 right-12 text-black/10"
      >
        <HelpCircle size={40} />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="fixed bottom-24 left-12 text-black/10"
      >
        <MessageCircle size={36} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed top-48 left-16 text-black/10"
      >
        <Coffee size={32} />
      </motion.div>

      {/* Hero Section */}
      <div className="relative bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{t.description}</p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 hover:bg-gray-50 transition-colors"
              >
                <AccordionTrigger className="text-left py-4 text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Separator className="mb-8" />
          <h2 className="text-2xl font-semibold mb-4">
            {language === "en" 
              ? "Still have questions?" 
              : "இன்னும் கேள்விகள் உள்ளதா?"}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === "en"
              ? "Can't find the answer you're looking for? Please contact our customer support team."
              : "நீங்கள் தேடும் பதில் கிடைக்கவில்லையா? எங்கள் வாடிக்கையாளர் ஆதரவு குழுவைத் தொடர்பு கொள்ளவும்."}
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            {language === "en" ? "Contact Support" : "ஆதரவை தொடர்பு கொள்ள"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
