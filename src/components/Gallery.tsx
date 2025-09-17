import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Share2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import krishnaArt from "@/assets/gallery/krishna-resin-art.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Religious Art", "Custom Jewelry", "Furniture", "Epoxy Flooring", "Corporate Gifts"];

  const artworks = [
    {
      id: 1,
      title: "Krishna Divine Art",
      description: "Handcrafted resin art featuring Lord Krishna with intricate detailing and vibrant colors",
      image: krishnaArt,
      category: "Religious Art",
      technique: "Resin Casting",
      size: "6\" diameter",
      featured: true
    }
  ];

  const filteredArtworks = activeFilter === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Our <span className="gradient-text">Artistic Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty and craftsmanship in every piece we create. 
            Each artwork tells a story through liquid artistry.
          </p>
        </div>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-all-smooth ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-primary"
                    : "border-primary/20 hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group hover:shadow-elegant transition-all-smooth border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-all-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all-smooth"></div>
                
                {artwork.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all-smooth">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-background/50">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-background/50">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-all-smooth">
                    {artwork.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {artwork.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {artwork.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Technique:</span>
                    <span className="font-medium">{artwork.technique}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium">{artwork.size}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More stunning pieces coming soon...
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
            Commission Your Piece
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;