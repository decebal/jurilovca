/* eslint-disable react/no-danger */
import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {GTM_APP_ID, HEAP_APP_ID} from 'constants'
// ---------------------------------------------
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en-US" style={{scrollBehavior: 'smooth !important'}}>
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${GTM_APP_ID});`,
            }}
          />
          {/* End Google Tag Manager */}
          {/* Heap */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
            heap.load("${HEAP_APP_ID}");`,
            }}
          />
          {/* End Heap */}
        </Head>
        <body className="text-gray-700 antialiased">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              title="google-tag-manage"
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_APP_ID}`}
              height="0"
              width="0"
              style={{display: 'none', visibility: 'hidden'}}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
