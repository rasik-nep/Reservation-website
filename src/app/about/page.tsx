import Features from "@/components/features";

export default function Page() {
    return <section className="bg-primary-10">
        <h3 className="text-6xl text-center py-5">About</h3>
        <div className='mx-auto my-auto w-full lg:w-[70%] bg-primary-10 p-5'>
            <div className='flex flex-col md:flex-row relative md:p-10 lg:p-20 flex-nowrap '>
                <img src="amrita.jpg" alt="" className='w-[15rem] h-[20rem] md:w-[20rem] md:h-[25rem] lg:w-[27rem] lg:h-[30rem] md:mx-auto z-[10] object-cover' />
                <div className='absolute left-[42%] top-[10%] md:top-[20%] md:left-[63%] z-[20]'>
                    <div className="bg-gray-10 w-[13rem] h-[17rem] md:w-[16rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] text-center border-2 md:border-4 border-[#555358] p-5">
                        <h3 className="text-2xl md:text-4xl">Amrita Nepal</h3>
                        <h5 className="text-xl md:text-2xl">CEO and Founder</h5>
                        <p>Amrita founded Maya Brows for helping the community and aksjdhas dkajshd askdjhas d,xkjas</p>
                    </div>
                </div>
                <div className='hidden md:block absolute  bottom-0 left-[20%]'>
                    <img src="vector-1.png" alt="" className='h-[14rem] w-[14rem] object-cover' />
                </div>
            </div>
        </div>
        <Features />
    </section>;
}