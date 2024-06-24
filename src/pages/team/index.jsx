import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CarouselSchedule from "../../components/pages/team/CarouselSchedule";
import Gallery from "@site/src/components/pages/team/Gallery";
import QA from "@site/src/components/pages/team/QA";
import Members from "@site/src/components/pages/team/Members";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/components";
import Link from "@docusaurus/Link";

function GridItem({ className, children }) {
  return (
    <div
      className={`p-4 bg-white border border-gray-200 rounded-lg shadow lg:p-6 dark:bg-neutral-700 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

export default function () {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Team"
      description="All things about the team, weekly schedules, monthly assignments and learn more about every one in the team."
      wrapperClassName="overflow-hidden"
    >
      <Hero className="pb-[20vw] -mb-[20vw] relative">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primary">
            BetMGM Manila<br />
            CMS Team
          </h1>
        </div>
      </Hero>
      {/* <div className="relative mt-8">
        <img
          src="https://res.cloudinary.com/dlfu36fiw/image/upload/v1719036668/team/team-cutout-2_u3r6pt.png"
          className="w-screen -mb-[25vw]"
          alt=""
        />
      </div> */}
      <Gallery />
      <QA />
      <Members />
    </Layout>
  );
}
