import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Updates from "@site/src/components/pages/home/Updates"

// import Hero from "@site/src/components/Hero";
import { Hero, HomeFeatures } from "@site/src/components";

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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="CMS Knowledge Hub"
      description="The Official Documentation for BetMGM Creatives Manila CMS Team"
    >
      <Hero />
      <HomeFeatures />
      <Updates />
      {/* <section className="container">
        <div className="pb-8 px-4 mx-auto max-w-screen-xl sm:pb-16 lg:px-6">
          <h2 className="text-center md:text-start">Latest Updates</h2>
          <div className="space-y-8 md:grid lg:grid-cols-2 md:gap-6 md:space-y-0">
            <a href="#" className="flex flex-col items-center rounded-lg bg-white border border-gray-200  shadow dark:bg-neutral-700 dark:border-gray-700 dark:hover:bg-neutral-800 transition md:flex-row">
                <img className="object-cover w-full rounded-t-lg h-64 md:h-full md:w-48 md:rounded-none md:rounded-s-lg mb-0" src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
