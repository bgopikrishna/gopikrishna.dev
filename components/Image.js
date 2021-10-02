import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage loading="lazy" {...rest} />

export default Image
