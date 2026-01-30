import { useState } from "react";
import pastries from "@/assets/pastries.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import fruitTart from "@/assets/fruit-tart.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import macarons from "@/assets/macarons.jpg";

type Category = "all" | "pastries" | "cakes" | "cupcakes";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  featured?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Butter Croissants",
    description: "Flaky, golden layers of buttery perfection baked fresh each morning",
    price: "4",
    image: pastries,
    category: "pastries",
    featured: true,
  },
  {
    id: 2,
    name: "Classic Vanilla Cupcakes",
    description: "Light and fluffy vanilla sponge topped with swirled buttercream",
    price: "5",
    image: cupcakes,
    category: "cupcakes",
  },
  {
    id: 3,
    name: "Chocolate Ganache Cake",
    description: "Rich, decadent layers of chocolate cake with silky ganache drip",
    price: "55",
    image: chocolateCake,
    category: "cakes",
    featured: true,
  },
  {
    id: 4,
    name: "Fresh Fruit Tart",
    description: "Buttery pastry shell filled with vanilla cream and seasonal fruits",
    price: "28",
    image: fruitTart,
    category: "pastries",
  },
  {
    id: 5,
    name: "Red Velvet Dream",
    description: "Velvety soft layers with luscious cream cheese frosting",
    price: "48",
    image: redVelvet,
    category: "cakes",
    featured: true,
  },
  {
    id: 6,
    name: "French Macarons (Box of 12)",
    description: "Delicate almond meringue cookies in assorted flavors",
    price: "36",
    image: macarons,
    category: "pastries",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Treats" },
  { key: "pastries", label: "Pastries" },
  { key: "cakes", label: "Cakes" },
  { key: "cupcakes", label: "Cupcakes" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-caramel font-semibold tracking-wide uppercase text-sm mb-3">
            Our Creations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            The Sweet Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each item is baked fresh to order with love and the finest ingredients.
            Prices are starting points—reach out for custom sizes and flavors!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card-bakery overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="badge-featured flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                )}
                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-soft">
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="font-serif text-xl font-bold text-foreground">${item.price}</p>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
