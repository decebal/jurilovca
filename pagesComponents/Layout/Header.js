import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import {baseUrl as cBaseUrl, siteTitle as cSiteTitle} from '../../constants'

export default function Header({title, baseUrl, siteTitle}) {
  const router = useRouter()
  return (
    <Head>
      {/* Canonical SEO */}
      <link rel="canonical" href={`${baseUrl}${router.pathname}`} />
      {/* Open Graph data */}
      <meta property="og:url" content={`${baseUrl}${router.pathname}`} />
      <title>
        {title ? `${title} | ` : ''}
        {siteTitle}
      </title>
    </Head>
  )
}

Header.defaultProps = {
  title: undefined,
  baseUrl: cBaseUrl,
  siteTitle: cSiteTitle,
}

Header.propTypes = {
  title: PropTypes.string,
  baseUrl: PropTypes.string,
  siteTitle: PropTypes.string,
}
