import React from 'react'
import Card from 'components/Card/Card'
import CardImage from 'components/Card/CardImage'
import LeadText from 'components/Typography/LeadText'

export default function LandingWorkingSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-8">
      <div className="w-full md:w-5/12 px-4 mx-auto">
        <LeadText color="blueGray">
          We have access to an unrivalled collection of high-end on and
          off-market million pound plus properties. Whatever style of home
          you’re looking for, we’re here to make it happen.
        </LeadText>
      </div>

      <div className="w-full md:w-6/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        <Card>
          <CardImage
            alt="Card Image"
            src={require('public/images/banners/desk.png')}
          />
        </Card>
      </div>
    </div>
  )
}
