/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ className, href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const { pathname } = useRouter()
  const classNameWithActive = pathname === href ? `${className} active` : className

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={classNameWithActive} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
