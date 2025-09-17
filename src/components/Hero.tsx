import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Palette } from "lucide-react";
import heroImage from "@/assets/hero-resin-art.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Premium resin art showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-float">
            <div className="p-2 bg-gradient-accent rounded-full shadow-accent">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Premium RAGA Artistry
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Transform Your Space with{" "}
            <span className="gradient-text">Liquid Art</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Discover the mesmerizing beauty of custom resin creations. From elegant jewelry 
            to stunning furniture and premium epoxy flooring—we craft liquid dreams into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 animate-glow">
              Explore Our Art
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-accent hover:text-accent-foreground transition-bounce">
              Get Quote
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Palette className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Custom Pieces</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;