import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import LinkToPages from '../components/extras/LinkToPages';
import Emoji from '../components/extras/Emoji';

const ContactPage = () => (
  <Layout containerType={'container'}>
    <SEO title="Contact" />
    <section className="contact-page">
      <h2 className="title-2">
        Don't be a stranger, Just say hello
        <Emoji label="wink" emoji="😉"/>
      </h2>
      <div className="contact-content">
        <p>
          If you have any queries or just wanna say 'hello', reach out to me
          via&nbsp;<a href="https://linkedin.com/in/bgopikrishna"><strong>LinkedIn</strong></a> or
          just mail to{' '}
          <a
            href="mailto:b.gopikrishna@hotmail.com"
          >
            <strong>b.gopikrishna@outlook.in</strong>.
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
