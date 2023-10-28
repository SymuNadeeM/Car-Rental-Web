import Image from 'next/image'
import inner from '../assets/carlistinner.jpg'
import React from 'react'

const InnerCarlist = () => {
  return (
    <>
      <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[187px] brightness-50' />
          <div className=' absolute top-[42%] left-[46%] right-[45%] bottom-[45%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>Cars</h1>
          </div>
      </div>
    </>
  )
}

export default InnerCarlist
