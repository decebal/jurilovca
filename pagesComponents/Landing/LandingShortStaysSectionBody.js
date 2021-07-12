import React from 'react'
import Card from 'components/Card/Card'
import CardImage from 'components/Card/CardImage'
import LeadText from 'components/Typography/LeadText'
import H4 from 'components/Typography/Heading4'

export default function LandingShortStaysSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-8">
      <div className="w-full md:w-5/12 p-10 py-4 mx-auto bg-opacity-80 bg-black">
        <H4 color="amber">Short Stays & Venue Hire</H4>
        <LeadText color="white">Need an Insta-worthy venue?</LeadText>
        <LeadText color="white">
          We have a selection of high-end properties available for short stays
          or venue hires:
        </LeadText>
        <ul>
          <li>
            <a href="/sell-or-let">Foots Cray Mansion</a>
          </li>
          <li>
            <a href="/sell-or-let">The Villa</a>
          </li>
          <li>
            <a href="/sell-or-let">Uniq Studios - Studios 2, 3 & Penthouse</a>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-6/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        <Card>
          <CardImage
            alt="Card Image"
            src={require('public/images/banners/landing-exterior.png')}
          />
        </Card>
      </div>
    </div>
  )
}
