import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn relative">
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
        className="fixed top-24 right-12 text-black/10"
      >
        <MessageSquare size={48} />
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="fixed bottom-20 left-12 text-black/10"
      >
        <Mail size={40} />
      </motion.div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <Input
                placeholder={t.form.name}
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t.form.email}
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder={t.form.message}
                className="w-full min-h-[150px]"
              />
            </div>
            <Button className="w-full">{t.form.submit}</Button>
          </form>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "en" ? "Address" : "முகவரி"}
                    </h3>
                    <p className="text-muted-foreground">{t.info.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "en" ? "Phone" : "தொலைபேசி"}
                    </h3>
                    <p className="text-muted-foreground">{t.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "en" ? "Email" : "மின்னஞ்சல்"}
                    </h3>
                    <p className="text-muted-foreground">{t.info.email}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
            {/* Add your map component here */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">
                {language === "en" ? "Map Loading..." : "வரைபடம் ஏற்றுகிறது..."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
