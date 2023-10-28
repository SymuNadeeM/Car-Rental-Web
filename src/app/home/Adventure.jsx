import Image from 'next/image'
import adventurepic from '../assets/vehicle/adventure.jpg'
import React from 'react'
import { BsTrophyFill } from 'react-icons/bs'
import { FaMapPin, FaRoad } from 'react-icons/fa'

const Adventure = () => {
  return (
    <>
    <div>
            <div className=' relative'>
               <Image src={adventurepic} alt='' className=' bg-cover w-full h-[950px] md:h-[375px]'   />
             <div className=' absolute right-[30px] md:right-[115px] left-[30px] md:left-[115px] top-[90px] bottom-[115px] '>
                  <div className=' grid md:grid-cols-4 gap-[26px]'>
                       <div>
                           <h1 className=' text-[52px] tracking-[-2px] mb-[20px] font-[500] leading-[52px] text-white'>Lets Your Adventure Begin</h1>
                       </div>
                       <div>
                         <BsTrophyFill  className=' mb-[20px] p-5 rounded-md flex items-center justify-center w-[80px] h-[80px] bg-primary-color text-white' />   
                         <h4 className=' mb-[10px] leading-[26px]  text-[20px] text-white font-semibold font-Inter'>First class services</h4>
                         <p className=' mb-[20px]   text-[16px] opacity-80 text-white'>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
                       </div>
                       <div>
                         <FaRoad  className=' mb-[20px] p-5 rounded-md flex items-center justify-center w-[80px] h-[80px] bg-primary-color text-white' />   
                         <h4 className=' mb-[10px] leading-[26px]  text-[20px] text-white font-semibold font-Inter'>24/7 road assistance</h4>
                         <p className=' mb-[20px]   text-[16px] opacity-80 text-white'>Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
                       </div>
                       <div>
                         <FaMapPin  className=' mb-[20px] p-5 rounded-md flex items-center justify-center w-[80px] h-[80px] bg-primary-color text-white' />   
                         <h4 className=' mb-[10px] leading-[26px]  text-[20px] text-white font-semibold font-Inter'>Free Pick-Up & Drop-Off</h4>
                         <p className=' mb-[20px]   text-[16px] opacity-80 text-white'>Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
                       </div>
                  </div>

             </div>
            </div> 
    </div>
    </>

  )
}

export default Adventure
