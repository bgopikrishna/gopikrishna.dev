/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from './Navbar';
import layoutStyles from './layout.module.css';
import Footer from './footer';

const Layout = ({ children, containerType }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.box}>
        <Navbar />
        <div
          className={
            containerType === 'fluid'
              ? layoutStyles.fluid
              : layoutStyles.container
          }
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
);

Layout.defaultProps = {
  containerType: 'fluid',
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
