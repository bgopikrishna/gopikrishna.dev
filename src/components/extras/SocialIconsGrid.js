import React from 'react';
import { socialLinks } from '../../constants/constants';
import styledSocialIcons from './SocialIconsGrid.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIconsGrid = () => {
  return (
    <ul className={styledSocialIcons.socialGrid}>
      {socialLinks.map(socialLink => (
        <li key={socialLink.profileUrl}>
          <a
            href={socialLink.profileUrl}
            title={socialLink.platfrom}
            className={styledSocialIcons.icon}
          >
            <FontAwesomeIcon icon={socialLink.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIconsGrid;
