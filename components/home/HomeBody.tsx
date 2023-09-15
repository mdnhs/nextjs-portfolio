import HeroSection from "./HeroSection";

const HomeBody = () => {
  return (
    <div className="w-full">
      <div id="home" className="h-96">
        <HeroSection />
      </div>

      <div id="service" className="h-96 w-full bg-primary dark:bg-light">
        Service
      </div>
      <div id="about" className="h-96 w-full bg-primary dark:bg-light">
        About
      </div>
      <div id="contact" className="h-96 w-full bg-primary dark:bg-light">
        Contact
      </div>
      <div></div>
    </div>
  );
};

export default HomeBody;
