import bakerPortrait from "@/assets/baker-portrait.jpg";

const MeetBaker = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={bakerPortrait}
                  alt="Sarah, the passionate baker"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-3xl -z-10" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl px-6 py-4 shadow-card">
              <p className="font-serif text-3xl font-bold text-primary-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Years of Baking</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block text-caramel font-semibold tracking-wide uppercase text-sm">
              The Heart Behind the Kitchen
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Meet Sarah, <br />
              <span className="text-blush-dark">Your Home Baker</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What started as a childhood love for licking cake batter has blossomed 
                into a passion that fills our home with the most heavenly aromas. 
                From baking birthday cakes for neighbors to crafting wedding centerpieces, 
                every creation comes straight from the heart.
              </p>
              <p>
                I believe in using only the finest ingredients—real butter, 
                farm-fresh eggs, and vanilla beans that have traveled from 
                Madagascar. Because when it comes to sweetness, 
                <span className="font-semibold text-foreground"> quality is never optional</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-mint/50 rounded-2xl px-5 py-3">
                <p className="font-serif font-semibold text-mint-dark">100%</p>
                <p className="text-sm text-muted-foreground">Handmade</p>
              </div>
              <div className="bg-blush/50 rounded-2xl px-5 py-3">
                <p className="font-serif font-semibold text-blush-dark">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-primary/30 rounded-2xl px-5 py-3">
                <p className="font-serif font-semibold text-primary-foreground">Fresh</p>
                <p className="text-sm text-muted-foreground">Daily Baked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBaker;
