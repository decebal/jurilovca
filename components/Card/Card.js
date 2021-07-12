import React from 'react'
import PropTypes from 'prop-types'

export default function Card({children, className}) {
  return (
    <div className={`w-full overflow-hidden p-4 ${className}`}>{children}</div>
  )
}

Card.defaultProps = {
  className: '',
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
