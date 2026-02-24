import { useNavigate } from "react-router-dom";
import { InfoCard } from "../reuse/InfoCard";
import { HeroSection } from "../reuse/HeroSection";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@drozhomeservices.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <p className="text-3xl font-bold text-yellow-400 mb-4">Call us or email us to get your FREE ESTIMATE today!</p>
        <a
          href="tel:404-573-3704"
          className="inline-block bg-red-800 hover:bg-red-900 text-white text-xl px-8 py-3 rounded transition mb-4"
        >
          Call Us: 404-573-3704
        </a>
        <div>
          <a href="mailto:info@drozhomeservices.com" className="block text-lg text-red-800 hover:text-red-900 transition break-all mt-6">
            info@drozhomeservices.com
          </a>
          <button
            onClick={handleCopyEmail}
            className="mt-4 bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded transition flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
            </svg>
            {copied ? '✓ Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-12 bg-stone-400">
        <img src="/images/metro-atl.png" alt="Metro Atlanta Service Area" className="max-w-2xl w-full rounded shadow-lg" />
      </div>
    </div>
  );
}

export default Home;