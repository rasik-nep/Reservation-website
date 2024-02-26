import LandingServices from "@/components/LandingServices";
import Features from "@/components/features";
import Hero from "@/components/Hero";
import BookNow from "@/components/BookNow";
import Testimonials from "@/components/Testimonials";
import Maps from "@/components/Maps";

export default function Home() {
  return (<div className="bg-white">
    <Hero title={"Because it has to be flawless."} subtitle={"EMBRACE YOUR UNIQUE STYLE"} image={'./landing-hero.jpg'} full={true} showScrollButton={true}></Hero>
    <LandingServices></LandingServices>
    <Features></Features>
    <BookNow />
    <Testimonials></Testimonials>
    <Maps></Maps>
  </div>
  )
}
