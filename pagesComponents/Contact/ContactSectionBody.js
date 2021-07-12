import React from 'react'
import LeadText from 'components/Typography/LeadText'

export default function ContactSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-8">
      <div className="w-full md:w-5/12 p-10 mx-auto bg-opacity-80 bg-black">
        <LeadText color="white">
          Contact Us
        </LeadText>
      </div>
    </div>
  )
}
