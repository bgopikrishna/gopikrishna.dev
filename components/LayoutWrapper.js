import siteMetadata from '@/config/siteMetadata'
import headerNavLinks from '@/config/headerNavLinks'
import Link from './Link'
import NextLink from 'next/link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from './Image'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <NextLink href="/" aria-label="Tailwind CSS Blog">
            <a className="flex items-center justify-between">
              <Image
                src="https://avatars1.githubusercontent.com/bgopikrishna"
                alt="Gopi Krishna"
                width="30"
                height="30"
                className="rounded-full"
              />
              <span className="ml-3 flex items-center justify-between">
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </span>
            </a>
          </NextLink>

          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 relative"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
