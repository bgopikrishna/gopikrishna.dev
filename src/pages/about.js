import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import LinkToPages from '../components/extras/LinkToPages';
import { Link } from 'gatsby';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import { mySkills } from '../constants/constants';

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
          one year and I'm on my way to becoming a Full Stack Engineer. As a
          self-taught programmer and learner at freeCodeCamp, I completed
          freeCodeCamp's&nbsp;
          <a
            href="https://www.freecodecamp.org/certification/bgopikrishna/front-end-libraries"
            target="_blank"
            rel="noopener noreferrer"
          >
            Front End Libraries Certification
          </a>
          .
        </p>
      </section>
      <section className="skills">
        <h3>knowledgeable In</h3>
        <ul>
          {mySkills.map(skill => (
            <li key={skill}>
              {' '}
              <span>&#8594; &nbsp;</span> {skill}
            </li>
          ))}
        </ul>
        <p>
          You can checkout my <Link to="/projects">projects</Link> and my{' '}
          <a
            href={'/assets/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>{' '}
          .
        </p>
      </section>
    </article>
    <SocialIconsGrid />
    <LinkToPages />
  </Layout>
);

export default AboutPage;
