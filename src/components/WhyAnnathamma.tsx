import { Sparkles, Shield, Clock, IndianRupee, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "100% Fresh Fruits",
    description: "Handpicked daily from local markets",
    color: "text-fresh-green",
    bgColor: "bg-fresh-green/10",
  },
  {
    icon: Shield,
    title: "Hygienic Preparation",
    description: "Clean kitchen, safe handling",
    color: "text-kiwi",
    bgColor: "bg-kiwi/10",
  },
  {
    icon: Clock,
    title: "Daily Cut Fruits",
    description: "Freshly prepared every morning",
    color: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    icon: IndianRupee,
    title: "Affordable Prices",
    description: "Starting from just ₹40",
    color: "text-watermelon",
    bgColor: "bg-watermelon/10",
  },
  {
    icon: Heart,
    title: "Local & Trusted",
    description: "Loved by Bengaluru customers",
    color: "text-dragon-pink",
    bgColor: "bg-dragon-pink/10",
  },
];

const WhyAnnathamma = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Why <span className="font-display text-gradient-fresh">Annathamma</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            We believe in serving freshness you can taste and trust
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="fruit-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAnnathamma;