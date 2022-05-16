import Link from './Link'
import siteMetadata from '@/config/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between mt-16 mb-8">
        <div className="flex space-x-4 flex-1 justify-start">
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
        </div>

        <div className="text-sm text-center my-4 justify-center text-gray-500 dark:text-gray-400 flex-1">
          Made with
          <span role="img" aria-label="love" className="animate-pulse">
            &nbsp;💖&nbsp;
          </span>
          &nbsp;from&nbsp;
          <span role="img" aria-label="india">
            🇮🇳
          </span>
        </div>
        <div className="flex flex-wrap justify-center space-x-1 text-sm text-gray-500 dark:text-gray-400 flex-1">
          {/* <div>{siteMetadata.author}</div>
          <div>{` • `}</div> */}
          <div>
            <Link href="https://vercel.com" title="Hosted on vercel">
              Vercel
            </Link>
          </div>
          <div>{` • `}</div>
          <div>
            <Link href="https://nextjs.org" title="Created with Next JS">
              Next JS
            </Link>
          </div>
          <div>{` • `}</div>
          <div>
            <Link href="/privacy">Privacy</Link>
          </div>
          <div>{` • `}</div>
          <div>
            <Link href="/feed.xml">RSS</Link>
          </div>
          <div>{` • `}</div>
          {/* <div>
            <Link href="https://www.getrevue.co/profile/bgopikrishna">Newsletter</Link>
          </div> */}
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
