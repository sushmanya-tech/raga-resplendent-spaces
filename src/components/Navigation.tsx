import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Mail, Youtube, MessageCircle } from "lucide-react";
import ragaLogo from "@/assets/raga-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={ragaLogo} alt="RAGA Design" className="h-12 w-auto md:h-16 lg:h-20" />
          </div>

          {/* Company Name */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold gradient-text animate-glow tracking-wider">
              RAGA DESIGNS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-all-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-2">
              <Button variant="hero" size="sm" asChild>
                <a href="tel:+919901810658">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/919901810658">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-all-smooth font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" className="w-full" asChild>
                <a href="tel:+919901810658">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://wa.me/919901810658">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;