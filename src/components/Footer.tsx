import { Separator } from "@/components/ui/separator";
import ragaLogo from "@/assets/raga-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={ragaLogo} alt="RAGA Design" className="h-8 w-auto" />
              <h3 className="text-xl font-display font-semibold">RAGA Design</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting liquid dreams into timeless RAGA artistry. Transform your world with our premium custom creations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-secondary transition-all-smooth">
                Home
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-secondary transition-all-smooth">
                Services
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-secondary transition-all-smooth">
                About
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary transition-all-smooth">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              <div className="text-primary-foreground/80">Custom Resin Jewelry</div>
              <div className="text-primary-foreground/80">Luxury Furniture</div>
              <div className="text-primary-foreground/80">Epoxy Flooring</div>
              <div className="text-primary-foreground/80">Personalized Gifts</div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 RAGA Design. All rights reserved.
          </div>
          <div className="text-primary-foreground/60 text-sm">
            Made with ❤️ for RAGA art lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;