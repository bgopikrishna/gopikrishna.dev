import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>{data.site.siteMetadata.title}</p>
    <Link to="/">Go to Home</Link>
    <Link to="/">Back To Home</Link>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
