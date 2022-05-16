import siteMetadata from '@/config/siteMetadata'

export const editUrl = (fileName) => `${siteMetadata.contentRepo}/blob/main/blog/${fileName}`

export const createTwitterIntent = (title, hashtags, url) => {
  const blogUrl = siteMetadata.siteUrl

  return `https://twitter.com/intent/tweet?via=bgopikrishna&text=${title}&hashtags=${hashtags}&url=${blogUrl}${url}`
}

export const createLinkedInShareUrl = (url) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${siteMetadata.siteUrl}${url}`
