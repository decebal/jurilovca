import React from 'react'
import PropTypes from 'prop-types'

export default function LandingPage({children}) {
  return <main>{children}</main>
}
LandingPage.propTypes = {
  children: PropTypes.node.isRequired,
}
