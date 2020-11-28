import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import { graphql, Link } from 'gatsby';
import './blogPostTemplate.css';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { createTwitterIntent } from '../utils/misc';
import LinkToPages from '../components/extras/LinkToPages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Emoji from '../components/extras/Emoji';

const blogPostTemplate = props => {
  const {
    date,
    title,
    tags,
  } = props.data.markdownRemark.frontmatter;

  const { html, timeToRead } = props.data.markdownRemark;
  const { pageContext } = props;

  const { next, prev } = pageContext;

  const twitterShareUrl = createTwitterIntent(title, [], props.path);

  return (
    <Layout containerType="fluid">
      <SEO postNode={props.data.markdownRemark} postSEO/>

      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title ">{title}</h1>
          <p>
            {tags.map(tag => (
              <Link key={tag} className={`tag ${tag.toLowerCase()}`} to={`tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.8rem' }}>
            <Emoji lable="date published" emoji="📅" /> {date} |{' '}
            <Emoji label="time to read" emoji="🕕" /> {timeToRead} min | &nbsp;&nbsp;
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
              Share &nbsp; <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </article>

      <div className="blog-post-share">
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <span>Share</span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
      </div>
      <div className="blog-post-more-articles">
        {prev && (
          <LinkToPages
            to={prev.node.frontmatter.path}
            arrowIconDirection="left">
            {prev.node.frontmatter.title}
          </LinkToPages>
        )}
        {next && (
          <LinkToPages
            to={next.node.frontmatter.path}
            arrowIconDirection="right">
            {next.node.frontmatter.title}
          </LinkToPages>
        )}
      </div>
      <div className="blog-post-contact">
        <h3>Gopi Krishna</h3>
        <p>
          Hello, thanks for the read! If you found this article helpful, have
          constructive feedback, or just want to say hello, connect with me on
          twitter or shoot me an email. Thanks in advance!
        </p>
        <SocialIconsGrid></SocialIconsGrid>
      </div>
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
      excerpt
    }
  }
`;

export default blogPostTemplate;
