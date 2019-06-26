import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import LinkToPages from '../components/extras/LinkToPages';

const ContactPage = () => (
  <Layout containerType={'container'}>
    <SEO title="Contact" />
    <section className="contact-page">
      <h2>
        Don't be a stranger, Just say hello &nbsp;
        <span role="img" aria-label="wink emoji">
          🤨
        </span>
      </h2>
      <div className="contact-content">
        <p>
          If you have any queries or just wanna say 'hello', reach out to me
          via&nbsp;<a href="https://twitter.com/_bgopikrishna">twitter</a> or
          just mail to{' '}
          <a
            href="mailto:b.gopikrishna@hotmail.com"
            style={{ textTransform: 'lowercase' }}
          >
            b.gopikrishna(at)hotmail.com.
          </a>{' '}
          You can find me at &#8623;
        </p>
      </div>
      <SocialIconsGrid />
    </section>
    <LinkToPages />
  </Layout>
);

export default ContactPage;
