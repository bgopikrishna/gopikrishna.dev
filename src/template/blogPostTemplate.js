import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import './blogPostTemplate.css';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { createTwitterIntent } from '../utils/misc';
import LinkToPages from '../components/extras/LinkToPages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const blogPostTemplate = props => {
  const title = props.data.markdownRemark.frontmatter.title;
  const tags = props.data.markdownRemark.frontmatter.tags;
  // const slug = props.data.markdownRemark.frontmatter.path;

  const date = props.data.markdownRemark.frontmatter.date;

  const htmlData = props.data.markdownRemark.html;
  const timeToRead =
    ' 🕒 ' + props.data.markdownRemark.timeToRead + ' min read';
  // const disqusConfig = {
  //   shortname: 'bgopikrishna',
  //   config: { identifier: slug, title },
  // };

  const twitterShareUrl = createTwitterIntent(title, [], props.path);

  return (
    <Layout containerType="fluid">
      <SEO title={title} />
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{title}</h1>
          <small>
            {tags.map(item => (
              <span key={item}>
                &nbsp;
                <span role="img" aria-labelledby="Tag">
                  🏷️
                </span>
                {item}&nbsp;
              </span>
            ))}
          </small>
          <p style={{ fontSize: '12px', marginTop: '0.8rem' }}>
            {'📅'} {date} | {timeToRead} |{' '}
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
              Share
            </a>
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
      </article>

      <div className="blog-post-share">
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <span>Share this article</span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
      </div>
      <div className="blog-post-contact">
        <h3>Gopi Krishna</h3>
        <p>
          Hello, thanks for the read! If you found this article helpful, have
          constructive feedback, or just want to say hello, connect with me on
          social media or shoot me an email. Thanks in advance!
        </p>
        <SocialIconsGrid></SocialIconsGrid>
      </div>

      <LinkToPages />
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
        tags
      }
      timeToRead
    }
  }
`;

export default blogPostTemplate;
