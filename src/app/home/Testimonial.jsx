import Image from 'next/image'
import testi1 from '../assets/testimonial1.jpg'
import testi2 from '../assets/testimonial2.jpg'
import testi3 from '../assets/testimonial3.jpg'
import React from 'react'
import { BiSolidQuoteRight } from 'react-icons/bi'

const Testimonial = () => {
  return (
    <>
      <div className=' px-[10px] md:grid grid-cols-3 gap-[10px] '>
         <div className=' relative  mb-[10px] md:mb-0'>
            <div >
            <Image src={testi1} alt='' className=' rounded-md  brightness-50' />
            </div>
            <div className=' z-50 absolute top-[40px] right-[40px] left-[40px] '>
               <div className=' flex items-center justify-end'>
               <BiSolidQuoteRight className=' mb-[8px] text-primary-color text-[40px]' />
               </div> 
               <h4 className='  text-[20px] mb-[10px] leading-[26px] font-semibold font-Inter text-white '>Excellent Service! Car Rent Service!</h4>
               <p className=' text-[16px] text-gray-text mb-[8px]  text-[rgba(255, 255, 255, .7)] leading-[1.6em]'>I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.</p>
               <span className=' flex items-center gap-2 text-gray-text'> <div className=' bg-gray-text w-[20px] h-[1px]'></div> Stepanie Hutchkiss</span>
            </div>
            
         </div>
         <div className=' relative mb-[10px] md:mb-0'>
            <div >
            <Image src={testi2} alt='' className=' rounded-md  brightness-50' />
            </div>
            <div className=' z-50 absolute top-[40px] right-[40px] left-[40px] '>
               <div className=' flex items-center justify-end'>
               <BiSolidQuoteRight className=' mb-[8px] text-primary-color text-[40px]' />
               </div> 
               <h4 className='  text-[20px] mb-[10px] leading-[26px] font-semibold font-Inter text-white '>Excellent Service! Car Rent Service!</h4>
               <p className=' text-[16px] text-gray-text mb-[8px]  text-[rgba(255, 255, 255, .7)] leading-[1.6em]'>We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.</p>
               <span className=' flex items-center gap-2 text-gray-text'> <div className=' bg-gray-text w-[20px] h-[1px]'></div> Jovan Reels</span>
            </div>
            
         </div>
         <div className=' relative mb-[10px] md:mb-0'>
            <div >
            <Image src={testi3} alt='' className=' rounded-md  brightness-50' />
            </div>
            <div className=' z-50 absolute top-[40px] right-[40px] left-[40px] '>
               <div className=' flex items-center justify-end'>
               <BiSolidQuoteRight className=' mb-[8px] text-primary-color text-[40px]' />
               </div> 
               <h4 className='  text-[20px] mb-[10px] leading-[26px] font-semibold font-Inter text-white '>Excellent Service! Car Rent Service!</h4>
               <p className=' text-[16px] text-gray-text mb-[8px]  text-[rgba(255, 255, 255, .7)] leading-[1.6em]'>Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services..</p>
               <span className=' flex items-center gap-2 text-gray-text'> <div className=' bg-gray-text w-[20px] h-[1px]'></div> Kanesha Keyton</span>
            </div>
            
         </div>
        
      </div>
    </>
  )
}

export default Testimonial
