import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const scrollToContact = () => {
    const targetElement = document.getElementById("form-contact");

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Scroll lento
      });
    }
  };

  return (
    <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1
              className="text-xl text-white font-bold tracking-tight md:text-6xl xl:text-7xl"
            >
              Brian Belaj
            </h1>
            <h2 className="text-5xl text-white font-bold mb-16">
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <button
              className="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-orange-700 hover:bg-orange-500 md:mr-2 md:mb-0"
              onClick={scrollToContact}
              role="button"
            >
              Contact me
            </button>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="https://i.ibb.co/3Rpd0Sj/cv-image.jpg"
              class="w-full lg:w-2/3 rounded-full shadow-lg dark:shadow-black/20"
              alt="Brian Belaj"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
