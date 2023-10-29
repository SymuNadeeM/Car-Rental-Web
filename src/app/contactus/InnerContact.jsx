import Image from 'next/image'
import React from 'react'
import inner from '../assets/aboutus_inner.jpg'
import Navbar from '../components/Navbar'


const InnerContact = () => {
  return (
    <>
      <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px]  brightness-50 ' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute top-[42%] left-[41%] right-[41%] bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>Contact Us</h1>
          </div>
      </div>
    </>
  )
}

export default InnerContact
