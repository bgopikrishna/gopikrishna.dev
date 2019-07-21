import React from 'react';
import projectListStyles from './projectList.module.css';
import ProjectBox from './projectBox';
import { projectDetailsList } from '../../constants/constants';

const ProjectList = () => {
  return (
    <div className={projectListStyles.projectList}>
      {projectDetailsList.map(project => (
        <ProjectBox key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
