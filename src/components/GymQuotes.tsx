import { Dumbbell, Heart, Zap, Flame } from "lucide-react";

const quotes = [
  {
    text: "Eat Clean, Train Dirty. Your body deserves real fuel — not junk.",
    icon: Dumbbell,
    color: "text-fresh-green",
    bgColor: "bg-fresh-green/10",
  },
  {
    text: "Skip the protein shake, grab a fruit bowl. Nature's pre-workout is here.",
    icon: Zap,
    color: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    text: "Fruits + Sprouts + Beetroot = The ultimate calorie-packed power meal.",
    icon: Flame,
    color: "text-watermelon",
    bgColor: "bg-watermelon/10",
  },
  {
    text: "Your muscles need nutrition, not chemicals. Go fresh, go natural.",
    icon: Heart,
    color: "text-dragon-pink",
    bgColor: "bg-dragon-pink/10",
  },
];

const GymQuotes = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Fuel Your <span className="font-display text-gradient-sunset">Fitness</span> 💪
          </h2>
          <p className="section-subtitle mx-auto">
            Perfect for gym lovers, yoga enthusiasts & health-conscious warriors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="fruit-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${quote.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <quote.icon className={`w-7 h-7 ${quote.color}`} />
              </div>
              <p className="text-foreground font-medium text-sm leading-relaxed italic">
                "{quote.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Big CTA for Monthly Package */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="fruit-card bg-gradient-to-r from-fresh-green/5 to-watermelon/5 border-2 border-fresh-green/20">
            <p className="text-2xl md:text-3xl font-display text-foreground mb-3">
              Monthly Fitness Package
            </p>
            <p className="text-muted-foreground mb-2">
              Daily fresh fruit salad + Beetroot + Sprouts delivered to your doorstep
            </p>
            <p className="text-3xl font-bold text-gradient-fresh mb-1">₹2,999/month</p>
            <p className="text-fresh-green font-semibold text-sm mb-4">🚚 FREE Delivery Included</p>
            <a
              href="https://wa.me/918951417769?text=Hi! I'm interested in the Monthly Fitness Package (₹2999)"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary text-lg"
            >
              <Dumbbell className="w-5 h-5" />
              Get Monthly Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymQuotes;
