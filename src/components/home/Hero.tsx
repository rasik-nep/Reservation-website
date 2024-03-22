export default function Hero() {
    return (
        <section className='bg-primary-10 md:h-[1332px] w-full'>
            <div className='mx-auto my-auto w-full lg:w-[70%]'>
                <div className='flex flex-row relative md:p-10 lg:p-20 flex-nowrap '>
                    <img src="image-1.png" alt="" className='w-[27rem] h-[30rem] mx-auto z-[10] object-cover' />
                    <div className='absolute md:top-[8rem] md:left-[10rem] w-[15rem] md:w-[20rem] z-[20] text-white'>
                        <p className='text-3xl'>Hi, we are Maya. Ready to create an art form on your body.</p>
                    </div>
                    <div className='hidden md:block absolute  bottom-0 left-[20%]'>
                        <img src="vector-1.png" alt="" className='h-[14rem] w-[14rem] object-cover' />
                    </div>
                    <div className='hidden md:block absolute bottom-[-6%] left-[57%]'>
                        <img src="abstract-2.png" alt="" className='w-[13rem] h-[15rem] object-cover' />
                    </div>
                    <div className='hidden md:block absolute top-0 md:left-[60%] lg:left-[55%]'>
                        <img src="abstract-1.png" alt="" className='lg:w-[15rem] lg:h-[12rem] object-cover' />
                    </div>
                    <div className='hidden md:block absolute top-[12%] left-[63%] z-[20]'>
                        <img src="image-2.png" alt="" className='w-[13rem] lg:w-[16rem] h-[13rem] lg:h-[16rem] object-cover' />
                    </div>
                    <div className='text-black  md:w-[13%] lg:w-[15%] absolute top-[80%] lg:top-[55%] left-[65%] lg:left-[70%] z-[20] '>
                        <p>Maya is natural product-based, hair design & boutique.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mt-20'>
                <div className='md:w-[35%]'>
                    <div className='flex flex-row relative md:p-10 lg:px-0 flex-nowrap'>
                        <img src="image-3.png" alt="" className='w-[25rem] md:w-[19rem] md:h-[24rem]  mx-auto z-[10] object-cover' />
                        <div className='hidden md:block absolute  bottom-[-10%] left-[-20%]'>
                            <img src="vector-2.png" alt="" className='h-[25rem] w-[25rem] object-cover' />
                        </div>
                    </div>
                </div>
                <div className='md:w-[25%]'>
                    <div className='x-auto md:mt-[12rem] '>
                        <p className='text-white text-4xl'>We&apos;re focused.</p>
                        <p className='py-2'>We provide an exceptional service by only focusing on hair designing. Our goal is to provide a different type of experience by using responsible products.</p>
                    </div>
                </div>
                <div className='hidden md:block md:w-[40%] mt-[13rem] lg:px-[10rem] relative'>
                    <div className='flex flex-row relative w-full h-full'>
                        <img src="image-4.png" alt="" className='h-[32rem] w-full lg:h-[32rem] lg:w-[25rem]  mx-auto z-[10] object-cover' />
                        <div className='absolute md:bottom-[-10%] md:left-[-80%] lg:bottom-[10%] lg:left-[-100%]'>
                            <img src="vector-3.png" alt="" className='h-[20rem] w-[30rem] ' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
