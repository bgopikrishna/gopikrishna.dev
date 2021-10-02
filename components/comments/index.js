import siteMetadata from '@/config/siteMetadata'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/comments/Utterances')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  let term
  switch (siteMetadata.comment.utterancesConfig.issueTerm) {
    case 'pathname':
      term = frontMatter.slug
      break
    case 'url':
      term = window.location.href
      break
    case 'title':
      term = frontMatter.title
      break
  }
  return (
    <div id="comment">
      <UtterancesComponent issueTerm={term} />
    </div>
  )
}

export default Comments
