import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import ProjectList from '../components/projects/projectList';
import LinkToPages from '../components/extras/LinkToPages';

const ProjectsPage = () => (
  <Layout containerType="container">
    <SEO title="Projects" />
    <div className="projects">
      <div className="pageHeader">
        <h2>My Projects</h2>
      </div>
      <ProjectList />
    </div>
    <LinkToPages />
  </Layout>
);

export default ProjectsPage;
