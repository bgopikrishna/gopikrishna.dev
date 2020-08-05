import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import LinkToPages from '../components/extras/LinkToPages';
import { Link } from 'gatsby';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { resumeUrl, mySkills2, aboutMe } from '../constants/constants';

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
            {mySkills2.programming.join(', ')}

            {/* {mySkills2.programming.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Frontend</h4>
            {mySkills2.frontend.join(', ')}

            {/* {mySkills2.frontend.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Backend</h4>
            {mySkills2.backend.join(', ')}

            {/* {mySkills2.backend.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Other Libraries and Tools</h4>
            {mySkills2.other.join(', ')}
            {/* {mySkills2.other.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Currently learning</h4>
            {mySkills2.learing.join(', ')}
            {/* {mySkills2.other.map(skill => (
              <li>{skill}</li>
            ))} */}
          </div>
          <div className="skills__box">
            <h4>Planning to learn</h4>
            {mySkills2.planning.join(', ')}
            {/* {mySkills2.other.map(skill => (
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
