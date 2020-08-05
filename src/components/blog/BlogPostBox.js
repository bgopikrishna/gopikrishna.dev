import React from 'react';
import { Link } from 'gatsby';
import Emoji from '../extras/Emoji';

export function BlogPostBox({
  path,
  title,
  description,
  tags,
  date,
  timeToRead,
}) {
  return (
    <div key={path} className="blog-post-box">
      <h2>
        <Link to={path}>{title}</Link>
      </h2>
      <p className="blog-post-description">{description}</p>
      <div className="blog-post-box-extras">
        <p>
          {tags.map(tag => (
            <Link
              key={tag}
              className={`tag ${tag.toLowerCase()}`}
              to={`tags/${tag}`}>
              {tag}
            </Link>
          ))}
        </p>
        <p>
          <Emoji label="date" emoji="📅" />
          {date} |
          <Emoji label="clock" emoji="⌚" />
          {timeToRead + ' min read'}
        </p>
      </div>
    </div>
  );
}
