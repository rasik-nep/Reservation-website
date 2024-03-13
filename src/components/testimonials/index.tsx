import Individaul from "./Individaul"

export default function Testimonials() {
    return (
        <section>
            <div className="full-container mt-12 mx-auto md:px-6 py-10 text-black-90">
                <section className="mb-12 text-center">
                    <h2 className="mb-12 text-3xl font-bold">Don&apos;t take our words for it</h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <Individaul />
                        <Individaul />
                        <Individaul />
                    </div>
                </section>
            </div>
        </section>
    )
}
