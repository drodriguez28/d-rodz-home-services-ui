import { Cards } from "../reuse/Cards";
import { InfoCard } from "../reuse/InfoCard";

function Home() {
  return (
    <div className="mx-auto mt-10 px-4">
      {" "}
      {/* 1. Outer container */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        {" "}
        {/* 2. Header container */}
        {/* Add Jumbotron here  */}
        <h1 className="text-3xl font-bold mb-4">Professional Home Services</h1>
        <p className="text-lg">
          We focus on delivering quality home services tailored to your needs. From professional painting to expert electrical work, we handle all your essential home improvements. Our experienced team ensures every project is completed with precision and care, making your house feel like home.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mb-8 max-w-4xl mx-auto">
        {/* 3. InfoCard container */}
        <InfoCard
          imgSrc="/images/profile-pic.png"
          title="Painting"
          description="Professional interior and exterior painting services to transform your home. We handle everything from color consultation to final coat, ensuring clean lines, smooth finishes, and long-lasting results. Our experienced painters work efficiently while protecting your furniture and floors."
          horizontal={false}
        />
        <InfoCard
          imgSrc="/images/profile-pic.png"
          title="Electrical"
          description="Professional electrical services for residential repairs, installations, and upgrades. From troubleshooting outlets and switches to panel upgrades and lighting installations, we ensure your home's electrical system is safe, efficient, and up to code."
          horizontal={false}
        />
      </div>
    </div>
  );
}

export default Home;
