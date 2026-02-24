import { useEffect } from "react";
import { HeroSection } from "../reuse/HeroSection";
import { InfoCard } from "../reuse/InfoCard";
import { Gallery } from "../reuse/Gallery";

export const Painting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paintingImages = [
    "/images/painting-home.png",
    "/images/interior-painting.png",
    "/images/exterior-painting.png",
    "/images/exterior-painting.png",
    "/images/exterior-painting.png",
    "/images/exterior-painting.png",
    "/images/exterior-painting.png",

  ];

  return (
    <div className="mx-auto mt-10 px-4">
      <HeroSection
        title="Painting Services"
        description="We specialize in residential painting with over 25 years of experience. Our expert painters deliver quality finishes for interior and exterior projects with attention to detail and precision."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mb-12 max-w-6xl mx-auto">
        <InfoCard
          imgSrc="/images/interior-painting.png"
          title="Interior Painting"
          description="Transform the inside of your home with professional interior painting services."
          horizontal={false}
          showButton={false}
        />

        <InfoCard
          imgSrc="/images/exterior-painting.png"
          title="Exterior Painting"
          description="Protect and beautify your home's exterior with our expert painting services."
          horizontal={false}
          showButton={false}
        />
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Take a Look at Our Work</h2>
        <Gallery images={paintingImages} />
      </div>
    </div>
  );
};