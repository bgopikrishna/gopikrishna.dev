import { newsletterUrl } from '@/config/siteMetadata'
import Link from './Link'

const NewsletterForm = () => {
  return (
    <div className="prose my-16 ">
      <h3 className="font-bold text-gray-900 dark:text-gray-100 p-0">
        Subscribe to my monthly newsletter{' '}
      </h3>
      <p>
        In this newsletter, I'll share articles related to Web Development and Software Engineering.
        No spam guaranteed.
      </p>
      <Link href={newsletterUrl}>
        <button className="mx-auto inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-primary hover:bg-primary-700 dark:hover:bg-primary-500">
          Subscribe Now
        </button>
      </Link>
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center ">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
