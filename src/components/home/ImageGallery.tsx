import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [
  { src: "/gallery-1.jpg", alt: "Dairy Farm" },
  { src: "/gallery-2.jpg", alt: "Milk Processing" },
  { src: "/gallery-3.jpg", alt: "Quality Testing" },
  { src: "/gallery-4.jpg", alt: "Packaging" },
  { src: "/gallery-5.jpg", alt: "Distribution" },
  { src: "/gallery-6.jpg", alt: "Retail Store" },
];

export const ImageGallery = () => {
  const { language } = useLanguage();
  
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Our Journey in Pictures" : "படங்களில் எங்கள் பயணம்"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-medium px-4">
                  {language === "en" ? image.alt : `${image.alt} தமிழில்`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};