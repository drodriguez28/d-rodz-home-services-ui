import { useNavigate } from "react-router-dom";
import { InfoCard } from "../reuse/InfoCard";
import { HeroSection } from "../reuse/HeroSection";
import { ContactCard } from "../reuse/ContactCard";
import ServiceAreaMap from "../reuse/ServiceAreaMap";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 px-4">
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <HeroSection
          title="Professional Home Services"
          description="We focus on delivering quality home services tailored to your needs in Metro Atlanta. From professional painting to expert electrical work, we handle all your essential home improvements."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mb-8 max-w-4xl mx-auto">
        <InfoCard
          imgSrc="/images/painting-home.png"
          title="Painting"
          description="Professional interior and exterior painting services to transform your home."
          horizontal={false}
          onButtonClick={() => navigate('/painting')}
        />
        <InfoCard
          imgSrc="/images/electrical-home.png"
          title="Electrical"
          description="Electrical services for residential repairs, installations, and upgrades."
          horizontal={false}
          onButtonClick={() => navigate('/electrical')}
        />
      </div>

      <ContactCard />

      <ServiceAreaMap />

    </div>
  );
}

export default Home;