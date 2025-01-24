import { Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProcurementSection = () => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-8 py-12 px-4"
    >
      <div className="md:w-1/2">
        <img 
          src="/dairy-farmers.jpg" 
          alt="Dairy Farmers" 
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold">
            {language === "en" ? "Direct Procurement From Farmers" : "விவசாயிகளிடமிருந்து நேரடி கொள்முதல்"}
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {language === "en" 
            ? "Aavin enhances the lives of farmers through direct milk sourcing. A string of hyper local, Farmer maintained milk cooperative societies uplifted the life standard across state's villages. Constant, round the year, weekly income from milk is probably the single dependable life line runs thru any village. Our milk societies empowered women. Educated their children."
            : "ஆவின் நேரடி பால் கொள்முதல் மூலம் விவசாயிகளின் வாழ்க்கையை மேம்படுத்துகிறது. மாநிலத்தின் கிராமங்களில் வாழ்க்கைத் தரத்தை உயர்த்திய உள்ளூர் பால் கூட்டுறவு சங்கங்களின் தொடர். பாலில் இருந்து கிடைக்கும் வாராந்திர வருமானம் ஒரு கிராமத்தின் ஒரே நம்பகமான வாழ்வாதாரம். எங்கள் பால் சங்கங்கள் பெண்களுக்கு அதிகாரம் அளித்தன. அவர்களின் குழந்தைகளுக்கு கல்வி கற்பித்தன."}
        </p>
      </div>
    </motion.div>
  );
};