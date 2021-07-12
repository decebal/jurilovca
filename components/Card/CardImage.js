import React from 'react'
import PropTypes from 'prop-types'

export default function CardImage({src, className, ...rest}) {
  // eslint-disable-next-line
  return <img {...rest} className={`w-full -mt-9 ${className}`} src={src} />
}

CardImage.defaultProps = {
  className: '',
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
}
