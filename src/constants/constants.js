import {
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserAstronaut,
  faNewspaper,
  faPaperPlane,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

export const introPrimaryContent = `I'm a self-taught JavaScript Developer. I love JavaScript and React. 
I'll be graduating in April 2020. And I'm currently working as a Front End Developer Intern at `;

export const introSecondaryContent = `If you have any queries, feel free to message me on `;

export const accentColorsSet = ['green', 'pink', 'orange', 'blue', 'purple'];

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
    icon: faGithubAlt,
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
    liveDemoUrl: '#',
    sourceCodeUrl: 'https://github.com/bgopikrishna/pygyy',
    desc: 'A full stack goal tracker app.',
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
    name: 'MyBookShelf',
    liveDemoUrl: 'https://mybookshelf.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/book-shelf',
    desc:
      'A bookshelf app inspired from Udacity React nanodegree project using Google Books API.',
    technologies: ['JavaScript', 'ReactJS', 'HTML5', 'Materilize CSS'],
  },
  {
    name: 'Pomodoro Timer',
    liveDemoUrl: 'https://pomotimer.netlify.com/',
    sourceCodeUrl: 'https://github.com/bgopikrishna/react-pomotimer',
    desc: 'A minimalistic pomodoro timer based on pomodoro technique.',
    technologies: ['JavaScript', 'ReactJS', 'HTML5', 'CSS'],
  },
];

export const ROUTES = [
  {
    path: '/about',
    icon: faUserAstronaut,
    pathName: 'About',
  },
  {
    path: '/projects',
    icon: faLaptopCode,
    pathName: 'Projects',
  },
  {
    path: '/blog',
    icon: faNewspaper,
    pathName: 'Blog',
  },
  {
    path: '/contact',
    icon: faPaperPlane,
    pathName: 'Contact',
  },
];

export const mySkills = [
  'JavaScript',
  'TypeScript',
  'Angular',
  'React',
  'Node',
  'MongoDB',
  'Redux',
  'Firebase',
  'HTML5',
  'CSS3',
  'Sass',
  'BootStrap',
  'Materialize CSS',
  'Git',
];

export const mySkills2 = {
  programming: ['JavaScript', 'TypeScript', 'Python(Beginner)'],
  frontend: ['Angular', 'React JS', 'HTML5', 'CSS3', 'Sass'],
  backend: ['Node', 'Express', 'MongoDB', 'Firebase'],
  other: ['Redux JS', 'Jasmine JS', 'BootStrap', 'Materialize CSS', 'Git'],
};

export const siteUrl = 'https://bgopikrishna.me';

export const resumeUrl =
  'https://docs.google.com/document/d/14jtU-GtWVMQrHI9l-7ebtJdLIsQ0y_mb9l7hdAB7YlM/edit?usp=sharing';
