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
        label: "Promo Hub Templates",
        description: "A quick and easy way to get the contents of your Rest ID's Campaign Common Data",
        url: "http://betmgm-phtools.entaingroup.corp/promohub-templates/",
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719800334/projects/promohub-templates_sqll09.png",
        createdBy: "Amancio Mulliet"
    },
    {
        label: "PAT UAT Images",
        description: "Easily get required images for your PAT needs",
        url: "http://betmgm-phtools.entaingroup.corp/sc-pat-images/",
        image: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1719800331/projects/pat-uat_a8xzkb.png",
        createdBy: "Amancio Mulliet"
    },
    {
        label: "Carousel Scheduler",
        description: "This tool helps the team to track and update future, ongoing, and past promotions with carousel components.",
        url: "http://betmgm-phtools.entaingroup.corp/carousel-scheduler/",
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
                        projects.map((project, index) => (
                            <ProjectCard
                                {...project}
                                key={index}
                            />))
                    }
                </div>
            </div>
        </section>
    )
}