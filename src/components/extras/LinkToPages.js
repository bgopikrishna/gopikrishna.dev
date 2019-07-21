import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LinkToPages = ({ to, arrowIconDirection, children }) => {
  const icon = arrowIconDirection === 'left' ? faArrowLeft : faArrowRight;

  return (
    <Link to={to}>
      <FontAwesomeIcon icon={icon} /> {children}
    </Link>
  );
};

LinkToPages.defaultProps = {
  to: '/',
  arrowIconDirection: 'left',
  children: 'Back To Home',
};

export default LinkToPages;
