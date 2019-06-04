/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import {} from 'gatsby-plugin-react-helmet';
import layoutStyles from './layout.module.css';
import Footer from './footer';

const Layout = ({ children, containerType }) => {
  return (
    <div className={layoutStyles.box}>
      <Navbar toggleDarkMode={() => {}} darkMode={false} />
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
  );
};

Layout.defaultProps = {
  containerType: 'fluid',
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
