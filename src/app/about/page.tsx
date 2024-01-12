import Jumbotron from "@/components/Jumbotron";
import Button from "@/components/Button";

export default function Page() {
    return <section className="bg-black-70">
        <Jumbotron>
            <h1 className="mx-auto text-center w-[60%] text-5xl fontInter">About Us</h1>
            <p className="mx-auto text-center w-[60%]">
                Our owner is a DMV native, with more than a decade of experience as a licensed cosmetologist specializing in healthy hair care maintenance. Time is money, and we respect your time. Our aim is to get you looking fabulous and on you way as soon as possible.
            </p>
            <p className="mx-auto text-center w-[60%]">
                In today's times the importance of looking and feeling your best cannot be overstated. Here at Sha'Nicole, we offer a variety of unparalleled beauty and self care services to get you looking and feeling your best.                Contact us and see what we can do for you today.
            </p>
            <div className="mx-auto">
                <Button type="button" title="Get in Touch" variant="btn_black_text" />
            </div>
        </Jumbotron>
    </section>;
}