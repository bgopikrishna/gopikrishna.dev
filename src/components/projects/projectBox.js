import React from 'react';
import projectBoxStyle from './projectBox.module.css';
import Image from '../image';

const ProjectBox = ({ project }) => {
  const { imagePath, name, desc, liveDemoUrl, sourceCodeUrl } = project;
  return (
    <div className={projectBoxStyle.projectBox}>
      <div className={projectBoxStyle.projectBox_Image}>
        <img src={imagePath} alt="" />
      </div>

      <div className={projectBoxStyle.projectBox_Content}>
        <div className={projectBoxStyle.projectBox_header}>
          <h2>{name}</h2>
        </div>
        <div className={projectBoxStyle.projectBox_desc}>{desc}</div>
        <div className={projectBoxStyle.projectBox_actionBtnsGrp}>
          <a
            href={sourceCodeUrl}
            className={projectBoxStyle.projectBox_actionBtn}
          >
            Souce Code
          </a>
          <a
            href={liveDemoUrl}
            className={projectBoxStyle.projectBox_actionBtn}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
