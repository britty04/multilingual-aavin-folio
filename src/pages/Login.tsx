import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  const { language } = useLanguage();
  const t = translations[language].auth.login;

  return (
    <div className="container max-w-lg mx-auto px-4 py-16 animate-fadeIn">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              <img
                src="/placeholder.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              {t.googleButton}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {language === "en" ? "Or continue with" : "அல்லது தொடரவும்"}
                </span>
              </div>
            </div>

            <form className="space-y-4">
              <Input
                type="email"
                placeholder={t.email}
              />
              <Input
                type="password"
                placeholder={t.password}
              />
              <Button className="w-full">{t.submit}</Button>
            </form>

            <div className="text-center space-y-2">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                {t.forgotPassword}
              </Link>
              <div className="text-sm text-muted-foreground">
                {t.noAccount}{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  {language === "en" ? "Sign up" : "பதிவு செய்ய"}
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;