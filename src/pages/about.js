import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import AboutSectionContainer from '../components/about/AboutSectionContainer';
import LinkToPages from '../components/extras/LinkToPages';
import { Link } from 'gatsby';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';

const AboutPage = () => (
  <Layout containerType={'container'}>
    <SEO title="About Me" />
    <article className="about">
      <h2 className="pageHeader" style={{ textAlign: 'center' }}>
        About Me
      </h2>
      <section className="">
        <h3 className="pageHeader">Background</h3>
        <p>
          I am originally from Hyderabad, India. I'm currently pursuing my final
          year of under graduation in Electronics & Communication Engineering
          from Bharath University, Chennai. I'm doing web development from past
          one year and I'm on my way to becoming a Full Stack Engineer. I have
          learned programming from various resources like{' '}
          <a
            href="https://freeCodeCamp.org/bgopikrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>
          ,{' '}
          <a
            href="https://twitter.com/rwieruch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Robin Wieruch
          </a>
          , blog posts etc. As a self-taught programmer and learner at
          freeCodeCamp, I completed freeCodeCamp's&nbsp;
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Front End Libraries Certification
          </a>
          .
        </p>
      </section>
      <section className="">
        <h3 className="pageHeader">Knowledgle In</h3>
        <p>
          I'm knowledgeble in JavaScript, HTML5, CSS, React, Redux, Firebase,
          and Sass. You can checkout my <Link to="/projects">projects</Link>{' '}
          (or) at my{' '}
          <a
            href="https://github.com/bgopikrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{' '}
          page.
        </p>
      </section>
    </article>
    <SocialIconsGrid />
    <LinkToPages />
  </Layout>
);

export default AboutPage;
