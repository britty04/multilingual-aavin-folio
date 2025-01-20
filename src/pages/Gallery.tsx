import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [activeTab, setActiveTab] = useState(t.categories[0]);

  // Placeholder images array - in production, this would come from your backend
  const images = Array(12).fill("/placeholder.svg");

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground">{t.description}</p>
      </div>

      <Tabs defaultValue={t.categories[0]} className="w-full">
        <TabsList className="flex justify-center mb-8">
          {t.categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveTab(category)}
              className="px-8"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {t.categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <img
                    src={src}
                    alt={`Gallery ${category} ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      {`${category} ${index + 1}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;