import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author;
  const initials = name.split(' ').slice(0, 2).map(initial => initial[0].toUpperCase()).join('')
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <div className={clsx('avatar margin-bottom--sm', className)}>
      {/* {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className="avatar__photo mb-0"
            src={imageURL}
            alt={name}
            itemProp="image"
          />
        </MaybeLink>
      )} */}

      {imageURL ?
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className="avatar__photo mb-0"
            src={imageURL}
            alt={name}
            itemProp="image"
          />
        </MaybeLink>
      : <div className="avatar__photo mb-0 flex items-center justify-center bg-gray-100 dark:bg-gray-600">{initials}</div>}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person">
          <div className="avatar__name">
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
          </div>
          {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )}
        </div>
      )}
    </div>
  );
}
