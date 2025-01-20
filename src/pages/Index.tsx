import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    hero: {
      title: "Pure & Fresh Dairy Products",
      subtitle: "Bringing Quality to Every Home",
      cta: "Explore Products",
    },
    about: {
      title: "About Aavin Coimbatore",
      description:
        "For over decades, Aavin has been delivering pure and fresh dairy products to millions of households. Our commitment to quality and hygiene makes us the most trusted dairy brand in Coimbatore.",
    },
  },
  ta: {
    hero: {
      title: "தூய்மையான & புதிய பால் பொருட்கள்",
      subtitle: "ஒவ்வொரு வீட்டிற்கும் தரமான பொருட்கள்",
      cta: "தயாரிப்புகளை பார்க்க",
    },
    about: {
      title: "ஆவின் கோயம்புத்தூர் பற்றி",
      description:
        "பல தசாப்தங்களாக, ஆவின் லட்சக்கணக்கான வீடுகளுக்கு தூய்மையான மற்றும் புதிய பால் பொருட்களை வழங்கி வருகிறது. தரம் மற்றும் சுகாதாரத்தில் எங்கள் அர்ப்பணிப்பு எங்களை கோயம்புத்தூரின் மிகவும் நம்பகமான பால் பிராண்டாக ஆக்குகிறது.",
    },
  },
};

const Index = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90"
            >
              {t.hero.cta} <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Background pattern or image can be added here */}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;