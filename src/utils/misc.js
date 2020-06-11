export const disqusConfig = ({ slug, title }) => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: slug, title },
});

export const createTwitterIntent = (title, hashtags, url) => {
  const blogUrl = 'https//bgopikrishna.me';

  return `https://twitter.com/intent/tweet?via=bgopikrishna&text=${title} ${blogUrl}${url}&hashtags=${hashtags}&url=${blogUrl}${url}`;
};
