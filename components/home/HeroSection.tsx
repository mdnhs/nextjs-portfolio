"use client";
import React, { useState } from "react";
import { Images } from "../images/images";
import profile from "../../public/images/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const HeroSection = () => {
  const [isData, setIsData] = useState();
  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 py-5 ">
      <Images img={profile} />

      <div className=" font-extrabold text-5xl">
        <style global jsx>{`
          .index-module_type__E-SaG::after {
            content: "!>";
          }
        `}</style>
        <p className="text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:from-indigo-200 from-10% dark:via-sky-500 via-30% dark:to-emerald-500">
          {"<Hello! I'm Nazmul,"}
        </p>
        <div className="text-start">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              1000,
              "A Web Developer",
              1000,
              "A Tech Enthusiast",
              1000,
              "A Tech Entrepreneur",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "48px" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="w-[65%]">
        <p className="text-sm font-normal pt-5 text-center">
          I like exploring different web technology-related frameworks. I like
          to solve problems and fix errors. I am always eager to take on a new
          challenge to bring great ideas to life and learn new technologies and
          develop solutions based on them.
        </p>
      </div>
      <div className="flex gap-4">
        <Button
          as={Link}
          href="#"
          radius="full"
          className="dark:bg-light bg-primary  dark:text-primary text-light shadow-lg"
        >
          GET IN TOUCH
        </Button>
        <Button
          as={Link}
          href="#"
          radius="full"
          variant="bordered"
          className="border-primary dark:border-light  dark:text-white text-primary shadow-lg"
        >
          VIEW ALL WORKS
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
