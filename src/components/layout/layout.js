/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import {} from 'gatsby-plugin-react-helmet';
import layoutStyles from './layout.module.css';
import Footer from './footer';
import { useDarkMode } from '../../hooks/useDarkmode';

const Layout = ({ children, containerType }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className={layoutStyles.box}>
      <Navbar
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
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
