import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout containerType="container">
      <SEO title="Blog" />
      <div className="blog">My Blog</div>
      {posts &&
        posts.map(postNode => {
          const { frontmatter } = postNode.node;

          const { title, path } = frontmatter;

          return (
            <div key={path}>
              <Link to={path}>{title}</Link>
            </div>
          );
        })}
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
            date
            path
          }
        }
      }
    }
  }
`;

export default Blog;
