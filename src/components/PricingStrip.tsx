import { CircleDot } from "lucide-react";

const sizes = [
  { name: "Small Cup", price: 40, icon: "🥤", size: "Perfect snack" },
  { name: "Medium Cup", price: 60, icon: "🥛", size: "Best value" },
  { name: "Premium Bowl", price: 110, icon: "🥗", size: "Premium" },
  { name: "Monthly Pack", price: 2999, icon: "🔥", size: "FREE Delivery!" },
];

const PricingStrip = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          {sizes.map((item, index) => (
            <div key={item.name} className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-primary-foreground">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-sm opacity-90">{item.size}</p>
                </div>
                <span className="text-2xl md:text-3xl font-bold ml-2">₹{item.price}</span>
              </div>
              {index < sizes.length - 1 && (
                <CircleDot className="hidden md:block w-4 h-4 text-primary-foreground/50 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingStrip;