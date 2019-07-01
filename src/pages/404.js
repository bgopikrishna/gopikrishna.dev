import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ padding: '1rem' }}>
      <h1>This page is yet to complete</h1>
      <br />
      <p>
        Meanwhile checkout my <Link to="/projects">projects, </Link>Know{' '}
        <Link to="/about">about</Link> me or <Link to="/">contact</Link> me.
      </p>
      <br />
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
