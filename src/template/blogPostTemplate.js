import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import './blogPostTemplate.css';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { DiscussionEmbed } from 'disqus-react';

const blogPostTemplate = props => {
  const title = props.data.markdownRemark.frontmatter.title;
  const slug = props.data.markdownRemark.frontmatter.path;

  const date = props.data.markdownRemark.frontmatter.date;

  const htmlData = props.data.markdownRemark.html;
  const timeToRead = '☕️' + props.data.markdownRemark.timeToRead + ' min read';
  const disqusConfig = {
    shortname: 'bgopikrishna',
    config: { identifier: slug, title },
  };

  return (
    <Layout containerType="fluid">
      <SEO title={title} />
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{title}</h1>
          <p style={{ fontSize: '12px', marginTop: '0.8rem' }}>
            {'📅'} {date} | {timeToRead}
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
      </article>
      <div className="blog-post-contact">
        <h3>Gopi Krishna</h3>
        <p>
          Hello, thanks for the read! If you found this article helpful, have
          constructive feedback, or just want to say hello, connect with me on
          social media or drop a comment below. Thanks in advance!
        </p>
        <SocialIconsGrid></SocialIconsGrid>
      </div>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        path
      }
      timeToRead
    }
  }
`;

export default blogPostTemplate;
