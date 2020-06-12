import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout containerType="container">
      <SEO title="Blog" />
      <div className="blog">
        <div className="pageHeader">
          <h2>Blog</h2>
        </div>
        <div className="blog-post-list">
          {posts &&
            posts.map(postNode => {
              const { frontmatter, timeToRead } = postNode.node;

              const { title, path, date, tags } = frontmatter;

              return (
                <Link key={path} to={path} className="blog-post-box">
                  <h3>{title}</h3>
                  <div className="blog-post-box-extras">
                    <p>
                      {' '}
                      {tags.map(item => (
                        <span key={item}>
                          &nbsp;
                          <span role="img" aria-labelledby="Tag">
                            🏷️
                          </span>
                          {item}&nbsp;
                        </span>
                      ))}
                    </p>
                    <p>
                      <span role="img" aria-labelledby="Date">
                        📅
                      </span>{' '}
                      {date} |{' 🕒 ' + timeToRead + ' min read'}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostList {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
          }
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
