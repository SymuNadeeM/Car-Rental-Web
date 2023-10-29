import Image from 'next/image'
import inner from '../assets/carlistinner.jpg'
import React from 'react'
import Navbar from '../components/Navbar'

const InnerBooking = () => {
  return (
    <>
      <div className=' relative z-30 '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px]  brightness-75' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute top-[55%] md:top-[42%] left-[32%] right-[35%] md:left-[46%] md:right-[45%] bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>Booking</h1>
          </div>
      </div>
    </>
  )
}

export default InnerBooking
