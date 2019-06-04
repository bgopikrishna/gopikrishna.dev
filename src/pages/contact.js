import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';

const ContactPage = () => (
  <Layout containerType={'container'}>
    <SEO title="Home" />
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quae!
        Facere amet explicabo et accusantium quos id eum esse a veniam
        asperiores magni itaque, atque distinctio consequatur animi perferendis
        hic!
      </div>
      <SocialIconsGrid />
    </div>
    <Link to="/">Back To Home</Link>
  </Layout>
);

export default ContactPage;
