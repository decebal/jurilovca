/* eslint-disable import/no-unresolved */
import React from 'react'
import H2 from 'components/Typography/Heading2'
import LeadText from 'components/Typography/LeadText'
import Button from 'components/Button/Button'

export default function LandingHeaderContent() {
  return (
    <div className="container max-w-8xl relative mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 ml-0 mr-auto bg-opacity-80 bg-black p-10">
          <H2 color="white">The Luxury Homes & Lifestyle Marketplace</H2>
          <div className="text-gray-200">
            <LeadText color="gray-200">Property search with a purpose</LeadText>
          </div>
          <div>
            <Button buttonType="outline" color="black">
              <a href="/contact">Contact us </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
