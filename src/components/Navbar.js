import React from 'react';
import navbarStyle from './Navbar.module.css';
import { Link } from 'gatsby';

const Navbar = ({ title = 'GK' }) => {
  return (
    <div className={navbarStyle.navsection}>
      <div className={navbarStyle.logo}>
        <a href="/">GK</a>
      </div>
      <nav>
        <ul className={navbarStyle.navbar}>
          <li className={navbarStyle.navitem}>
            <Link className={navbarStyle.navlink} to="/about">
              About
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <Link className={navbarStyle.navlink} to="/404">
              Projects
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <Link className={navbarStyle.navlink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
