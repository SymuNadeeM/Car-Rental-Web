import Image from 'next/image'
import React from 'react'
import inner from '../assets/aboutus_inner.jpg'
import Navbar from '../components/Navbar'

const InnerRegister = () => {
  return (
    <>
      <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px]  brightness-75' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute top-[55%] md:top-[42%] left-[30%] right-[35%] md:right-[44%] md:left-[44%]  md:bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>Register</h1>
          </div>
      </div>
    </>
  )
}

export default InnerRegister
