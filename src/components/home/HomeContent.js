import React from 'react';
import {
  introPrimaryContent,
  introSecondaryContent,
} from '../../constants/constants';
import homeStyles from './HomeContent.module.css';

const HomeContent = () => {
  return (
    <section className={homeStyles.introContent}>
      <p className={homeStyles.primaryContent}>{introPrimaryContent}</p>
      <p className={homeStyles.secondaryContent}>
        {introSecondaryContent}
        <a
          href="http://twitter.com/_bgopikrishna"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </p>
    </section>
  );
};

export default HomeContent;
