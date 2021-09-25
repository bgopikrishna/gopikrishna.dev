import formatDate from '@/lib/utils/formatDate'
import Image from './Image'
import CustomLink from './Link'
import Tag from './Tag'

const BlogPostCard = ({ frontMatter }) => {
  const { slug, date, title, description, tags, cover } = frontMatter
  return (
    <li key={slug} className="py-4 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <div className="hidden xl:block mr-8 py-2 rounded shawdow-md">
        {' '}
        <Image
          src={cover}
          layout="responsive"
          alt="title"
          width="100%"
          height="100%"
          className="rounded"
        />
      </div>
      <article className="py-2 xl:col-span-3 space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline h-full">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-4">
          <div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight mb-2">
              <CustomLink href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                {title}
              </CustomLink>
            </h3>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="prose text-gray-500 max-w-none dark:text-gray-400">{description}</div>
        </div>
        <CustomLink
          href={`/blog/${slug}`}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 col-span-4 space-y-4 mr-5 text-right"
          aria-label={`Link to ${title}`}
        >
          Read more &rarr;
        </CustomLink>
      </article>
    </li>
  )
}

export default BlogPostCard
