import Image from 'next/image'

const Hero = () => {
  return (
    // <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    //   {/* bg-image */}
    //   <div className='flex flex-col md:flex-row w-[90vw] h-[70vh] items-center mx-auto'>
    //     <div className='h-[100%] w-[50%] bg-green-400 sm:flex sm:items-center'>
    //       <img src="./lady-photo.jpeg" alt="lady photo" className='w-full h-full sm:w-[100%] sm:h-[100%]' />
    //     </div>
    //     <div className='h-[100%] w-[50%] flex flex-col justify-center items-center text-center'>
    //       <h1 className="w-[60%] text-4xl md:text-7xl">The<br /> Sha'Nicole<br /> Difference</h1><br />
    //       <p className="w-[60%] text-xl md:text-2xl font-cursive">Where healthy hair grows and skin glows</p>
    //     </div>
    //   </div>

    // </section>
    <section className="hero">
      <img src="./lady-photo.jpeg" alt="houses on the water" className="w-full" />
      <div
        className="heading-container absolute flex justify-center items-center w-full"
      >
        <h1 className="text-5xl text-white">Your dream vacation starts here</h1>
      </div>
    </section>
  )
}

export default Hero