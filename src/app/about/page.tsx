import { Jumbotron } from "@/components/Jumbotron";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function Page() {
    return <section className="bg-black-70">
        <Hero title={"About Us"}  image={'./lady-photo.jpeg'} full={false}></Hero>

    </section>;
}

{/* <Jumbotron>
            <h1 className="mx-auto text-center w-[60%] text-6xl font-cursive">About Us</h1>
            <p className="mx-auto text-center w-[60%] text-sm">
                Our owner is a DMV native, with more than a decade of experience as a licensed cosmetologist specializing in healthy hair care maintenance. Time is money, and we respect your time. Our aim is to get you looking fabulous and on you way as soon as possible.
            </p>
            <p className="mx-auto text-center w-[60%] text-sm">
                In today's times the importance of looking and feeling your best cannot be overstated. Here at Sha'Nicole, we offer a variety of unparalleled beauty and self care services to get you looking and feeling your best.                Contact us and see what we can do for you today.
            </p>
            <div className="mx-auto">
                <Button type="button" title="Get in Touch" variant="btn_black_text" />
            </div>
        </Jumbotron> */}