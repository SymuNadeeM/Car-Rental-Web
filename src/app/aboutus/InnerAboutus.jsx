import Image from 'next/image'
import inner from '../assets/aboutus_inner.jpg'

import React from 'react'
import Navbar from '../components/Navbar'

const InnerAboutus = () => {
  return (
    <>
      <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px]  brightness-50 ' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute top-[42%] left-[43%] right-[41%] bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>About Us</h1>
          </div>
      </div>
    </>
  )
}

export default InnerAboutus
