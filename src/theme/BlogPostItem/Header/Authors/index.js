import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemHeaderAuthor from "@theme/BlogPostItem/Header/Author";
import styles from "./styles.module.css";
import authorsData from "@site/config/authors";
import teamData from "@site/config/team";

const isPlural = (array) => array.length > 1;

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({ className }) {
  const {
    metadata: { authors, frontMatter },
    assets,
  } = useBlogPost();
  const { editor, editors } = frontMatter;
  const members = teamData.members;
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({ name }) => !name);

  return (
    <div>
      <div>
        <div className="divider">
          <span className="divider__inner">
            {isPlural(frontMatter.authors) ? "Authors" : "Author"}
          </span>
        </div>
        <div
          className={clsx(
            "margin-top--md margin-bottom--sm",
            imageOnly ? styles.imageOnlyAuthorRow : "row",
            className
          )}
        >
          {authors.map((author, idx) => {
            const authorData = members.find(
              (member) => member.name === author.name
            );

            return (
              <div
                className={clsx(
                  !imageOnly && "col col--6",
                  imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol
                )}
                key={idx}
              >
                <BlogPostItemHeaderAuthor
                  author={{
                    ...authorData,
                    // Handle author images using relative paths
                    imageURL: assets.authorsImageUrls[idx]
                      ? assets.authorsImageUrls[idx]
                      : author.imageURL,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      {editors && (
        <div>
          <div className="divider">
            <span className="divider__inner">
              {isPlural(editors) ? "Editors" : "Editor"}
            </span>
          </div>
          <div
            className={clsx(
              "margin-top--md margin-bottom--sm",
              imageOnly ? styles.imageOnlyAuthorRow : "row",
              className
            )}
          >
            {editors &&
              editors.map((editor, idx) => {
                const editorData = members.find(
                  (memberItem) => memberItem.name === editor.name
                );
                return (
                  <div
                    className={clsx(
                      !imageOnly && "col col--6",
                      imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol
                    )}
                    key={idx}
                  >
                    <BlogPostItemHeaderAuthor
                      author={{
                        ...editorData,
                        // Handle author images using relative paths
                        imageURL: assets.authorsImageUrls[idx]
                          ? assets.authorsImageUrls[idx]
                          : editorData.imageURL,
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
