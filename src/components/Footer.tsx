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
            { name: "Careers", path: "/careers" },
            { name: "Contact", path: "/contact" },
          ],
        },
        {
          title: "Support",
          links: [
            { name: "FAQ", path: "/faq" },
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Service", path: "/terms" },
          ],
        },
      ],
      contact: {
        title: "Contact Us",
        address: "123 Dairy Road, Coimbatore, Tamil Nadu",
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
            { name: "வேலைவாய்ப்புகள்", path: "/careers" },
            { name: "தொடர்பு", path: "/contact" },
          ],
        },
        {
          title: "ஆதரவு",
          links: [
            { name: "அடிக்கடி கேட்கப்படும் கேள்விகள்", path: "/faq" },
            { name: "தனியுரிமைக் கொள்கை", path: "/privacy" },
            { name: "சேவை விதிமுறைகள்", path: "/terms" },
          ],
        },
      ],
      contact: {
        title: "தொடர்பு கொள்ள",
        address: "123 பால்பண்ணை சாலை, கோயம்புத்தூர், தமிழ்நாடு",
        phone: "+91 1800-XXX-XXXX",
        email: "contact@aavin.com",
      },
    },
  };

  const content = footerLinks[language];

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold mb-3">{content.contact.title}</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                {content.contact.address}
              </p>
              <p className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                {content.contact.phone}
              </p>
              <p className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                {content.contact.email}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">
              {language === "en" ? "Follow Us" : "எங்களை பின்தொடரவும்"}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
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