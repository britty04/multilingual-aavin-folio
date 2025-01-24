import { Factory } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProcessingSection = () => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col md:flex-row-reverse items-center gap-8 py-12 px-4 bg-gray-50"
    >
      <div className="md:w-1/2">
        <img 
          src="/dairy-processing.jpg" 
          alt="Hygienic Processing" 
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <Factory className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold">
            {language === "en" ? "Hygienic Processing" : "சுகாதாரமான செயலாக்கம்"}
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {language === "en"
            ? "Pall Company, the famous joint at the rib of RS Puram was established in 70s to cater the needs of Coimbatorians. The new plant at Pacchapalayam is a state of art facility that employs fully automated, digitally controlled, strictly monitored processes to preserve the goodness of milk and pack it in tiny conveniences. The Factory also caters to the needs of the neighboring milk unions and private vendors."
            : "ஆர்.எஸ். புரத்தின் புகழ்பெற்ற பால் கம்பெனி 70களில் கோயம்புத்தூர் மக்களின் தேவைகளை பூர்த்தி செய்ய நிறுவப்பட்டது. பச்சபாளையத்தில் உள்ள புதிய ஆலை முற்றிலும் தானியங்கி, டிஜிட்டல் கட்டுப்பாட்டில் உள்ள, கண்டிப்பாக கண்காணிக்கப்படும் செயல்முறைகளைப் பயன்படுத்தி பாலின் நன்மைகளை பாதுகாக்கிறது. தொழிற்சாலை அருகிலுள்ள பால் சங்கங்கள் மற்றும் தனியார் விற்பனையாளர்களின் தேவைகளையும் பூர்த்தி செய்கிறது."}
        </p>
      </div>
    </motion.div>
  );
};