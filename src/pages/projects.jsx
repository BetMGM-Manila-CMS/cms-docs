import Layout from "@theme/Layout";
import ProjectList from "@site/src/components/pages/projects/ProjectList"
import { Hero } from "@site/src/components"

export default function Projects() {
    return (
        <Layout
            title="Projects"
            description="Collection of projectd created by the team."
        >
            <Hero>
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
                    <h1 className="inline-flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-primary">
                        Projects
                </h1>
                    <p className=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        A Showcase of some of the projects the team have been working on.
                </p>
                </div>
            </Hero>
            <ProjectList />
        </Layout>
    )
}