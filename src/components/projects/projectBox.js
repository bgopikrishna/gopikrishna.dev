import React from 'react';
import projectBoxStyle from './projectBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectBox = ({ project }) => {
  const { name, desc, liveDemoUrl, sourceCodeUrl, technologies } = project;
  const technologiesUsed = technologies.join(', ');
  return (
    <div className={projectBoxStyle.projectBox}>
      <div className={projectBoxStyle.projectBox_Content}>
        <div className={projectBoxStyle.projectBox_header}>
          <h3>{name}</h3>
        </div>
        <div className={projectBoxStyle.projectBox_desc}>
          <strong>Description:</strong> {desc}
        </div>
        <div className={projectBoxStyle.projectBox_desc}>
          <strong> Technologies Used:</strong> {technologiesUsed}
        </div>
      </div>
      <div className={projectBoxStyle.projectBox_actionBtnsGrp}>
        <a
          href={sourceCodeUrl}
          className={projectBoxStyle.projectBox_actionBtn}>
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </a>
        <a
          href={liveDemoUrl}
          className={projectBoxStyle.projectBox_actionBtn + ' disabled-link'}>
          <FontAwesomeIcon icon={faLink} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
