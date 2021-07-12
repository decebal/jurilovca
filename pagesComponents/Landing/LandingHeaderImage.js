import React from 'react'

export default function LandingHeaderImage() {
  return (
    <div
      className="absolute top-0 w-full h-full"
      style={{
        background: `linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url(${require('/public/images/patterns/landing.jpg')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  )
}
