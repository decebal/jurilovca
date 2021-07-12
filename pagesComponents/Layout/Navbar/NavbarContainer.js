import React from 'react'
import PropTypes from 'prop-types'

export default function NavbarContainer({children, className}) {
  return (
    <div
      className={`container px-4 mx-auto flex flex-wrap items-center justify-between ${className}`}
    >
      {children}
    </div>
  )
}

NavbarContainer.defaultProps = {
  className: '',
}

NavbarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
