import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Factory } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/utils/translations";

const iconMap = {
  Shield,
  Truck,
  Factory,
};

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
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
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600">
                {t.about.description}
              </p>
              <Button variant="outline" className="mt-8">
                {language === "en" ? "Learn More" : "மேலும் அறிய"}
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Aavin Facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quality Commitment Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === "en" ? "Our Commitment to Quality" : "தரத்திற்கான எங்கள் அர்ப்பணிப்பு"}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === "en" 
              ? "We maintain the highest standards of quality and hygiene in our production process, ensuring that every product meets international standards."
              : "எங்கள் உற்பத்தி செயல்முறையில் மிக உயர்ந்த தர மற்றும் சுகாதார தரநிலைகளை பராமரிக்கிறோம், ஒவ்வொரு தயாரிப்பும் சர்வதேச தரநிலைகளை பூர்த்தி செய்கிறது என்பதை உறுதி செய்கிறோம்."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">
                  {item === 1 ? "24/7" : item === 2 ? "100%" : item === 3 ? "50+" : "1M+"}
                </div>
                <p className="text-gray-600">
                  {language === "en"
                    ? item === 1 
                      ? "Quality Monitoring"
                      : item === 2
                      ? "Pure Products"
                      : item === 3
                      ? "Years Experience"
                      : "Happy Customers"
                    : item === 1
                      ? "தர கண்காணிப்பு"
                      : item === 2
                      ? "தூய தயாரிப்புகள்"
                      : item === 3
                      ? "ஆண்டுகள் அனுபவம்"
                      : "மகிழ்ச்சியான வாடிக்கையாளர்கள்"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;