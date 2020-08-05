import React from 'react';
import introHeaderStyle from './introHeader.module.css';
import { Link } from 'gatsby';
import Emoji from '../extras/Emoji';

const IntroHeader = () => {
  return (
    <div className={introHeaderStyle.introheader}>
      <h2>Hey, I'm Gopi Krishna.</h2>
      <p>
        Developer at{' '}
        <a href="http://insider.in" target="_blank" rel="noopener noreferrer">
          Paytm insider
        </a>
        . I <Emoji emoji="💖" label="love"/> JavaScript and React.
      </p>
      <br />
      <p>
        Go to <Link to="/blog">Blog</Link> or{' '}
        <Link to="/contact">Contact me</Link>
      </p>
    </div>
  );
};

export default IntroHeader;
