import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";

const sourceData = {
  outlook: {
    iconUrl: "https://www.cdnlogo.com/logos/m/33/microsoft-outlook.svg",
  },
  skype: {
    iconUrl: "https://www.cdnlogo.com/logos/s/67/skype.svg",
  },
  teams: {
    iconUrl: "https://www.cdnlogo.com/logos/m/22/microsoft-teams.svg",
  },
  sharepoint: {
    iconUrl: "https://www.cdnlogo.com/logos/m/94/microsoft-sharepoint.svg",
  },
};

export default function BlogPostItemHeaderTitle({ className }) {
  const { metadata, isBlogPostPage, frontMatter } = useBlogPost();
  const { source } = frontMatter;
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? "h1" : "h2";

  console.log(sourceData[source.platform].iconUrl);

  return (
    <div className="flex justify-between">
      <TitleHeading
        className={clsx(styles.title, className)}
        itemProp="headline"
      >
        {isBlogPostPage ? (
          title
        ) : (
          <Link itemProp="url" to={permalink}>
            {title}
          </Link>
        )}
      </TitleHeading>
      {source &&
        (source.url ? (
          <a href={source.url} className="pl-4">
            <img
              src={sourceData[source.platform].iconUrl}
              className="min-w-[40px] md:min-w-[60px] h-[40px] md:h-[60px]"
            />
          </a>
        ) : (
          <div className="pl-4">
            <img
              src={sourceData[source.platform].iconUrl}
              className="min-w-[40px] md:min-w-[60px] h-[40px] md:h-[60px]"
            />
          </div>
        ))}
    </div>
  );
}
