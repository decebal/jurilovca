import React from 'react'
import Head from 'next/head'

import 'styles/index.css'
import 'styles/material-tailwind.css'

import {siteTitle, baseUrl, FB_APP_ID} from 'constants'
import DefaultLayout from 'pagesComponents/DefaultLayout'

// eslint-disable-next-line react/prop-types
export default function App({Component, pageProps}) {
  // eslint-disable-next-line
  const getLayout =
    // eslint-disable-next-line
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFC300" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link rel="shortcut icon" href={require('public/images/favicon.ico')} />
        {/* Canonical SEO */}
        {/*  Social tags */}
        <meta
          name="description"
          content=""
        />
        {/* Schema.org markup for Google+ */}
        <meta
          itemProp="name"
          content=""
        />
        <meta itemProp="url" content={baseUrl} />
        <meta
          itemProp="description"
          content=""
        />
        <meta
          itemProp="thumbnailUrl"
          content={require('public/images/social-card.jpg')}
        />
        <link rel="image_src" href={require('public/images/social-card.jpg')} />
        <meta
          itemProp="image"
          content={require('public/images/social-card.jpg')}
        />
        {/* Twitter Card data */}
        <meta
          name="twitter:title"
          content=""
        />
        <meta
          name="twitter:image"
          content={require('public/images/social-card.jpg')}
        />
        <meta name="twitter:url" content={baseUrl} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content=""
        />
        {/* Open Graph data */}
        <meta property="fb:app_id" content={FB_APP_ID} />
        <meta
          property="og:title"
          content={`${siteTitle} |`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={require('public/images/social-card.jpg')}
        />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:site_name" content={siteTitle} />
        <title>{siteTitle} | </title>
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
