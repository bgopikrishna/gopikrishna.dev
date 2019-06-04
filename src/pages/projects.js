import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import ProjectList from '../components/projects/projectList';

const ProjectsPage = () => (
  <Layout containerType="container">
    <SEO title="Projects" />

    <div className="projects">
      <div className="pageHeader">
        <h2>My Projects</h2>
      </div>
      <ProjectList />
    </div>
    <Link to="/">Back To Home</Link>
  </Layout>
);

export default ProjectsPage;
