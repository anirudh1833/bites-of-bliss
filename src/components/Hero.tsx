import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-mint rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blush rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <span className="inline-block badge-featured mb-2">
              ✨ Baked with Love
            </span>
            <h1 className="heading-hero text-foreground">
              Handcrafted Sweetness <br />
              <span className="text-gradient">from Our Home to Yours</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Every cake tells a story, every bite a memory. We create artisan 
              baked goods with the finest ingredients and a whole lot of heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#menu"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Explore Our Menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#custom-cake"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary-foreground hover:bg-secondary transition-all duration-300 font-semibold"
              >
                Order Custom Cake
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img
                  src={heroCake}
                  alt="Beautiful signature wedding cake with pink roses"
                  className="w-full h-auto object-cover aspect-square"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-card">
                  <p className="text-sm font-medium text-muted-foreground">Our Signature</p>
                  <p className="font-serif text-lg font-semibold text-foreground">Rose Petal Cake</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-butter rounded-full opacity-60 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mint rounded-full opacity-70 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
