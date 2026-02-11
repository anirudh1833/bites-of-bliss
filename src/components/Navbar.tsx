import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border/50 py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Image & Text */}
          <a href="#" className="flex items-center gap-4 group">
             <img 
               src="/logo_2.png" 
               alt="Bites of Bliss Logo" 
               className="h-14 w-auto object-contain md:h-20 transition-transform duration-300 group-hover:scale-105" 
             />
             <span className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                Bites of <span className="text-blush-dark">Bliss</span>
             </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </a>
            <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Menu
            </a>
            <a href="#custom-cake" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Custom Cakes
            </a>
          </div>

          {/* CTA */}
          <a
            href="#custom-cake"
            className="btn-primary text-sm px-6 py-2.5 shadow-md hover:shadow-lg transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
