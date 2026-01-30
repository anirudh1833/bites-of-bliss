const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Sweet Home <span className="text-blush-dark">Bakery</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Menu
            </a>
            <a href="#custom-cake" className="text-muted-foreground hover:text-foreground transition-colors">
              Custom Cakes
            </a>
          </div>

          {/* CTA */}
          <a
            href="#custom-cake"
            className="btn-primary text-sm px-4 py-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
