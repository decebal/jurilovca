import React from 'react'
import PropTypes from 'prop-types'

export default function LandingSection({children, className}) {
  return (
    <section className={`pb-20 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4">{children}</div>
    </section>
  )
}

LandingSection.defaultProps = {
  className: '',
}

LandingSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
