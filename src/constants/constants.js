import {
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
  faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserAstronaut,
  faNewspaper,
  faPaperPlane,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

export const introPrimaryContent = `I'm a self-taught Front-End Web Dev and learner at freeCodeCamp. I love JavaScript and React. I'm currently working as a Front End Developer Intern at `;

export const introSecondaryContent = `If you have any queries, feel free to message me on `;

export const socialLinks = [
  {
    platfrom: 'Gopi Krishna on Twitter',
    profileUrl: 'https://twitter.com/_bgopikrishna',
    icon: faTwitter,
    className: 'twitterIcon',
  },
  {
    platfrom: 'Gopi Krishna on Freecodecap',
    profileUrl: 'https://www.freecodecamp.org/bgopikrishna',
    icon: faFreeCodeCamp,
    className: 'fccIcon',
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
    path: '/contact',
    icon: faPaperPlane,
    pathName: 'Contact',
  },
  {
    path: '/blog',
    icon: faNewspaper,
    pathName: 'Blog',
  },
];

export const mySkills = [
  'JavaScript',
  'TypeScript',
  'Angular',
  'React',
  'Redux',
  'Firebase',
  'HTML5',
  'CSS3',
  'Sass',
  'BootStrap',
  'Materialize CSS',
  'Git',
];


export const siteUrl = "https://bgopikrishna.github.io"