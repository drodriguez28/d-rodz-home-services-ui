import { useNavigate } from "react-router-dom";
import { InfoCard } from "../reuse/InfoCard";
import { HeroSection } from "../reuse/HeroSection";

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

      <div className="text-center mb-12 bg-white p-8 rounded shadow-lg max-w-2xl mx-auto">
        <p className="text-3xl font-bold text-yellow-400 mb-4">Get Your FREE ESTIMATE Today!</p>
        <a
          href="tel:404-573-3704"
          className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition"
        >
          Call Us: 404-573-3704
        </a>
      </div>

      <div className="flex justify-center mb-12 bg-stone-400">
        <img src="/images/metro-atl.png" alt="Metro Atlanta Service Area" className="max-w-2xl w-full rounded shadow-lg" />
      </div>
    </div>
  );
}

export default Home;