import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import LinkToPages from '../components/extras/LinkToPages';
import { Link } from 'gatsby';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { resumeUrl, mySkillsV2, aboutMe } from '../constants/constants';

const AboutPage = () => (
  <Layout containerType={'container'}>
    <SEO title="About Me" />
    <article className="about">
      <h2 className="title-2" style={{ textAlign: 'center' }}>
        About Me.
      </h2>
      <section className="background">
        <h3>Background</h3>
        <p>{aboutMe}</p>
      </section>
      <section className="skills">
        <h3>knowledgeable In</h3>

        <div className="skills_boxes">
          <div className="skills__box">
            <h4>Programming</h4>
            {mySkillsV2.programming.join(', ')}

            {/* {mySkillsV2.programming.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Frontend</h4>
            {mySkillsV2.frontend.join(', ')}

            {/* {mySkillsV2.frontend.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Backend</h4>
            {mySkillsV2.backend.join(', ')}

            {/* {mySkillsV2.backend.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Other Libraries and Tools</h4>
            {mySkillsV2.other.join(', ')}
            {/* {mySkillsV2.other.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Currently learning</h4>
            {mySkillsV2.learing.join(', ')}
            {/* {mySkillsV2.other.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Planning to learn</h4>
            {mySkillsV2.planning.join(', ')}
            {/* {mySkillsV2.other.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
        </div>
        <p>
          You can checkout my <Link to="/projects">projects</Link> and my{' '}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            resume
          </a>
          .
        </p>
      </section>
    </article>
    <SocialIconsGrid />
    <LinkToPages />
  </Layout>
);

export default AboutPage;
