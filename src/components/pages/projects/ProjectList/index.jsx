import ProjectCard from "./ProjectCard"

const projects = [
    /* {
        label: "Carousel QA",
        description: "A tool to check carousel elements locally before applying changes to Sitecore.",
        url: "https://kibeeen.github.io/carousel-checker-v2/",
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719199940/projects/carousel-qa_oye9nl.png",
        createdBy: "Kevin Chaves"
    }, */
    {
        label: "Carousel Scheduler",
        description: "This tool helps the team to track and update future, ongoing, and past promotions with carousel components.",
        url: "https://kibeeen.github.io/carousel-checker-v2/",
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719200786/projects/carousel-scheduler_jzjlky.png",
        createdBy: "Amancio Mulliet"
    }
]

export default function ProjectList() {
    return (
        <section className="container px-4 py-8 mx-auto sm:py-16 lg:px-6">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
                    {
                        projects.map(({ label, description, url, image, createdBy }, index) => (
                            <ProjectCard
                                label={label}
                                description={description}
                                url={url}
                                image={image}
                                createdBy={createdBy}
                                key={index}
                            />))
                    }
                </div>
            </div>
        </section>
    )
}