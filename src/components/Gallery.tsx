import heroImage from "@/assets/hero-fruit-salad.jpg";
import smallCup from "@/assets/small-cup.jpg";
import mediumCup from "@/assets/medium-cup.jpg";
import premiumBowl from "@/assets/premium-bowl.jpg";
import fruitWatermelon from "@/assets/fruit-watermelon.jpg";
import fruitDragonfruit from "@/assets/fruit-dragonfruit.jpg";
import galleryBowlTop from "@/assets/gallery-bowl-top.jpg";
import galleryLifestyle from "@/assets/gallery-lifestyle.jpg";
import galleryPrep from "@/assets/gallery-prep.jpg";
import gallerySuperfood from "@/assets/gallery-superfood.jpg";

const galleryImages = [
  { src: heroImage, alt: "Fresh mixed fruit salad bowl", span: "col-span-2 row-span-2" },
  { src: galleryBowlTop, alt: "Colorful fruit bowl top view", span: "" },
  { src: galleryPrep, alt: "Hygienic fruit preparation", span: "" },
  { src: galleryLifestyle, alt: "Fresh fruit salad in hands", span: "col-span-2" },
  { src: smallCup, alt: "Small fruit cup", span: "" },
  { src: mediumCup, alt: "Medium fruit cup", span: "" },
  { src: gallerySuperfood, alt: "Superfood fruits & vegetables spread", span: "col-span-2" },
  { src: premiumBowl, alt: "Premium round bowl", span: "" },
  { src: fruitWatermelon, alt: "Fresh watermelon", span: "" },
  { src: fruitDragonfruit, alt: "Exotic dragon fruit", span: "col-span-2" },
];

const Gallery = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Fresh <span className="font-display text-gradient-sunset">Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into our fresh, hygienic preparations — made with love daily
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`${image.span} overflow-hidden rounded-2xl group`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
