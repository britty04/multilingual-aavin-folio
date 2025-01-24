import { Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const DeliverySection = () => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col md:flex-row items-center gap-8 py-12 px-4"
    >
      <div className="md:w-1/2">
        <img 
          src="/dairy-delivery.jpg" 
          alt="Delivery Service" 
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <Truck className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold">
            {language === "en" ? "Delivery to Customer" : "வாடிக்கையாளருக்கு விநியோகம்"}
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {language === "en"
            ? "Aavin's success lies in its commitment to deliver the freshest products to its beloved consumers. Our vans crisscross the town TWICE EVERYDAY, to ensure the community gets the freshest product possible. A web of Aavin booth, Parlours, neighborhood stores assure our consumers milk is always within their grabs, even during hardest times like Covid-19 days. Avail Family milk subscriptions, aavin awaits for you."
            : "ஆவினின் வெற்றி அதன் அன்பான நுகர்வோருக்கு மிகவும் புதிய தயாரிப்புகளை வழங்குவதில் உள்ளது. எங்கள் வாகனங்கள் தினமும் இருமுறை நகரை சுற்றி வருகின்றன. ஆவின் பூத், பார்லர்கள், அக்கம்பக்க கடைகளின் வலையமைப்பு கோவிட்-19 நாட்கள் போன்ற கடினமான நேரங்களிலும் பால் எப்போதும் கிடைக்கும் என்பதை உறுதி செய்கிறது. குடும்ப பால் சந்தாக்களைப் பெறுங்கள், ஆவின் உங்களுக்காக காத்திருக்கிறது."}
        </p>
      </div>
    </motion.div>
  );
};