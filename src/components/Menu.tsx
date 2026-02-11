import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Importing images from assets
import cupcakesImg from "../assets/cupcakes.jpg";
import cakesImg from "../assets/menu.jpg";
import treatsImg from "../assets/brookies.jpg";
import packagesImg from "../assets/hero-cake.jpg";

const Menu = () => {
  const phoneNumber = "353899721609"; // e.g. 353871234567

  const handleWhatsApp = (item: string) => {
    const message = `Hi! I'd like to enquire about ordering: ${item}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <span className="badge-featured">Our Offerings</span>
          <h2 className="heading-display text-4xl md:text-5xl font-semibold">
            Menu & Price List
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Freshly baked treats for every occasion.
          </p>
          
          {/* Download Button */}
          <div className="pt-4">
            <a href="/menu.pdf" download="BitesOfBliss_Menu.pdf">
              <Button variant="outline" className="gap-2 border-primary text-primary-foreground bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4" />
                Download Full Menu (PDF)
              </Button>
            </a>
          </div>
        </div>

        <Tabs defaultValue="cupcakes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-muted/50 rounded-full mb-8">
            <TabsTrigger value="cupcakes" className="rounded-full py-2">Cupcakes</TabsTrigger>
            <TabsTrigger value="cakes" className="rounded-full py-2">Celebration Cakes</TabsTrigger>
            <TabsTrigger value="treats" className="rounded-full py-2">Cookies & More</TabsTrigger>
            <TabsTrigger value="packages" className="rounded-full py-2">Tiered Packages</TabsTrigger>
          </TabsList>

          {/* Cupcakes Content */}
          <TabsContent value="cupcakes" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Section Image */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-full min-h-[300px]">
                <img src={cupcakesImg} alt="Delicious Cupcakes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Content */}
              <div className="md:col-span-2 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <MenuCard 
                    title="Classic Cupcakes" 
                    price="€30.00" 
                    unit="per dozen"
                    description="Delicious sponge with signature buttercream frosting."
                    onOrder={() => handleWhatsApp("Classic Cupcakes (Dozen)")}
                  />
                  <MenuCard 
                    title="Themed Cupcakes" 
                    price="€35.00" 
                    unit="per dozen"
                    description="Includes multiple icing colors, one basic edible topper, and simple designs."
                    onOrder={() => handleWhatsApp("Themed Cupcakes (Dozen)")}
                  />
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Available Flavours</h4>
                  <p className="text-muted-foreground">Sponge: Vanilla, Chocolate, Strawberry, Red Velvet, Choc Chip, White Choc, M&M.</p>
                  <p className="text-muted-foreground mt-2">Frosting: Vanilla, Chocolate, or Strawberry Buttercream.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Cakes Content */}
          <TabsContent value="cakes" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Section Image */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-full min-h-[300px]">
                <img src={cakesImg} alt="Celebration Cakes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <Card className="border-none shadow-card bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Celebration Cakes</CardTitle>
                    <CardDescription>Perfect for birthdays and special occasions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="p-4 font-serif text-foreground">Size (Feeds)</th>
                            <th className="p-4 font-serif text-foreground">Basic</th>
                            <th className="p-4 font-serif text-foreground">Themed*</th>
                            <th className="p-4"></th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="p-4">6 Inch (6-8)</td>
                            <td className="p-4 font-semibold text-primary-foreground">€40</td>
                            <td className="p-4 font-semibold text-primary-foreground">€45 - €55</td>
                            <td className="p-4 text-right"><Button size="sm" variant="ghost" className="text-chocolate hover:text-chocolate/80 hover:bg-butter" onClick={() => handleWhatsApp("6 Inch Cake")}>Order</Button></td>
                          </tr>
                          <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="p-4">8 Inch (10-14)</td>
                            <td className="p-4 font-semibold text-primary-foreground">€60</td>
                            <td className="p-4 font-semibold text-primary-foreground">€75 - €85</td>
                            <td className="p-4 text-right"><Button size="sm" variant="ghost" className="text-chocolate hover:text-chocolate/80 hover:bg-butter" onClick={() => handleWhatsApp("8 Inch Cake")}>Order</Button></td>
                          </tr>
                          <tr className="hover:bg-muted/20 transition-colors">
                            <td className="p-4">10 Inch (20-24)</td>
                            <td className="p-4 font-semibold text-primary-foreground">€80</td>
                            <td className="p-4 font-semibold text-primary-foreground">€85 - €95</td>
                            <td className="p-4 text-right"><Button size="sm" variant="ghost" className="text-chocolate hover:text-chocolate/80 hover:bg-butter" onClick={() => handleWhatsApp("10 Inch Cake")}>Order</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">* "Themed" includes one theme or special toppers.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Treats Content */}
          <TabsContent value="treats" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Section Image */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-full min-h-[300px]">
                <img src={treatsImg} alt="Cookies and Macarons" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                <MenuCard 
                  title="Brookies" 
                  price="€30.00" 
                  unit="per dozen"
                  description="The ultimate Brownie & Cookie combo."
                  onOrder={() => handleWhatsApp("Brookies (Dozen)")}
                />
                <MenuCard 
                  title="Brownies" 
                  price="€30.00" 
                  unit="per dozen"
                  description="Classic, rich, fudgy brownies."
                  onOrder={() => handleWhatsApp("Brownies (Dozen)")}
                />
                <MenuCard 
                  title="Cookies" 
                  price="€25.00" 
                  unit="per dozen"
                  description="Homemade soft-baked cookies."
                  onOrder={() => handleWhatsApp("Cookies (Dozen)")}
                />
              </div>
            </div>
          </TabsContent>

          {/* Packages Content */}
          <TabsContent value="packages" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Section Image */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-full min-h-[300px]">
                <img src={packagesImg} alt="Tiered Celebration Cakes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                <Card className="card-bakery border-none bg-white/60">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">2-Tier Package</CardTitle>
                    <CardDescription>6 Inch & 8 Inch Cakes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span>Basic Style</span>
                      <span className="font-bold text-chocolate">€105</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span>Themed Style</span>
                      <span className="font-bold text-chocolate">€135</span>
                    </div>
                    <Button className="w-full mt-4" onClick={() => handleWhatsApp("2-Tier Package (6&8)")}>Enquire Now</Button>
                  </CardContent>
                </Card>

                <Card className="card-bakery border-none bg-white/60">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">3-Tier Package</CardTitle>
                    <CardDescription>6 Inch, 8 Inch & 10 Inch Cakes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span>Basic Style</span>
                      <span className="font-bold text-chocolate">€165</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span>Themed Style</span>
                      <span className="font-bold text-chocolate">€195</span>
                    </div>
                    <Button className="w-full mt-4" onClick={() => handleWhatsApp("3-Tier Package (6,8&10)")}>Enquire Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const MenuCard = ({ title, price, unit, description, onOrder }: { title: string, price: string, unit: string, description: string, onOrder: () => void }) => (
  <Card className="card-bakery border-none h-full flex flex-col justify-between">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="font-serif text-xl text-foreground">{title}</CardTitle>
        <div className="text-right">
          <span className="block font-bold text-lg text-chocolate">{price}</span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button variant="secondary" className="w-full hover:bg-butter hover:text-chocolate transition-colors" onClick={onOrder}>
        Order on WhatsApp
      </Button>
    </CardContent>
  </Card>
);

export default Menu;
