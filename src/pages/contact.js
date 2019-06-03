import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout/layout"
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />

    <Link to="/about">Go About</Link>
  </Layout>
);

export default ContactPage;
