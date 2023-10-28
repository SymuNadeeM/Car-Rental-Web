import Image from 'next/image'
import inner from '../assets/aboutus_inner.jpg'

import React from 'react'

const InnerAboutus = () => {
  return (
    <>
      <div className=' relative z-20  '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[187px] brightness-50' />
          <div className=' absolute top-[40%] left-[30%] right-[20%] md:left-[43%] md:right-[41%] bottom-[45%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>About Us</h1>
          </div>
     </div>
    </>
  )
}

export default InnerAboutus
