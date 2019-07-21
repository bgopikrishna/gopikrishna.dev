import React from 'react';
import { socialLinks } from '../../constants/constants';
import styledSocialIcons from './SocialIconsGrid.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIconsGrid = () => {
  return (
    <ul className={styledSocialIcons.socialGrid}>
      {socialLinks.map(socialLink => {
        const { profileUrl, platfrom, icon } = socialLink;
        const iconClassName = `${styledSocialIcons.icon}`;

        return (
          <li key={profileUrl}>
            <a href={profileUrl} title={platfrom} className={iconClassName}>
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIconsGrid;
