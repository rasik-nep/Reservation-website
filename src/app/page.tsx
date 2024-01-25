import LandingServices from "@/components/LandingServices";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";

export default function Home() {
  return (<div className="bg-black-70">
    <Hero title={"Because it must be flawless"} subtitle={"EMBRACE YOUR UNIQUE STYLE"} image={'./lady-photo.jpeg'} full={true}></Hero>
    <LandingServices></LandingServices>
    {/* <Guide></Guide>
    <Features></Features>
    <GetApp></GetApp> */}
  </div>
  )
}
