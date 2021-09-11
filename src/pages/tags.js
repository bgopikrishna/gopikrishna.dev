import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
import './blog.css';
import { BlogPostBox } from '../components/blog/BlogPostBox';

const Tags = ({ data, tag }) => {
  const filterTag = tag || '';
  const posts = data.allMarkdownRemark.edges.filter(item =>
    item.node.frontmatter.tags
      .map(item => item.toLowerCase())
      .includes(filterTag.toLowerCase())
  );

  return (
    <Layout containerType="container">
      <SEO title="Blog" />
      <div className="blog">
        <div className="pageHeader">
          <h2 className="title-2">
            Articles tagged as{' '}
            <Link to={`tags/${tag}`} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </Link>
          </h2>
        </div>
        <div className="blog-post-list">
          {posts &&
            posts.map(postNode => {
              const { frontmatter, timeToRead, excerpt } = postNode.node;

              const {
                title,
                path,
                date,
                tags,
                description,
                cover,
              } = frontmatter;

              return (
                <BlogPostBox
                  key={path}
                  path={path}
                  title={title}
                  description={description || excerpt}
                  tags={tags}
                  date={date}
                  timeToRead={timeToRead}
                  cover={cover}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Tags {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
            description
            cover
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

export default Tags;
