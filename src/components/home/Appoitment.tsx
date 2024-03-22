export default function Appointment() {
    return (
        <section className="bg-center lg:bg-cover h-[40rem] text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('/image-11.png')" }}>
            <h1 className="text-4xl lg:text-6xl py-2">Let&apos;s make you your best self.</h1>
            <p className="text-base lg:text-2xl relative">
                Book an appointment
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-400"></span>
            </p>
        </section>
    )
}
