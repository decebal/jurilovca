import React from 'react'

import LandingHeader from 'pagesComponents/Landing/LandingHeader'
import LandingHeaderImage from 'pagesComponents/Landing/LandingHeaderImage'
import LandingHeaderContent from 'pagesComponents/Landing/LandingHeaderContent'
import LandingPage from 'pagesComponents/Landing/LandingPage'

export default function Index() {
  return (
    <>
      <LandingPage>
        <LandingHeader>
          <LandingHeaderImage />
          <LandingHeaderContent />
        </LandingHeader>
      </LandingPage>
    </>
  )
}
