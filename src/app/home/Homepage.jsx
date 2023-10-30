import React from 'react'
import Banner from './Banner'
import Features from './Features'
import CommercialCar from './CommercialCar'
import VehicleFleet from './VehicleFleet'
import Adventure from './Adventure'
import Promo from './Promo'
import Testimonial from './Testimonial'
import Question from './Question'
import CallContact from './CallContact'
import ScrollButton from '../components/ScrollButton'

function Homepage() {
  return (
    <>
      <Banner/>
      <Features />
      <CommercialCar />
      <VehicleFleet/>
      <Adventure />
      <Promo />
      <Testimonial />
      <Question />
      <CallContact />
      <ScrollButton />
    </>
  )
}

export default Homepage
