const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold">
                Bake by <span className="text-blush-dark">bites</span>
              </h3>
              <p className="text-cream/70 leading-relaxed">
                Bringing handcrafted sweetness from our home kitchen to your 
                special moments. Every bite is baked with love.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-blush hover:text-chocolate flex items-center justify-center transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-blush hover:text-chocolate flex items-center justify-center transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Location & Delivery */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Location & Delivery</h4>
              <div className="space-y-3 text-cream/70">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-butter flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-cream font-medium">Home-Based Kitchen</p>
                    <p>Maple Heights, [City Name]</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-butter flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <div>
                    <p className="text-cream font-medium">Delivery Available</p>
                    <p>Within 15km radius. Fee varies.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-butter flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <p className="text-cream font-medium">Free Pickup</p>
                    <p>Scheduled at our home kitchen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <a href="#about" className="text-cream/70 hover:text-butter transition-colors">
                  Meet the Baker
                </a>
                <a href="#gallery" className="text-cream/70 hover:text-butter transition-colors">
                  Our Menu
                </a>
                <a href="#custom-cake" className="text-cream/70 hover:text-butter transition-colors">
                  Custom Cakes
                </a>
              </nav>
              <div className="pt-4">
                <p className="text-sm text-cream/50">Orders require 48-72 hours notice.</p>
                <p className="text-sm text-cream/50">Custom cakes: 1 week minimum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 py-6">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <p className="text-center text-cream/50 text-sm">
            © {new Date().getFullYear()} Bake by bites. Baked with 💛 in [City Name].
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
