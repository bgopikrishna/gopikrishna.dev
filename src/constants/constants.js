import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserAstronaut,
  faNewspaper,
  faLaptopCode,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

export const introPrimaryContent = `I'm a self-taught JavaScript Developer. I love JavaScript and React. 
I'll be graduating in April 2020.`;

export const introSecondaryContent = `If you have any queries, feel free to message me on `;

export const accentColorsSet = ['green', 'pink', 'orange', 'blue', 'purple'];

export const SITE_URL = 'https://gopikrishna.dev';

export const socialLinks = [
  {
    platfrom: 'Gopi Krishna on Twitter',
    profileUrl: 'https://twitter.com/_bgopikrishna',
    icon: faTwitter,
    className: 'twitterIcon',
  },
  {
    platfrom: 'Gopi Krishna on Dev',
    profileUrl: 'https://www.dev.to/bgopikrishna',
    icon: faDev,
    className: 'devIcon',
  },
  {
    platfrom: 'Gopi Krishna on Github',
    profileUrl: 'https://github.com/bgopikrishna',
    icon: faGithub,
    className: 'githubIcon',
  },

  {
    platfrom: 'Gopi Krishna on linkedin',
    profileUrl: 'https://linkedin.com/in/bgopikrishna',
    icon: faLinkedinIn,
    className: 'linkedinIcon',
  },
];

export const projectDetailsList = [
  // {
  //   name: 'Pomato',
  //   liveDemoUrl: '#',
  //   sourceCodeUrl: 'https://github.com/bgopikrishna/pomato',
  //   desc: 'A Restaurant Finder App using  Angular and Zomato API',
  //   technologies: ['JavaScript', 'Angular', 'Tailwind CSS', 'HTML5', 'Sass'],
  // },
  {
    name: 'Pyggy [Under Development]',
    liveDemoUrl: 'https://pyggy.netlify.app/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/pyggy',
    desc:
      'A full stack(MERN) goal tracker app using React, Node, Express, MongoDB.',
    technologies: [
      'JavaScript',
      'ReactJS',
      'Node JS',
      'MongoDB',
      'Express',
      'Sass',
      'HTML5',
    ],
  },
  {
    name: 'Moviebase',
    liveDemoUrl: 'https://movie-base.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/moviebase',
    desc:
      'A movie info, movies search, movies list maker web app using the themoviedb API.',
    technologies: [
      'JavaScript',
      'ReactJS',
      'Firebase',
      'Firestore Database',
      'HTML5',
      'Sass',
    ],
  },
  {
    name: 'Pomodoro Timer',
    liveDemoUrl: 'https://pomotimer.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/react-pomotimer',
    desc: 'A minimalistic pomodoro timer based on pomodoro technique.',
    technologies: ['JavaScript', 'ReactJS', 'HTML5', 'CSS'],
  },
];

export const miniProjects = [
  {
    name: 'Product Landing Page',
    liveDemoUrl: 'https://flyolanding.netlify.app/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/landing-page',
  },
  {
    name: 'Youtube Playlist Analyzer',
    liveDemoUrl: 'https://yt-pl-analyzer.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/youtube-playlist-analyzer',
  },

  {
    name: 'MyBookShelf',
    liveDemoUrl: 'https://mybookshelf.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/book-shelf',
    desc:
      'A bookshelf app inspired from Udacity React nanodegree project using Google Books API.',
    technologies: ['JavaScript', 'ReactJS', 'HTML5', 'Materilize CSS'],
  },
  {
    name: 'React Markdown Editor',
    liveDemoUrl: 'https://react-markdown.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/react-markdown',
  },
];

export const ROUTES = [
  {
    path: '/about',
    icon: faUserAstronaut,
    pathName: 'about',
  },
  {
    path: '/projects',
    icon: faLaptopCode,
    pathName: 'projects',
  },
  {
    path: '/blog',
    icon: faNewspaper,
    pathName: 'blog',
  },
  {
    path: '/contact',
    icon: faPaperPlane,
    pathName: 'contact',
  },
];

export const mySkills = [
  'JavaScript',
  'Angular',
  'React',
  'Node',
  'MongoDB',
  'Redux',
  'Firebase',
  'HTML5',
  'CSS3',
  'Sass',
  'Bootstrap',
  'Materialize CSS',
  'Git',
];

export const mySkillsV2 = {
  programming: ['JavaScript', 'TypeScript'],
  frontend: ['Angular', 'React JS', 'HTML5', 'CSS3', 'SASS'],
  backend: ['Node', 'Express', 'MongoDB', 'Firebase'],
  other: [
    'Webpack JS',
    'Redux JS',
    'BootStrap',
    'Materialize CSS',
    'Bulma CSS',
    'Git',
    'Gatsby JS',
  ],
  learing: ['Node JS and Backend Development'],
  planning: ['GraphQL', 'Django', 'Vue JS', 'Containers & Devops stuff'],
};

export const siteUrl = 'https://gopikrishna.dev';

export const resumeUrl =
  'https://docs.google.com/document/d/14jtU-GtWVMQrHI9l-7ebtJdLIsQ0y_mb9l7hdAB7YlM/export?format=pdf';

export const aboutMe = `I am originally from Hyderabad, India. I'm currently working as an SDE at ElevateHQ. Thinking about what to add on this section 😅.`;
