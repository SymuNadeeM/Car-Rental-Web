import Image from 'next/image'
import inner from '../assets/banner.jpg'

import React from 'react'
import Navbar from '../components/Navbar'

const Innerprofile = () => {
  return (
    <>
      <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px] blur-[2px] ' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute top-[42%] left-[43%] right-[41%] bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>My Profile</h1>
          </div>
      </div>
    </>
  )
}

export default Innerprofile
