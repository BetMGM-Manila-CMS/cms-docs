import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Updates from "@site/src/components/pages/home/Updates";
import Brands from "@site/src/components/pages/home/Brands";
import Tools from "@site/src/components/pages/home/Tools";
import Features from "@site/src/components/pages/home/Features";
import { Hero } from "@site/src/components"

// import Hero from "@site/src/components/Hero";
// import { Hero, HomeFeatures } from "@site/src/components";

export default function Home({ recentPosts }) {
  console.log(recentPosts);
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="CMS Knowledge Hub"
      description="The Official Documentation for BetMGM Creatives Manila CMS Team"
    >
      <Hero className="pb-24 -mb-44">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          <div className="inline-flex items-center justify-between px-4 py-1 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white">
            BetMGM Creatives Manila
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primary">
            CMS Team Hub
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
            This hub will be your go-to resource for navigating CMS development
            at BetMGM Creatives Manila. Packed with insights, best practices,
            and troubleshooting tips.
          </p>
        </div>
      </Hero>
      <Features />
      <Tools />
      <Brands />
      <Updates updates={recentPosts} />
    </Layout>
  );
}
