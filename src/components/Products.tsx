import { Phone, Star, Truck } from "lucide-react";
import smallCup from "@/assets/small-cup.jpg";
import mediumCup from "@/assets/medium-cup.jpg";
import premiumBowl from "@/assets/premium-bowl.jpg";
import monthlyPackage from "@/assets/monthly-package.jpg";

const products = [
  {
    name: "Small Fruit Cup",
    price: 40,
    description: "Perfect for a quick healthy bite",
    fruits: "Apple, Banana, Papaya, Watermelon",
    image: smallCup,
    color: "fresh-green",
    gradient: "from-fresh-green to-kiwi",
    popular: false,
    isSpecial: false,
  },
  {
    name: "Medium Fruit Cup",
    price: 60,
    description: "Best value, balanced and filling",
    fruits: "Apple, Banana, Pineapple, Orange, Kiwi",
    image: mediumCup,
    color: "orange",
    gradient: "from-orange to-coral",
    popular: true,
    isSpecial: false,
  },
  {
    name: "Premium Round Bowl",
    price: 110,
    description: "Premium bowl with exotic fruits & superfoods",
    fruits: "Dragon Fruit, Kiwi, Apple, Grapes, Pineapple",
    image: premiumBowl,
    color: "watermelon",
    gradient: "from-watermelon to-dragon-pink",
    popular: false,
    isSpecial: false,
  },
  {
    name: "Monthly Package",
    price: 2999,
    description: "🔥 Daily fresh fruit salad for the entire month! FREE Delivery included",
    fruits: "All Fruits, Beetroot, Sprouts, Premium Mix",
    image: monthlyPackage,
    color: "dragon-pink",
    gradient: "from-dragon-pink to-watermelon",
    popular: false,
    isSpecial: true,
  },
];

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Our <span className="font-display text-gradient-sunset">Fruit Salads</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose your perfect portion of freshness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className={`relative fruit-card overflow-hidden group ${product.popular ? "ring-2 ring-orange ring-offset-4 ring-offset-background" : ""} ${product.isSpecial ? "ring-2 ring-watermelon ring-offset-4 ring-offset-background" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-orange text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  Best Seller
                </div>
              )}
              {product.isSpecial && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-watermelon text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse-soft">
                  🔥 Special Offer
                </div>
              )}

              {/* Product image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`} />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                  <span className={`price-badge bg-gradient-to-r ${product.gradient} text-base px-3 py-1 whitespace-nowrap`}>
                    ₹{product.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm">{product.description}</p>

                {product.isSpecial && (
                  <div className="flex items-center gap-2 text-fresh-green text-sm font-semibold">
                    <Truck className="w-4 h-4" />
                    FREE Delivery Included
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {product.fruits.split(", ").map((fruit) => (
                    <span 
                      key={fruit}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {fruit}
                    </span>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/918951417769?text=Hi! I'd like to order a ${product.name} (₹${product.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full cta-primary bg-gradient-to-r ${product.gradient} mt-3 text-sm`}
                >
                  <Phone className="w-4 h-4" />
                  Order {product.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
