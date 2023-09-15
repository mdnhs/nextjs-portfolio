import HeroSection from "./HeroSection";

const HomeBody = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 w-full bg-[url('/images/light.jpg')] dark:bg-none bg-cover bg-opacity-95 bg-no-repeat">
      <div id="home" className="h-fit">
        <HeroSection />
      </div>

      {/* <div id="service" className="h-96 w-full bg-primary dark:bg-light">
        Service
      </div>
      <div id="about" className="h-96 w-full bg-primary dark:bg-light">
        About
      </div>
      <div id="contact" className="h-96 w-full bg-primary dark:bg-light">
        Contact
      </div> */}
    </section>
  );
};

export default HomeBody;
