import React from 'react'
import InnerBooking from './InnerBooking'

import CommercialCar from '../home/CommercialCar'
import Image from 'next/image'
import BannerCard from './BannerCard'
import BookingCard from './BookingCard'

const page = () => {
  return (
    <>
       <div >
        
          <InnerBooking />
          <BannerCard  />
          <BookingCard />
          <CommercialCar />
       </div>
    </>
  )
}

export default page
