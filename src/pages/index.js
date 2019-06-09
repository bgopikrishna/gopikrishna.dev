import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import IntroHeader from '../components/home/IntroHeader';
import HomeContent from '../components/home/HomeContent';
import SocialIconsGrid from '../components/extras/SocialIconsGrid';
import LinkToPages from '../components/extras/LinkToPages';

const IndexPage = () => (
  <Layout containerType="container">
    <SEO title="Home" />
    <div className="home">
      <IntroHeader />
      <HomeContent />
      <SocialIconsGrid />
    </div>
  </Layout>
);

export default IndexPage;

//dark color - #0E1621
