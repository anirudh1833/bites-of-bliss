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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Image */}
          <a href="#" className="flex items-center gap-2">
             <img 
               src="/logo.png" 
               alt="Bites of Bliss Logo" 
               className="h-12 w-auto object-contain md:h-16" 
             />
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
            className="btn-primary text-sm px-6 py-2.5 shadow-md"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
