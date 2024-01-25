type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  full: boolean;
}

const Hero = ({ title, subtitle, image, full }: HeroProps) => {
  return (
    <section className="hero">
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
      </div>
    </section>
  );
};

export default Hero;
