import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === "en" ? "Message sent successfully!" : "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!");
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn relative min-h-screen">
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
        className="fixed top-24 right-12 text-black/10 hidden lg:block"
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
        className="fixed bottom-20 left-12 text-black/10 hidden lg:block"
      >
        <Send size={40} />
      </motion.div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              <Input
                placeholder={t.form.name}
                className="w-full transition-all duration-200 hover:border-gray-400 focus:ring-2 focus:ring-gray-200"
              />
              <Input
                type="email"
                placeholder={t.form.email}
                className="w-full transition-all duration-200 hover:border-gray-400 focus:ring-2 focus:ring-gray-200"
              />
              <Textarea
                placeholder={t.form.message}
                className="w-full min-h-[150px] transition-all duration-200 hover:border-gray-400 focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-black hover:bg-gray-800 text-white transition-colors duration-200"
            >
              {t.form.submit}
            </Button>
          </form>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-50 p-3 rounded-full group-hover:bg-gray-100 transition-colors duration-200">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "en" ? "Address" : "முகவரி"}
                    </h3>
                    <p className="text-muted-foreground">{t.info.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-50 p-3 rounded-full group-hover:bg-gray-100 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "en" ? "Phone" : "தொலைபேசி"}
                    </h3>
                    <p className="text-muted-foreground">{t.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gray-50 p-3 rounded-full group-hover:bg-gray-100 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
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
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1854275843837!2d76.9613!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnNDAuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;