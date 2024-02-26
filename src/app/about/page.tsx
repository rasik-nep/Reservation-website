import Hero from "@/components/Hero";

export default function Page() {
    return <section className="bg-black-70">
        <Hero title={"About Us"} image={'./about_page.jpg'} full={true} showScrollButton={false} subtitle="Step into 'Maya Brows Bar' for expert eyebrow shaping, tinting, and threading services. Our family-run salon is dedicated to enhancing your natural beauty with personalized care and attention to detail."></Hero>
        {/* <section className="h-[30vh] w-full bg-red-100"> */}

        {/* </section> */}
    </section>;
}