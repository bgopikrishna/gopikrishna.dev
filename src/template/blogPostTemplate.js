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
import ToC from '../components/extras/ToC';

const blogPostTemplate = props => {
  const {
    date,
    title,
    tags,
    cover,
    coverImageCredits,
  } = props.data.markdownRemark.frontmatter;

  const { html, timeToRead, headings } = props.data.markdownRemark;
  const { pageContext } = props;

  const { next, prev } = pageContext;

  const twitterShareUrl = createTwitterIntent(title, [], props.path);

  return (
    <Layout containerType="fluid">
      <SEO postNode={props.data.markdownRemark} postSEO />
      <article className="blog-post">
        <ToC headings={headings} />
        <header className="blog-post-header">
          <h1 className="blog-post-title ">{title}</h1>
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
          <p style={{ fontSize: '0.75rem', marginTop: '0.8rem' }}>
            <Emoji lable="date published" emoji="📅" /> {date} |{' '}
            <Emoji label="time to read" emoji="🕕" /> {timeToRead} minutes
          </p>
          <img
            src={cover}
            alt={`${title} cover`}
            loading="lazy"
            className="blog-post-coverimage"
          />
          <small
            className="blog-post-coverimage-credits"
            dangerouslySetInnerHTML={{ __html: coverImageCredits }}></small>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="blog-post-content"></div>
        <hr />
      </article>

      {/* <div className="blog-post-share">
        Found this article usefull, share it on &nbsp;
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          twitter&nbsp;
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div> */}

      <div className="blog-post-contact">
        <h3>Gopi Krishna</h3>
        <p>
          Hello, thanks for the read! If you found this article helpful, have
          constructive feedback, or just want to say hello, connect with me on
          twitter or shoot me an email. Thanks in advance!
        </p>
        <SocialIconsGrid></SocialIconsGrid>
      </div>

      <div className="blog-post-more-articles">
        <h3>More articles</h3>
        <ul>
          {prev && (
            <li>
              {' '}
              <Link to={prev.node.frontmatter.path}>
                ➡ {prev.node.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              {' '}
              <Link to={next.node.frontmatter.path}>
                ➡ {next.node.frontmatter.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        path
        tags
        cover
        coverImageCredits
        description
      }
      timeToRead
      excerpt
    }
  }
`;

export default blogPostTemplate;
