import { HeroSection } from "../reuse/HeroSection";
import { InfoCard } from "../reuse/InfoCard";

export const Painting = () => {
  return (
    <div className="mx-auto mt-10 px-4">
      <HeroSection 
        title="Painting Services"
        description="We specialize in residential painting with over 25 years of experience. Our expert painters deliver quality finishes for interior and exterior projects with attention to detail and precision."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mb-12 max-w-6xl mx-auto mt-12">
        <InfoCard 
          imgSrc="/images/interior-painting.svg"
          title="Interior Painting"
          description="Transform the inside of your home with professional interior painting services."
          horizontal={false}
          showButton={false}
        />
        
        <InfoCard 
          imgSrc="/images/exterior-painting.svg"
          title="Exterior Painting"
          description="Protect and beautify your home's exterior with our expert painting services."
          horizontal={false}
          showButton={false}
        />
      </div>
    </div>
  );
};