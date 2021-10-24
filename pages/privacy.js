import Link from '@/components/Link'

export default function Privacy() {
  return (
    <div className="flex prose-2xl flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          Privacy Policy
        </h1>
      </div>
      <div className="max-w-md">
        <p className="my-8">
          This site uses open source web analytics platform&nbsp;
          <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-40"
            href="https://www.goatcounter.com"
          >
            GoatCounter
          </Link>{' '}
          for analytics .{' '}
          <strong>No personal information (such as IP address etc) is collected</strong>. There is
          no information stored in the browser with cookies, localStorage, or other methods. You can
          read more about it{' '}
          <Link
            href="https://www.goatcounter.com/privacy"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-40"
          >
            here
          </Link>
          .
        </p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-primary hover:bg-primary-700 dark:hover:bg-primary-500">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
