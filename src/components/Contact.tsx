import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Instagram, Mail, Youtube, Facebook, MapPin, Clock, Palette, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Ready to discuss your project?",
      action: "9901810658",
      href: "tel:+919901810658",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Alternative Number",
      description: "Call us anytime",
      action: "8088932026",
      href: "tel:+918088932026",
      color: "text-secondary",
    },
    {
      icon: Instagram,
      title: "Follow Us",
      description: "See our latest creations",
      action: "@raga_designs",
      href: "https://www.instagram.com/raga_designs?igsh=MTY5ZGFzZGN5YWNwMg==",
      color: "text-accent",
    },
    {
      icon: Mail,
      title: "Email Us", 
      description: "Get a detailed quote",
      action: "Send Message",
      href: "mailto:ragadesigns@gmail.com",
      color: "text-secondary",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us instantly",
      action: "Send WhatsApp",
      href: "https://wa.me/919901810658",
      color: "text-green-500",
    },
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com/@ragadesigns?si=sAMUG1hR2xIEKcSV", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/share/1DKtmN3uLs/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/raga_designs?igsh=MTY5ZGFzZGN5YWNwMg==", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-gradient-accent rounded-full shadow-accent animate-float">
              <Palette className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Let's Create Together
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Bring Your <span className="gradient-text">Vision to Life?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it's a custom piece or a complete transformation, 
            we're here to turn your ideas into stunning resin reality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all-smooth border-0 bg-card/50 backdrop-blur-sm text-center"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-subtle rounded-full shadow-primary group-hover:scale-110 transition-bounce">
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-display">{method.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-bounce"
                  asChild
                >
                  <a href={method.href}>
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Service Areas</CardTitle>
              </div>
              <CardDescription>
                We proudly serve customers across India with custom resin creations and professional installations.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-secondary" />
                <CardTitle className="text-lg">Working Hours</CardTitle>
              </div>
              <CardDescription>
                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: By appointment only
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-display font-semibold mb-6">Follow Our Journey</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-bounce shadow-primary hover:shadow-accent"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;