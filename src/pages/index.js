import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>THis Heading </h1>
    <a href="#">This is Link</a>
    <Link to="/contact">Go to contact</Link>
  </Layout>
);

export default IndexPage;
