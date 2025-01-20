import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = {
  en: [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "FAQ", path: "/faq" },
    { title: "Gallery", path: "/gallery" },
    { title: "Careers", path: "/careers" },
    { title: "Contact", path: "/contact" },
  ],
  ta: [
    { title: "முகப்பு", path: "/" },
    { title: "தயாரிப்புகள்", path: "/products" },
    { title: "கேள்விகள்", path: "/faq" },
    { title: "படத்தொகுப்பு", path: "/gallery" },
    { title: "வேலைவாய்ப்புகள்", path: "/careers" },
    { title: "தொடர்பு", path: "/contact" },
  ],
};

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en");
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">
                {language === "en" ? "Aavin" : "ஆவின்"}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10"
              >
                {item.title}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="default" className="ml-2">
                {language === "en" ? "Login" : "உள்நுழைய"}
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-3 py-2">
              <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                <Globe className="h-5 w-5" />
              </Button>
              <Link to="/login" className="w-full">
                <Button variant="default" className="w-full">
                  {language === "en" ? "Login" : "உள்நுழைய"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}