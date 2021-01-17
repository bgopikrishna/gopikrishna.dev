import { SITE_URL } from '../constants/constants';

export const disqusConfig = ({ slug, title }) => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: slug, title },
});

export const createTwitterIntent = (title, hashtags, url) => {
  const blogUrl = SITE_URL;

  return `https://twitter.com/intent/tweet?via=bgopikrishna&text=${title} ${blogUrl}${url}&hashtags=${hashtags}&url=${blogUrl}${url}`;
};

export const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
