/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unreachable */
import { useRef, useState } from 'react'

import siteMetadata from '@/config/siteMetadata'

const NewsletterForm = ({
  title = 'A newsletter which is all about Javascript and Web Development.',
}) => {
  return <div>Under Progess</div>
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
