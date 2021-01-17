import React from 'react';
import { Link } from 'gatsby';
import Emoji from '../extras/Emoji';
import './BlogPostBox.css';

export function BlogPostBox({
  path,
  title,
  description,
  tags,
  date,
  timeToRead,
  cover
}) {
  return (
    <div className="blog-post-box-container">
      {/* <Link to={path} className="blog-post-box-cover">
        <img src={cover} alt={`${title} cover`} />
      </Link> */}
      <div key={path} className="blog-post-box">
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
        <p className="blog-post-box-description">{description}</p>
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
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
