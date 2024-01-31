"use client"

type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  full: boolean;
}

const Hero = ({ title, subtitle, image, full }: HeroProps) => {

  // const scrollToNextSection = () => {
  //   const nextSection = document.getElementById("LandingServiceID");

  //   if (nextSection) {
  //     window.scrollTo({
  //       top: nextSection.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <section className="hero bg-black-70">
      <img
        src={image}
        alt="Your Image"
        className={`w-full ${full ? 'h-[100vh]' : 'h-[70vh]'}  object-cover opacity-40`}
      />
      <div
        className="h-[100vh] top-[-50px] absolute flex flex-col justify-center items-center w-full "
      >
        <h1 className="text-7xl font-cursive text-bold text-center">{title}</h1>
        {subtitle && <p className="text-xl mt-3 text-center">{subtitle}</p>}
        {/* {full && <button
          className=" text-black font-bold py-2 px-4 cursor-pointer"
          onClick={scrollToNextSection}
        >
          Scroll Down
        </button>} */}
      </div>
    </section>
  );
};

export default Hero;
