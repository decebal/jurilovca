import React from 'react'
import Card from 'components/Card/Card'
import CardImage from 'components/Card/CardImage'
import LeadText from 'components/Typography/LeadText'
import H4 from 'components/Typography/Heading4'
import Button from '../../components/Button/Button'

export default function LandingBuyingSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-8">
      <div className="w-full md:w-6/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        <Card>
          <CardImage
            alt="Card Image"
            src={require('public/images/banners/landing-living-room.png')}
          />
        </Card>
      </div>

      <div className="w-full md:w-5/12 mx-auto bg-opacity-80 bg-black p-10 py-4">
        <H4 color="amber">Buying & Renting Homes</H4>
        <LeadText color="white">
          Looking to purchase or rent a million pound plus home?{' '}
          <a href="/buy-and-rent">Check out available properties</a>
        </LeadText>
      </div>
    </div>
  )
}
