import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gem, Sofa, Home } from "lucide-react";
import jewelryImage from "@/assets/resin-jewelry.jpg";
import furnitureImage from "@/assets/resin-furniture.jpg";
import flooringImage from "@/assets/epoxy-flooring.jpg";

const Services = () => {
  const services = [
    {
      icon: Gem,
      title: "Custom Resin Gifts & Accessories",
      description: "Handcrafted earrings, bracelets, necklaces, and personalized gifts that capture memories in timeless resin art.",
      image: jewelryImage,
      features: ["Custom Jewelry", "Personalized Gifts", "Memorial Pieces", "Corporate Gifts"],
    },
    {
      icon: Sofa,
      title: "Luxury Resin Furniture",
      description: "Statement furniture pieces that blend artistry with functionality, creating focal points for any space.",
      image: furnitureImage,
      features: ["Dining Tables", "Coffee Tables", "Wall Art", "Custom Designs"],
    },
    {
      icon: Home,
      title: "Premium Epoxy Flooring",
      description: "Professional-grade epoxy flooring solutions that transform ordinary spaces into extraordinary environments.",
      image: flooringImage,
      features: ["Residential Flooring", "Commercial Spaces", "Garage Floors", "Decorative Finishes"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Our <span className="gradient-text">Signature Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate personal pieces to grand architectural installations, 
            we bring liquid artistry to every corner of your world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all-smooth border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-all-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-background/90 rounded-full shadow-primary">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-display group-hover:text-primary transition-all-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-bounce border-primary/20">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;