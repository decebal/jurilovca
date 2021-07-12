import React from 'react'
import LandingPage from '../pagesComponents/Landing/LandingPage'
import LandingSection from '../pagesComponents/Landing/LandingSection'

import ContactSectionBody from '../pagesComponents/Contact/ContactSectionBody'

export default function Contact() {
  return (
    <>
      <LandingPage>
        <LandingSection>
          <ContactSectionBody />
        </LandingSection>
      </LandingPage>
    </>
  )
}
