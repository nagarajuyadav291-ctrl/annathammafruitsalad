import fruitApple from "@/assets/fruit-apple.jpg";
import fruitBanana from "@/assets/fruit-banana.jpg";
import fruitOrange from "@/assets/fruit-orange.jpg";
import fruitPapaya from "@/assets/fruit-papaya.jpg";
import fruitWatermelon from "@/assets/fruit-watermelon.jpg";
import fruitPineapple from "@/assets/fruit-pineapple.jpg";
import fruitDragonfruit from "@/assets/fruit-dragonfruit.jpg";
import fruitKiwi from "@/assets/fruit-kiwi.jpg";
import fruitGrapes from "@/assets/fruit-grapes.jpg";
import fruitPomegranate from "@/assets/fruit-pomegranate.jpg";
import fruitMango from "@/assets/fruit-mango.jpg";
import fruitAvocado from "@/assets/fruit-avocado.jpg";
import fruitDates from "@/assets/fruit-dates.jpg";
import veggieBeetroot from "@/assets/veggie-beetroot.jpg";
import sproutsMix from "@/assets/sprouts-mix.jpg";

const fruits = [
  { name: "Apple", image: fruitApple, label: "Fresh & Handpicked" },
  { name: "Banana", image: fruitBanana, label: "Energy Booster" },
  { name: "Orange", image: fruitOrange, label: "Vitamin C Rich" },
  { name: "Papaya", image: fruitPapaya, label: "Digestive Power" },
  { name: "Watermelon", image: fruitWatermelon, label: "Hydration King" },
  { name: "Pineapple", image: fruitPineapple, label: "Tropical Freshness" },
  { name: "Dragon Fruit", image: fruitDragonfruit, label: "Exotic Superfood" },
  { name: "Kiwi", image: fruitKiwi, label: "Vitamin Powerhouse" },
  { name: "Grapes", image: fruitGrapes, label: "Antioxidant Rich" },
  { name: "Pomegranate", image: fruitPomegranate, label: "Iron Booster" },
  { name: "Mango", image: fruitMango, label: "King of Fruits" },
  { name: "Avocado", image: fruitAvocado, label: "Healthy Fats • 160 Cal" },
  { name: "Dates", image: fruitDates, label: "Natural Energy • 277 Cal" },
  { name: "Beetroot", image: veggieBeetroot, label: "Iron & Stamina • 43 Cal" },
  { name: "Sprouts Mix", image: sproutsMix, label: "High Protein • 31 Cal" },
];

const FruitsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-card" id="fruits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Fruits & Superfoods We <span className="font-display text-gradient-fresh">Use</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Fresh & handpicked daily from local markets — packed with calories & nutrition for your fitness goals 💪
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {fruits.map((fruit, index) => (
            <div 
              key={fruit.name}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={fruit.image} 
                  alt={`Fresh cut ${fruit.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-3">
                <h3 className="text-card font-semibold text-center text-sm">{fruit.name}</h3>
                <p className="text-card/70 text-xs text-center">{fruit.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FruitsGrid;
