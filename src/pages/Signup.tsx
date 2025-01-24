import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Lock, User, UserPlus, LogIn } from "lucide-react";

const Signup = () => {
  const { language } = useLanguage();
  const t = translations[language].auth.signup;

  return (
    <div className="container max-w-lg mx-auto px-4 py-16 animate-fadeIn">
      <Card className="border-2">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold">{t.title}</CardTitle>
          <CardDescription className="text-base">{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Button variant="outline" className="w-full hover:bg-muted/50">
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
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={t.name}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder={t.email}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder={t.password}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder={t.confirmPassword}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="w-full">
                <UserPlus className="mr-2 h-5 w-5" />
                {t.submit}
              </Button>
            </form>

            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                {t.hasAccount}{" "}
                <Link 
                  to="/login" 
                  className="text-primary hover:underline inline-flex items-center"
                >
                  <LogIn className="mr-1 h-4 w-4" />
                  {language === "en" ? "Sign in" : "உள்நுழைய"}
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;