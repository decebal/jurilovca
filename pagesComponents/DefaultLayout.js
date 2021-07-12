import React from 'react'
import PropTypes from 'prop-types'
import {
  siteTitle,
  navigationEntries,
  socialNavigationEntries,
} from '../constants'
import IndexNavbar from './Layout/IndexNavbar'
import IndexFooter from './Layout/IndexFooter'

export default function DefaultLayout({children}) {
  return (
    <>
      <IndexNavbar
        siteTitle={siteTitle}
        navigationEntries={navigationEntries}
      />
      {children}
      <IndexFooter
        siteTitle={siteTitle}
        navigationEntries={navigationEntries}
        socialNavigationEntries={socialNavigationEntries}
      />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
