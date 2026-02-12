import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "South Dublin",
      text: "I ordered a custom gender reveal cake and it was absolutely perfect! The sponge was so moist and the design was exactly what we wanted. It made our special day even more memorable!",
    },
    {
      name: "Mark T.",
      location: "Cherrywood",
      text: "I initially just bought a box of brookies and brownies to try, and wow—I'm officially hooked! As a neighbor, it's dangerous having treats this good so close by. I order for every family get-together now.",
    },
    {
      name: "Emma L.",
      location: "Cabinteely",
      text: "Ordered a 2-tier themed cake for my daughter's 5th birthday. Not only did it look incredible, but the chocolate buttercream was the best I've ever had. Highly recommend Bites of Bliss!",
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-butter/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <span className="badge-featured">Sweet Words</span>
          <h2 className="heading-display text-3xl md:text-4xl font-semibold">
            Loved by Our Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our lovely customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="card-bakery border-none bg-white/80 backdrop-blur-sm h-full">
              <CardContent className="p-8 flex flex-col h-full justify-between space-y-4">
                <div>
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-border/50 mt-auto">
                  <p className="font-serif font-bold text-chocolate">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
