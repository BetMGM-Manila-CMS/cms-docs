import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Updates from "@site/src/components/pages/home/Updates"
import HomeFeatures from "@site/src/components/pages/home/HomeFeatures"

// import Hero from "@site/src/components/Hero";
// import { Hero, HomeFeatures } from "@site/src/components";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

// not used
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/builds/assets"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home({ recentPosts }) {
  console.log(recentPosts)
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="CMS Knowledge Hub"
      description="The Official Documentation for BetMGM Creatives Manila CMS Team"
    >
      <section
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1717638160/hero-bg_mkts99.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#fff"
        }}
        className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed -mb-32"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div
            className="inline-flex justify-between items-center py-1 px-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white"
          >
            BetMGM Creatives Manila
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none dark:text-white md:text-5xl lg:text-6xl text-primary">
            CMS Team Hub
          </h1>
          <p className="mb-24 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
            This hub will be your go-to resource for navigating CMS
            development at BetMGM Creatives Manila. Packed with insights, best
            practices, and troubleshooting tips.
          </p>
        </div>
      </section>
      <HomeFeatures />
      {/* <div className="p-6 rounded-lg bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition">
      <div className=""></div>
      </div> */}
      <Updates updates={recentPosts} />
    </Layout>
  );
}
