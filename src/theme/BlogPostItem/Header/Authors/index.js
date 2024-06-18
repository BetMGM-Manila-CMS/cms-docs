import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';
import styles from './styles.module.css';
import authorsData from "@site/config/authors"

const isPlural = (array) => array.length > 1;

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({ className }) {
  const {
    metadata: { authors, frontMatter },
    assets,
  } = useBlogPost();
  const {editor} = frontMatter
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({ name }) => !name);
  return (
    <div>
      <div>
        <div className='divider'><span className='divider__inner'>{isPlural(frontMatter.authors) ? 'Authors' : 'Author'}</span></div>
        <div
          className={clsx(
            'margin-top--md margin-bottom--sm',
            imageOnly ? styles.imageOnlyAuthorRow : 'row',
            className,
          )}>
          {authors.map((author, idx) => (
            <div
              className={clsx(
                !imageOnly && 'col col--6',
                imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
              )}
              key={idx}>
              <BlogPostItemHeaderAuthor
                author={{
                  ...author,
                  // Handle author images using relative paths
                  imageURL: assets.authorsImageUrls[idx] ? assets.authorsImageUrls[idx] : author.imageURL,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {
        frontMatter.instructors && (
          <div>
            <div className='divider'><span className='divider__inner'>{isPlural(frontMatter.instructors) ? 'Instructors' : 'Instructor'}</span></div>
            <div
              className={clsx(
                'margin-top--md margin-bottom--sm',
                imageOnly ? styles.imageOnlyAuthorRow : 'row',
                className,
              )}>
              {frontMatter.instructors && frontMatter.instructors.map((author, idx) => (
                <div
                  className={clsx(
                    !imageOnly && 'col col--6',
                    imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
                  )}
                  key={idx}>
                  <BlogPostItemHeaderAuthor
                    author={{
                      ...author,
                      // Handle author images using relative paths
                      imageURL: assets.authorsImageUrls[idx] ? assets.authorsImageUrls[idx] : author.imageURL,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
}
