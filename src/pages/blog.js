import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import './blog.css';
import { BlogPostBox } from '../components/blog/BlogPostBox';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout containerType="container" maxWidth="1080px">
      <SEO title="Blog" />
      <div className="blog">
        <div className="pageHeader">
          <h2 className="title-2">Blog.</h2>
        </div>
        <div className="blog-post-list">
          {posts &&
            posts.map(postNode => {
              const { frontmatter, timeToRead } = postNode.node;

              const { title, path, date, tags, description } = frontmatter;

              return (
                <BlogPostBox
                  key={path}
                  path={path}
                  title={title}
                  description={description}
                  tags={tags}
                  date={date}
                  timeToRead={timeToRead}
                />
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
            description
          }
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
