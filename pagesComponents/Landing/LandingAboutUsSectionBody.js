import React from 'react'
import Card from 'components/Card/Card'
import CardImage from 'components/Card/CardImage'
import LeadText from 'components/Typography/LeadText'
import H4 from 'components/Typography/Heading4'

export default function LandingAboutUsSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-8">
      <div className="w-full md:w-5/12 px-4 mx-auto">
        <H4 color="amber">About Us</H4>

        <LeadText color="white">
          Million Pound Homes is a luxury home & lifestyle marketplace that
          showcases the very best homes the UK has to offer. We work with
          private sellers, agents & developers to provide our clients with a
          single touch-point, curated property portfolio to sell & buy their
          dream homes.
        </LeadText>

        <LeadText color="white">
          We work with the UK’s best luxury property agents & hand-picked
          specialist suppliers to provide a seamless & bespoke client service.
          We offer a vast range of services from sourcing homes to match your
          property brief or managing turnkey projects.
        </LeadText>

        <LeadText color="white">
          As well as the above, we also provide additional services such as
          securing specialist mortgages, commissioning architectural & interior
          design projects & personal-shopping for furnishings to match your
          style.
        </LeadText>
      </div>

      <div className="w-full md:w-6/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        <Card>
          <CardImage
            alt="Card Image"
            src={require('public/images/banners/landing-house.png')}
          />
        </Card>
      </div>
    </div>
  )
}
