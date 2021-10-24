import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/config/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import NewsletterForm from '@/components/NewsletterForm'
import BlogPostCard from '@/components/BlogPostCard'
import Hero from './hero.svg'
import Image from '@/components/Image'
import CustomLink from '@/components/Link'

const MAX_ARTICLES_DISPLAY = process.env.NEXT_MAX_ARTICLES_DISPLAY || 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="xl:grid xl:grid-cols-7 xl:space-y-0 xl:items-center w-full my-8 xl:my-36">
        <div className="col-span-4 prose-2xl p-2 xl:p-8">
          <h2 className=" introheader font-extrabol">Hey, I'm Gopi krishna</h2>
          <p>
            Welcome to my <strong>Digital Space</strong>. I'm a software engineer in India. And
            Currently Building{' '}
            <CustomLink
              href="https://elevate.so"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              ElevateHQ
            </CustomLink>
            . I{' '}
            <span role="img" aria-label="love">
              💖
            </span>{' '}
            JavaScript and React.
          </p>
        </div>
        <div className="col-span-3">
          <Hero />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Articles
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_ARTICLES_DISPLAY).map((frontMatter) => (
            <BlogPostCard frontMatter={frontMatter} key={frontMatter.slug} />
          ))}
        </ul>
      </div>
      {posts.length > MAX_ARTICLES_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 mt-24">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
