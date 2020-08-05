import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        justifySelf: 'end',
        opacity: '0.7',
        fontSize: '0.7rem',
        margin: '10px auto',
      }}>
      © 2020 Coded By{' '}
      <a
        href="https://linkedin.com/in/bgopikrishna"
        target="_blank"
        rel="noopener noreferrer">
        Gopi Krishna
      </a>
    </footer>
  );
};

export default Footer;
