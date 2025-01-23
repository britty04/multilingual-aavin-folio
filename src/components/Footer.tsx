import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const { language } = useLanguage();

  const footerLinks = {
    en: {
      sections: [
        {
          title: "Quick Links",
          links: [
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Contact", path: "/contact" },
          ],
        },
        {
          title: "Support",
          links: [
            { name: "FAQ", path: "/faq" },
            { name: "Privacy Policy", path: "/privacy" },
          ],
        },
      ],
      contact: {
        title: "Contact",
        address: "123 Dairy Road, Coimbatore",
        phone: "+91 1800-XXX-XXXX",
        email: "contact@aavin.com",
      },
    },
    ta: {
      sections: [
        {
          title: "விரைவு இணைப்புகள்",
          links: [
            { name: "எங்களை பற்றி", path: "/about" },
            { name: "தயாரிப்புகள்", path: "/products" },
            { name: "தொடர்பு", path: "/contact" },
          ],
        },
        {
          title: "ஆதரவு",
          links: [
            { name: "கேள்விகள்", path: "/faq" },
            { name: "தனியுரிமை", path: "/privacy" },
          ],
        },
      ],
      contact: {
        title: "தொடர்பு",
        address: "123 பால்பண்ணை சாலை, கோயம்புத்தூர்",
        phone: "+91 1800-XXX-XXXX",
        email: "contact@aavin.com",
      },
    },
  };

  const content = footerLinks[language];

  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-medium mb-2">{content.contact.title}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {content.contact.address}
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {content.contact.phone}
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {content.contact.email}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">
              {language === "en" ? "Follow Us" : "பின்தொடரவும்"}
            </h3>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-gray-400 text-xs">
          <p>
            © {new Date().getFullYear()}{" "}
            {language === "en"
              ? "Aavin. All rights reserved."
              : "ஆவின். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
          </p>
        </div>
      </div>
    </footer>
  );
}