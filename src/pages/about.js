import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import LinkToPages from '../components/extras/LinkToPages';
import { Link } from 'gatsby';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { mySkills, resumeUrl, mySkills2 } from '../constants/constants';

const AboutPage = () => (
  <Layout containerType={'container'}>
    <SEO title="About Me" />
    <article className="about">
      <h2 className="pageHeader" style={{ textAlign: 'center' }}>
        About Me
      </h2>
      <section className="background">
        <h3>Background</h3>
        <p>
          I am originally from Hyderabad, India. I'm currently pursuing my final
          year of under graduation in Electronics & Communication Engineering
          from Bharath University, Chennai. I'm doing web development from past
          one year and I'm on my way to becoming a Full Stack Engineer.
        </p>
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
