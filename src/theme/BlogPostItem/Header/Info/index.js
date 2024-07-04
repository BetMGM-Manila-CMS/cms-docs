import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import brandsData from "@site/config/brands";
// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One min read|{readingTime} min read",
        },
        { readingTime }
      )
    );
  };
}
function ReadingTime({ readingTime }) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}
function Date({ date, formattedDate }) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  );
}
function Spacer() {
  return <>{" · "}</>;
}
export default function BlogPostItemHeaderInfo({ className }) {
  const { metadata } = useBlogPost();
  const { date, formattedDate, readingTime, frontMatter } = metadata;
  const { brands } = frontMatter;
  return (
    <div className={clsx(styles.container, "margin-vert--md", className)}>
      <div>
        <Date date={date} formattedDate={formattedDate} />
        {typeof readingTime !== "undefined" && (
          <>
            <Spacer />
            <ReadingTime readingTime={readingTime} />
          </>
        )}
      </div>
      {brands && (
        <div className="flex flex-wrap gap-3 mt-3">
          {brands.map(({ brand }, index) => {
            return (
              <>
                <div key={index}>
                  <div
                    className="flex items-center h-full p-3 space-x-3 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow rtl:space-x-reverse rtl:divide-x-reverse dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-neutral-800 outline-offset-2 hover:outline-1 hover:outline outline-primary"
                    role="alert"
                  >
                    <img
                      className="w-5 h-5 p-0 m-0"
                      src={brandsData[brand]?.iconUrl}
                    />
                    <p className="m-0 overflow-hidden text-sm font-normal ps-3 text-ellipsis line-clamp-2">
                      {brandsData[brand]?.label}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
      <div></div>
    </div>
  );
}
