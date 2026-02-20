import { useNavigate } from "react-router-dom";
import { InfoCard } from "../reuse/InfoCard";
import { HeroSection } from "../reuse/HeroSection";
import { ProfileCard } from "../reuse/ProfileCard";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 px-4">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <HeroSection
          title="Professional Home Services"
          description="We focus on delivering quality home services tailored to your needs. From professional painting to expert electrical work, we handle all your essential home improvements."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mb-8 max-w-4xl mx-auto">
        <InfoCard
          imgSrc="/images/painting-logo.svg"
          title="Painting"
          description="Professional interior and exterior painting services to transform your home."
          horizontal={false}
          onButtonClick={() => navigate('/painting')}
        />
        <InfoCard
          imgSrc="/images/electrical-logo.svg"
          title="Electrical"
          description="Professional electrical services for residential repairs, installations, and upgrades."
          horizontal={false}
          onButtonClick={() => navigate('/electrical')}
        />
      </div>

      {/* Profile Card Example */}
      <div className="flex justify-center mt-12">
        <ProfileCard
          image="/images/deivid.png"
          name="Deivid Rodriguez"
          title="Owner"
          description="25+ years of experience in home services"
          showButtons={false}
        />
      </div>
    </div>
  );
}

export default Home;