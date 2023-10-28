import Image from 'next/image'
import React from 'react'
import inner from '../assets/aboutus_inner.jpg'


const InnerContact = () => {
  return (
    <>
      <div className=' relative  '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[187px] brightness-50' />
          <div className=' absolute top-[40%] left-[30%] right-[20%] md:left-[40%] md:right-[41%] bottom-[45%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>Contact Us</h1>
          </div>
     </div>
    </>
  )
}

export default InnerContact
