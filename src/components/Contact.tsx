import { Phone, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-card" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Order <span className="font-display text-gradient-fresh">Fresh</span> Fruit Salad Now
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Call us or WhatsApp to place your order. We deliver freshness to your doorstep!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:8951417769" 
              className="cta-primary text-xl py-4 px-8"
            >
              <Phone className="w-6 h-6" />
              Call: 8951417769
            </a>
            <a 
              href="https://wa.me/918951417769?text=Hi! I'd like to order a fruit salad" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-primary-foreground font-semibold text-xl transition-all duration-300 hover:shadow-hover hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Order
            </a>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="fruit-card">
              <MapPin className="w-8 h-8 text-fresh-green mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground">Laggere, Bengaluru, Karnataka</p>
            </div>
            <div className="fruit-card">
              <Clock className="w-8 h-8 text-orange mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Fresh Daily</h3>
              <p className="text-muted-foreground">Morning to Evening</p>
            </div>
            <div className="fruit-card">
              <Instagram className="w-8 h-8 text-watermelon mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Follow Us</h3>
              <a 
                href="https://instagram.com/annathamma_hygenic_fruitsalad" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-watermelon hover:underline"
              >
                @annathamma_hygenic_fruitsalad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;