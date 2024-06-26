import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import ErrorBoundary from "@docusaurus/ErrorBoundary";

import clsx from "clsx";
import styles from "./index.module.css";

import quickLinksData from "@site/config/quicklink/index.json";
import { enableMapSet } from "immer";

const getLabelId = (label) =>
  label
    .replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .toLowerCase()
    .replaceAll("  ", " ")
    .replaceAll(" ", "-");

const QuickLinkIcon = ({ brand }) => {
  const icons = {
    betmgm:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
    borgata:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729426/svg/brands/borgata_ms2oh6.svg",
    partycasino:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729430/svg/brands/partycasino_ziqhts.svg",
    partypoker:
      "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729434/svg/brands/partypoker_zm9fse.svg",
    wof: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729438/svg/brands/wof_zglu4s.svg",
  };

  return icons[brand] ? (
    <img className="p-0 m-0 w-7 h-7" src={icons[brand]} />
  ) : null;
};

const QuickLinkLabel = ({ depth, label }) => {
  const headingTags = ["h2", "h3", "h4", "h5", "h6", "p"];
  const textSizes = ["text-4xl", "text-3xl", "text-2xl", "text-xl", "text-md"];

  const HeadingTag = headingTags[depth] || "p";
  const textSize = textSizes[depth] || "text-md";

  return (
    <HeadingTag
      className={`mb-4 tracking-tight font-bold text-gray-900 dark:text-white ${textSize}`}
    >
      {label}
    </HeadingTag>
  );
};

const QuickLinksList = ({ quickLinks, depth = 0 }) => {
  return (
    <>
      {quickLinks
        ? quickLinks.map((quickLink, index) => {
            return (
              <>
                <div className="max-w-screen-md" key={index}>
                  <div
                    className="relative top-[-60px] invisible"
                    id={getLabelId(quickLink.label)}
                  />
                  {quickLink._template !== "quickLink" ? (
                    <QuickLinkLabel depth={depth} label={quickLink.label} />
                  ) : null}
                  {quickLink.links && quickLink._template ? (
                    <>
                      <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-3 lg:grid-cols-4">
                        {quickLink.links.map((link, index) => {
                          return link._template === "quickLink" ? (
                            <Link to={link.url} target="_blank" key={index}>
                              <div
                                className="flex items-center h-full p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow rtl:space-x-reverse rtl:divide-x-reverse dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-neutral-800 outline-offset-2 hover:outline-1 hover:outline outline-primary"
                                role="alert"
                              >
                                {link.brand ? (
                                  <QuickLinkIcon brand={link.brand} />
                                ) : null}
                                <p className="m-0 overflow-hidden text-sm font-normal  ps-4 text-ellipsis line-clamp-2">
                                  {link.label}
                                </p>
                              </div>
                            </Link>
                          ) : null;
                        })}
                      </div>
                    </>
                  ) : null}
                  {quickLink.links ? (
                    <QuickLinksList
                      quickLinks={quickLink.links}
                      depth={depth + 1}
                    />
                  ) : null}
                </div>
              </>
            );
          })
        : null}
    </>
  );
};

const JumpLinks = ({ quickLinks }) => {
  return (
    <>
      {quickLinks
        ? quickLinks.map((quickLink, index) => {
            return (
              <>
                {quickLink._template !== "quickLink" ? (
                  <a
                    href={`#${getLabelId(quickLink.label)}`}
                    key={index}
                    className="border-[1px] border-white rounded-full px-3 py-1 text-white hover:border-primary transition-colors hover:bg-gray-100 hover:dark:bg-[transparent]"
                  >
                    {quickLink.label}
                  </a>
                ) : null}
                {quickLink.links ? (
                  <JumpLinks quickLinks={quickLink.links} />
                ) : null}
              </>
            );
          })
        : null}
    </>
  );
};

export default function QuickLinks() {
  const { siteConfig } = useDocusaurusContext();

  const location = useLocation();

  const params = location.search
    ? location.search
        .replace("?", "")
        .split("&")
        .reduce((params, param) => {
          const [key, value] = param.split("=");
          params[key] = value;
          return params;
        }, {})
    : {};

  const { group } = params;
  const quickLinks = group
    ? quickLinksData.quickLinksGroup.filter(
        (data) => data.label.toLowerCase() === group
      )
    : [quickLinksData.quickLinksGroup[0]];

  return (
    <Layout
      title="Quick Links"
      description="Collection of frequently used Sitecore links, tools, and previews"
    >
      <section
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1717638160/hero-bg_mkts99.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed"
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          <div className="mb-4">
            <details className="daisy-dropdown dropdown-start tracking-normal">
              <summary className="text-white daisy-btn daisy-btn-sm md:daisy-btn-md bg-primary hover:bg-gray-600">
                {quickLinks[0].label[0].toUpperCase() +
                  quickLinks[0].label.slice(1)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </summary>
              <ul className="p-2 daisy-shadow daisy-menu daisy-dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-2 shadow">
                {quickLinksData.quickLinksGroup.map((quickLink, index) => (
                  <li className="font-normal text-white" key={index}>
                    <Link
                      to={`/quick-links?group=${quickLink.label
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {quickLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <h1 className="inline-flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-primary">
            Quick Links
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
            Collection of frequently used Sitecore links, tools, and previews
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <JumpLinks quickLinks={quickLinks} />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <QuickLinksList quickLinks={quickLinks} />
      </section>
    </Layout>
  );
}
