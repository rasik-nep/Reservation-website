const Hero = () => {
  return (
    <section className="hero">
      <img
        src="./lady-photo.jpeg"
        alt="Your Image"
        className="w-full h-[100vh] object-cover opacity-40"
      />
      <div
        className="h-[100vh] top-[-50px] absolute flex flex-col justify-center items-center w-full "
      >
        <h1 className="text-7xl text-white font-cursive text-bold text-center">Because it must be flawless</h1>
        <p className="text-xl mt-3 text-center">EMBRACE YOUR UNIQUE STYLE</p>
      </div>
    </section>
  );
};

export default Hero;
