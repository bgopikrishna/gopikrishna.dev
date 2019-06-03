import React from 'react';
import {
  introPrimaryContent,
  introSecondaryContent,
} from '../../constants/constants';
import homeStyles from './HomeContent.module.css';

const HomeContent = () => {
  return (
    <div className={homeStyles.introContent}>
      <div className={homeStyles.primaryContent}>{introPrimaryContent}</div>
      <div className={homeStyles.secondaryContent}>
        {introSecondaryContent}
        <a
          href="http://twitter.com/_bgopikrishna"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </div>
    </div>
  );
};

export default HomeContent;
