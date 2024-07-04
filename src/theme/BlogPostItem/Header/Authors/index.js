import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemHeaderAuthor from "@theme/BlogPostItem/Header/Author";
import styles from "./styles.module.css";
import authorsData from "@site/config/authors";
import membersData from "@site/config/members";

const isPlural = (array) => array.length > 1;

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({ className }) {
  const {
    metadata: { authors, frontMatter },
    assets,
  } = useBlogPost();
  const { editor, instructedBy } = frontMatter;
  const members = membersData.member;
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({ name }) => !name);

  console.log(membersData);

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

            console.log(authorData);
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
      {/* {instructedBy && (
        <div>
          <div className="divider">
            <span className="divider__inner">
              {isPlural(instructedBy) ? "Instructors" : "Instructor"}
            </span>
          </div>
          <div
            className={clsx(
              "margin-top--md margin-bottom--sm",
              imageOnly ? styles.imageOnlyAuthorRow : "row",
              className
            )}
          >
            {instructedBy &&
              instructedBy.map(({ member }, idx) => {
                const memberData = members.find(
                  (memberItem) => memberItem.name === member
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
                        ...memberData,
                        // Handle author images using relative paths
                        imageURL: assets.authorsImageUrls[idx]
                          ? assets.authorsImageUrls[idx]
                          : memberData.imageURL,
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )} */}
    </div>
  );
}
