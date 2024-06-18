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

export default function Home({ recentPosts }) {
  console.log(recentPosts)
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="CMS Knowledge Hub"
      description="The Official Documentation for BetMGM Creatives Manila CMS Team"
    >
      <Hero />
      <HomeFeatures />
      <Updates updates={recentPosts} />
    </Layout>
  );
}
