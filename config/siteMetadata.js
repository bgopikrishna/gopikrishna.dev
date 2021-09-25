const siteMetadata = {
  title: 'Gopi Krishna Blog',
  author: 'bgopikrishna',
  headerTitle: 'GOPI KRISHNA',
  description: "Gopi Krishna's Digital Space",
  language: 'en-us',
  siteUrl: 'https://gopikrishna.dev',
  siteRepo: 'https://github.com/bgopikrishna/gopikrishna.dev',
  contentRepo: 'https://github.com/bgopikrishna/content',
  siteLogo: 'https://avatars1.githubusercontent.com/bgopikrishna',
  image: 'https://avatars1.githubusercontent.com/bgopikrishna',
  socialBanner: '/static/images/twitter-card.png',
  email: 'b.gopikrishna@outlook.in',
  github: 'https://github.com/bgopikrishna',
  twitter: 'https://twitter.com/_bgopikrishna',
  linkedin: 'https://www.linkedin.com/in/bgopikrishna',
  locale: 'en-IN',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: giscus, utterances, disqus
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: 'title', // supported options: pathname, url, title
      label: 'discussion', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'boxy-light',
      // theme when dark mode
      darkTheme: 'dark-blue',
    },
  },
}

module.exports = siteMetadata
