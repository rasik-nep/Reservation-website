"use client"
import { FaAngleDoubleDown } from "react-icons/fa";

type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  full: boolean;
  showScrollButton?: boolean
}

const Hero = ({ title, subtitle, image, full, showScrollButton }: HeroProps) => {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("LandingServiceID");

    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero bg-black-70">
      <img
        src={image}
        alt="Your Image"
        className={`w-full ${full ? 'h-[100vh]' : 'h-[70vh]'}  object-cover opacity-40`}
      />
      <div
        className="h-[100vh] top-[-50px] absolute flex flex-col justify-center items-center w-full"
      >
        <h1 className="text-7xl font-cursive text-bold text-center">{title}</h1>
        {subtitle && <p className="text-xl mt-3 text-center">{subtitle}</p>}

      </div>
      {/* Button placed at the bottom */}
      <div className="absolute bottom-4 right-4 mt-[00px] w-full">
        {full && showScrollButton && <FaAngleDoubleDown
          className="text-white cursor-pointer text-2xl mx-auto animate-bounce"
          onClick={scrollToNextSection}
        />}
      </div>
    </section>
  );
};

export default Hero;
