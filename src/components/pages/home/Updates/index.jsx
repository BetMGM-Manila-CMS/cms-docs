import { UpdateCard } from "./UpdateCard"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import blogPlugin from "../../../../../plugins/blog-plugin.js"
import recentPosts from "@site/.docusaurus/docusaurus-plugin-content-blog/updates/updates-archive-681.json"

export default function Updates (props) {
    const docusaurus = useDocusaurusContext();

    console.log('test', recentPosts)

    return (
        <section className="container">
            <div className="pb-8 px-4 mx-auto max-w-screen-xl sm:pb-16 lg:px-6">
                <h2 className="text-center md:text-start">Latest Updates</h2>
                <div className="space-y-8 md:grid lg:grid-cols-2 md:gap-6 md:space-y-0">
                    <UpdateCard />
                </div>
            </div>
        </section>
    )
}