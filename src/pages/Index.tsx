import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Factory, Users, Award, Leaf, Milk, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/utils/translations";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const iconMap = {
  Shield,
  Truck,
  Factory,
  Users,
  Award,
  Leaf,
};

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  const products = [
    {
      name: language === "en" ? "Fresh Milk" : "புதிய பால்",
      image: "/dairy-1.jpg",
      description: language === "en" 
        ? "Pure and fresh cow milk" 
        : "தூய்மையான மற்றும் புதிய பசும்பால்",
    },
    {
      name: language === "en" ? "Curd" : "தயிர்",
      image: "/dairy-2.jpg",
      description: language === "en"
        ? "Thick and creamy curd"
        : "கெட்டியான மற்றும் கிரீமி தயிர்",
    },
    {
      name: language === "en" ? "Ghee" : "நெய்",
      image: "/dairy-3.jpg",
      description: language === "en"
        ? "Pure cow ghee"
        : "தூய பசு நெய்",
    },
  ];

  const whoWeServe = [
    {
      title: language === "en" ? "Households" : "வீடுகள்",
      icon: Users,
      description: language === "en"
        ? "Delivering fresh dairy products to families"
        : "குடும்பங்களுக்கு புதிய பால் பொருட்களை வழங்குதல்",
    },
    {
      title: language === "en" ? "Businesses" : "வணிகங்கள்",
      icon: Factory,
      description: language === "en"
        ? "Supplying quality products to businesses"
        : "வணிகங்களுக்கு தரமான பொருட்களை வழங்குதல்",
    },
    {
      title: language === "en" ? "Institutions" : "நிறுவனங்கள்",
      icon: Award,
      description: language === "en"
        ? "Partnering with educational institutions"
        : "கல்வி நிறுவனங்களுடன் கூட்டாண்மை",
    },
  ];

  return (
    <div className="animate-fadeIn relative">
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
        className="fixed top-20 right-10 text-black/10"
      >
        <Milk size={64} />
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
        <Cloud size={48} />
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
          delay: 0.5
        }}
        className="fixed top-40 left-20 text-black/10"
      >
        <Leaf size={32} />
      </motion.div>

      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/dairy-hero.jpg')] opacity-20 bg-cover bg-center" />
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

      {/* Our Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Our Products" : "எங்கள் தயாரிப்புகள்"}
            </h2>
            <p className="text-gray-600">
              {language === "en"
                ? "Discover our range of quality dairy products"
                : "எங்கள் தரமான பால் பொருட்களை கண்டறியுங்கள்"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      {language === "en" ? "Learn More" : "மேலும் அறிய"}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === "en" ? "Who We Serve" : "நாங்கள் யாருக்கு சேவை செய்கிறோம்"}
          </h2>
          <p className="text-gray-600">
            {language === "en"
              ? "Delivering quality dairy products to various segments"
              : "பல்வேறு பிரிவுகளுக்கு தரமான பால் பொருட்களை வழங்குகிறோம்"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoWeServe.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
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
              <p className="text-lg text-gray-600 mb-8">
                {t.about.description}
              </p>
              <Button variant="outline">
                {language === "en" ? "Learn More" : "மேலும் அறிய"}
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/dairy-facility.jpg"
                alt="Aavin Facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;