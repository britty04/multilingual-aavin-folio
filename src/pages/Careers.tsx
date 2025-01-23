import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Building2 } from "lucide-react";

const Careers = () => {
  const { language } = useLanguage();
  const t = translations[language].careers;

  const careerCategories = [
    {
      title: language === "en" ? "Production & Operations" : "உற்பத்தி & செயல்பாடுகள்",
      icon: Building2,
      description: language === "en" 
        ? "Join our state-of-the-art production facilities and help deliver quality dairy products."
        : "எங்கள் நவீன உற்பத்தி வசதிகளில் இணைந்து தரமான பால் பொருட்களை வழங்க உதவுங்கள்.",
      image: "/placeholder.svg"
    },
    {
      title: language === "en" ? "Quality Assurance" : "தர உறுதி",
      icon: Users,
      description: language === "en"
        ? "Ensure the highest standards of quality in our products and processes."
        : "எங்கள் தயாரிப்புகள் மற்றும் செயல்முறைகளில் மிக உயர்ந்த தரத்தை உறுதி செய்யுங்கள்.",
      image: "/placeholder.svg"
    },
    {
      title: language === "en" ? "Logistics & Delivery" : "தளவாடங்கள் & விநியோகம்",
      icon: Briefcase,
      description: language === "en"
        ? "Be part of our efficient supply chain and delivery network."
        : "எங்கள் திறமையான விநியோக வலையமைப்பின் ஒரு பகுதியாக இருங்கள்.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {careerCategories.map((category, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <category.icon className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.jobs.map((job, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
          >
            <CardHeader>
              <CardTitle className="text-xl">{job.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">{job.department}</Badge>
                  <Badge variant="outline">{job.location}</Badge>
                  <Badge>{job.type}</Badge>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                {language === "en" ? "Apply Now" : "விண்ணப்பிக்க"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Careers;