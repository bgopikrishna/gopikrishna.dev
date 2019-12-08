import React from 'react';
import headerStyles from './header.module.css';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className={headerStyles.logo}>
      <Link to="/">GK!</Link>
    </header>
  );
};

export default Header;
