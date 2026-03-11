import { Phone, MessageCircle, MapPin, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-fruit-salad.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-fresh-green/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-watermelon/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-up">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={logo} 
                alt="Annathamma Hygienic Fruit Salad Logo" 
                className="w-48 md:w-64 h-auto rounded-2xl shadow-card"
              />
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-fresh-green">
              <Leaf className="w-5 h-5" />
              <span className="text-sm md:text-base font-medium tracking-wide uppercase">100% Fresh & Hygienic</span>
              <Leaf className="w-5 h-5" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight">
              <span className="text-gradient-fresh">Fresh</span> • <span className="text-orange">Hygienic</span> • <span className="text-watermelon">Daily Cut</span>
              <br />
              <span className="text-foreground">Fruit Salads</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Serving fresh, handpicked fruit salads in Bengaluru. Made with love, prepared with care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="tel:8951417769" 
                className="cta-primary text-lg"
              >
                <Phone className="w-5 h-5" />
                Order Now
              </a>
              <a 
                href="https://wa.me/918951417769?text=Hi! I'd like to order a fruit salad" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Order
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground pt-4">
              <MapPin className="w-5 h-5 text-fresh-green" />
              <span>Serving Fresh Fruit Salads in Laggere, Bengaluru</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative" style={{ animationDelay: "0.3s" }}>
            <div className="relative animate-fade-up">
              <div className="absolute inset-0 bg-gradient-fresh rounded-3xl blur-3xl opacity-20 scale-95" />
              <img 
                src={heroImage} 
                alt="Fresh colorful fruit salad bowl with apple, banana, kiwi, dragon fruit and more" 
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-hover"
              />
              
              {/* Floating price badges */}
              <div className="absolute -left-4 top-1/4 bg-card rounded-2xl p-3 shadow-card animate-float hidden md:block">
                <span className="text-fresh-green font-bold text-lg">₹40</span>
                <p className="text-xs text-muted-foreground">Small Cup</p>
              </div>
              
              <div className="absolute -right-4 top-1/3 bg-card rounded-2xl p-3 shadow-card animate-float hidden md:block" style={{ animationDelay: "0.5s" }}>
                <span className="text-orange font-bold text-lg">₹60</span>
                <p className="text-xs text-muted-foreground">Medium Cup</p>
              </div>
              
              <div className="absolute -right-2 bottom-1/4 bg-card rounded-2xl p-3 shadow-card animate-float hidden md:block" style={{ animationDelay: "1s" }}>
                <span className="text-watermelon font-bold text-lg">₹110</span>
                <p className="text-xs text-muted-foreground">Premium Bowl</p>
              </div>
              
              <div className="absolute left-1/4 bottom-4 bg-card rounded-2xl p-3 shadow-card animate-float hidden md:block" style={{ animationDelay: "1.5s" }}>
                <span className="text-dragon-pink font-bold text-lg">₹2999</span>
                <p className="text-xs text-muted-foreground">Monthly Pack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--card))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;