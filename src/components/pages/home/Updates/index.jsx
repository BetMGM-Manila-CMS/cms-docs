import UpdateCard from "./UpdateCard"
import SectionTitle from "@site/src/components/SectionTitle"

export default function Updates({ updates }) {

    return (
        <section className="container">
            <div className="pb-8 px-4 mx-auto max-w-screen-xl sm:pb-16 lg:px-6">
                <SectionTitle >
                    Latest Updates
                </SectionTitle>
                <div className="space-y-8 md:grid lg:grid-cols-2 md:gap-6 md:space-y-0">
                    {
                        updates && (
                            updates.slice(0, 2).map((update, index) => <UpdateCard key={index} update={update} />)
                        )
                    }

                </div>
            </div>
        </section>
    )
}