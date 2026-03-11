import { Phone, Instagram, Heart, Leaf } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Annathamma Hygienic Fruit Salad" 
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <h3 className="font-display text-2xl text-fresh-green">Annathamma</h3>
              <p className="text-card/70 text-sm flex items-center gap-1">
                <Leaf className="w-3 h-3" /> Freshness You Can Trust
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:8951417769" 
              className="flex items-center gap-2 text-card hover:text-fresh-green transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>8951417769</span>
            </a>
            <a 
              href="https://instagram.com/annathamma_hygenic_fruitsalad" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-card hover:text-dragon-pink transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">@annathamma_hygenic_fruitsalad</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-card/10 text-center">
          <p className="text-card/60 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-watermelon" /> in Bengaluru
          </p>
          <p className="text-card/40 text-xs mt-2">
            © {new Date().getFullYear()} Annathamma Hygienic Fruit Salad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;