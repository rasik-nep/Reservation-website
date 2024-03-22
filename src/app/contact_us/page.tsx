import Maps from "@/components/Maps";
import ContactForm from "@/components/ContactForm";

export default function Page() {
    return <section className="bg-primary-10">
        <h3 className="text-6xl text-center py-5">Contact Us</h3>
        <ContactForm />
        <Maps />
    </section>;
}