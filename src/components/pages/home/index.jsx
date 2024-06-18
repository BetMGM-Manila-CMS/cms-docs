import Layout from "@theme/Layout";
import { Hero, HomeFeatures } from "@site/src/components";


export default function Home({ recentPosts }) {
    return (
        <Layout
            title="CMS Knowledge Hub"
            description="The Official Documentation for BetMGM Creatives Manila CMS Team"
        >
            <Hero />
            <HomeFeatures />
        </Layout>
    )
}