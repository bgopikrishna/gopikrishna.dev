import React from 'react';
import introHeaderStyle from './introHeader.module.css';

const IntroHeader = () => {
  return (
    <div className={introHeaderStyle.introheader}>
      <span>Hey there, I'm</span>
      <h2>Gopi Krishna Bhashakarla</h2>
      <span>Front End Developer</span>
    </div>
  );
};

export default IntroHeader;
