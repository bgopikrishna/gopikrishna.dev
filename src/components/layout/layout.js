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
import 'prism-theme-night-owl';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { useAccentColor } from '../../hooks/useAccentColor';
import { accentColorsSet } from '../../constants/constants';



const Layout = ({ children, containerType }) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [accentColor, setColor] = useAccentColor();
  const nextAccentColor = removeItemAndShuffleArray(accentColorsSet, accentColor)[0]

  return (
    <div className={layoutStyles.box}>
      <Navbar
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        accentColor={accentColor}
        changeAccentColor= {() => setColor(nextAccentColor)}
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



function removeItemAndShuffleArray(array, removeItem) {
 return array.filter(item => item !== removeItem).sort(() => Math.random() - 0.5);
}