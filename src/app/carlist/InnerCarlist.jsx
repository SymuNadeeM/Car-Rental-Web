import Image from 'next/image'
import inner from '../assets/carlistinner.jpg'
import React from 'react'
import Navbar from '../components/Navbar'

const InnerCarlist = () => {
  return (
    <>
      <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px]  brightness-75' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute left-[38%] right-[42%] top-[55%] md:top-[42%] md:left-[46%] md:right-[45%] md:bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>Cars</h1>
          </div>
      </div>
    </>
  )
}

export default InnerCarlist
