import React from "react";
import { Images } from "../images/images";
import profile from "../../public/images/profile.jpg";

const HeroSection = () => {
  return (
    <div>
      <Images img={profile} />
    </div>
  );
};

export default HeroSection;
