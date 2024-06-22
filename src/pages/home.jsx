import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Updates from "@site/src/components/pages/home/Updates";
import Brands from "@site/src/components/pages/home/Brands";
import Tools from "@site/src/components/pages/home/Tools";

// import Hero from "@site/src/components/Hero";
import { Hero, HomeFeatures } from "@site/src/components";

export default function Home({ recentPosts }) {
  console.log(recentPosts);
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="CMS Knowledge Hub"
      description="The Official Documentation for BetMGM Creatives Manila CMS Team"
    >
      <Hero />
      <HomeFeatures />
      <Tools />
      <Brands />
      <Updates updates={recentPosts} />
    </Layout>
  );
}
