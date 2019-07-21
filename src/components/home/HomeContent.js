import React from 'react';
import {
  introPrimaryContent,
  introSecondaryContent,
} from '../../constants/constants';
import homeStyles from './HomeContent.module.css';
import { Link } from 'gatsby';

const HomeContent = () => {
  return (
    <section className={homeStyles.introContent}>
      <p className={homeStyles.primaryContent}>
        {introPrimaryContent}{' '}
        <a
          href={'/assets/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </p>
      <p className={homeStyles.secondaryContent}>
        {introSecondaryContent}
        <a
          href="http://twitter.com/_bgopikrishna"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        &nbsp;or <Link to="/contact">contact me</Link>
      </p>
    </section>
  );
};

export default HomeContent;
