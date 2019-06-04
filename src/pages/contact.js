import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';

const ContactPage = () => (
  <Layout containerType={'container'}>
    <SEO title="Home" />
    <section className="contact-page">
      <h2>
        Don't be a stranger, Just say hello &nbsp;
        <span role="img" aria-label="wink emoji">
          🤨
        </span>
      </h2>
      <div className="contact-content">
        <p>
          If you have any queries or just wanna say 'hello', reach out to me via
          &nbsp;
          <a href="https://twitter.com/_bgopikrishna">twitter</a> or just mail
          to b.gopikrishna(at)hotmail.com. You can find me at &#8623;
        </p>
      </div>
      <SocialIconsGrid />
    </section>
    <Link to="/">Back To Home</Link>
  </Layout>
);

export default ContactPage;
