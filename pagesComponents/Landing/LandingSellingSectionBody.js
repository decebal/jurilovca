import React from 'react'
import Card from 'components/Card/Card'
import CardImage from 'components/Card/CardImage'
import LeadText from 'components/Typography/LeadText'
import H4 from 'components/Typography/Heading4'

export default function LandingSellingSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-8">
      <div className="w-full md:w-6/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        <Card>
          <CardImage
            alt="Card Image"
            src={require('public/images/banners/landing-kitchen.png')}
          />
        </Card>
      </div>
      <div className="w-full md:w-5/12 p-10 py-4 mx-auto bg-opacity-80 bg-black">
        <H4 color="amber">Selling & Letting Homes</H4>
        <LeadText color="white">
          Looking to sell or let your home?{' '}
          <a href="/contact">Get in touch to see how much your home is worth</a>
        </LeadText>
      </div>
    </div>
  )
}
