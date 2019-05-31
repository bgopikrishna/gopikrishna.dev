import React, { useState } from 'react';
import navbarStyle from './Navbar.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ title = 'GK' }) => {
  const [nightMode, setNightMode] = useState(false);
  const nightModeIcon = nightMode ? (
    <FontAwesomeIcon icon={faSun} />
  ) : (
    <FontAwesomeIcon icon={faMoon} />
  );
  const nightModeIconStyle = nightMode ? navbarStyle.day : navbarStyle.night;

  return (
    <div className={navbarStyle.navsection}>
      <div className={navbarStyle.logo}>
        <a href="/">GK</a>
      </div>
      <nav>
        <ul className={navbarStyle.navbar}>
          <li className={navbarStyle.navitem}>
            <Link
              className={navbarStyle.navlink}
              to="/about"
              activeClassName={navbarStyle.linkActive}
            >
              About
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <Link
              className={navbarStyle.navlink}
              to="/404"
              activeClassName={navbarStyle.linkActive}
            >
              Projects
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <Link
              className={navbarStyle.navlink}
              to="/contact"
              activeClassName={navbarStyle.linkActive}
            >
              Contact
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <button
              className={`${navbarStyle.nightModeBtn} ${nightModeIconStyle}`}
              to="/contact"
              onClick={() => setNightMode(!nightMode)}
            >
              {nightModeIcon}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
