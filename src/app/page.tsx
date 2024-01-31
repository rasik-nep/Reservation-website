import LandingServices from "@/components/LandingServices";
import Features from "@/components/features";
import Hero from "@/components/Hero";

export default function Home() {
  return (<div className="bg-black-70">
    <Hero title={"Because it has to be flawless."} subtitle={"EMBRACE YOUR UNIQUE STYLE"} image={'./lady-photo.jpeg'} full={true}></Hero>
    <LandingServices></LandingServices>
    <Features></Features>
  </div>
  )
}
