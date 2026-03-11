import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import WhyAnnathamma from "@/components/WhyAnnathamma";
import Products from "@/components/Products";
import FruitsGrid from "@/components/FruitsGrid";
import GymQuotes from "@/components/GymQuotes";
import PricingStrip from "@/components/PricingStrip";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Annathamma Hygienic Fruit Salad | Fresh Fruit Salads in Laggere, Bengaluru</title>
        <meta 
          name="description" 
          content="Order fresh, hygienic, daily cut fruit salads in Laggere, Bengaluru. Starting from ₹40. Monthly package ₹2999 with FREE delivery. Call 8951417769. 100% fresh fruits, beetroot, sprouts & more." 
        />
        <meta name="keywords" content="fruit salad Bengaluru, fresh fruit salad Laggere, hygienic fruit salad, fruit bowl delivery, Annathamma fruit salad, healthy snacks Bengaluru, gym diet Bengaluru, monthly fruit package" />
        <meta property="og:title" content="Annathamma Hygienic Fruit Salad | Fresh Daily in Laggere, Bengaluru" />
        <meta property="og:description" content="Fresh, hygienic fruit salads starting from ₹40. Monthly package ₹2999 with FREE delivery! Order now via call or WhatsApp!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://annathamma-fruitsalad.lovable.app" />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <WhyAnnathamma />
        <Products />
        <FruitsGrid />
        <GymQuotes />
        <PricingStrip />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;