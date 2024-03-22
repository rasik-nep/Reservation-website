import TextComponent from "./TextComponent";
import { FEATURES_DISPLAY_SECTION } from "../../constants"

export default function Features() {
    return (
        <section className="relative py-12 md:py-12 bg-white overflow-hidden text-black-90">
            <div className="relative container mx-auto px-4">
                <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-12">
                    <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6">Our Features</h2>
                    <p className="max-w-xl text-xl text-gray-800 tracking-tight">
                        Your preferred destination for dependable and convenient beauty services awaits at Maya Brows Bar. Our dedication is to offer you flawless experiences and top-notch beauty treatments to meet all your aesthetic needs.</p>
                </div>
                <div className="relative">
                    {FEATURES_DISPLAY_SECTION.map((social) => (
                        <TextComponent index={social.index} firstSpan={social.firstSpan} secondSpan={social.secondSpan} descriptionShort={social.descriptionShort} descriptionLong={social.descriptionLong} imgLink={social.imgLink} key={social.index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
