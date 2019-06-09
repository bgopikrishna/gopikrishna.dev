import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        justifySelf: 'end',
        opacity: '0.7',
        fontSize: '0.7rem',
        margin: '10px auto',
      }}
    >
      © 2019 Coded By{' '}
      <a
        href="https://twitter.com/_bgopikrishna"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gopi Krishna
      </a>
    </footer>
  );
};

export default Footer;
