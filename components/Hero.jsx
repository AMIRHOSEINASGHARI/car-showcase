"use client";

// Components
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero relative">
      <div className="pt-20 px-6">
        <h1 className="hero-title">
          Find, book, rent a car. Quick and super easy!
        </h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          corrupti sequi accusamus non eveniet id.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue mt-10 text-white rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:absolute xl:top-10 xl:right-0 pl-6 xl:p-0">
        <div className="xl:w-[750px]">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
