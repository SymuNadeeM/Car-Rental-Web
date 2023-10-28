import Image from 'next/image'
import newpic1 from '../assets/newspic.jpg'
import newpic2 from '../assets/newspic2.jpg'
import newpic3 from '../assets/newspic3.jpg'
import newpic4 from '../assets/newspic4.jpg'
import menpic from '../assets/1.jpg'
import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import Link from 'next/link'
import { BiSolidQuoteRight } from 'react-icons/bi'

const NewSidbar = () => {
  return (
    <>
      <div>
         <div className=' mb-[60px]' >
            <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Recent Posts</h4>
            <div className=' w-[30px] h-[2px] bg-primary-color mb-[20px] mt-[10px]'></div>
            <div>
            <ul className=''>
                <li className='my-[3px] pb-[8px] border-b-[1px] border-gray-300'>
                   <div className=' flex items-center gap-[20px]'>
                      <Image src={newpic1} alt='' className=' w-[60px] h-[60px] rounded-[3px]' />
                      <div>
                         <h4 className=' leading-[26px] text-[16px] tracking-tight text-blue-text font-[600] mb-[6px] font-Outfit'>Enjoy Best Travel Experience</h4>
                         <div className='flex items-center gap-[8px]'>
                          <BsCalendarDate className=' text-primary-color' />
                          <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                      </div>
                   </div>
                </li>
                <li className=' mt-[9px] mb-[3px] pb-[8px] border-b-[1px] border-gray-300'>
                   <div className=' flex items-center gap-[20px]'>
                      <Image src={newpic2} alt='' className=' w-[60px] h-[60px] rounded-[3px]' />
                      <div>
                         <h4 className=' leading-[26px] text-[16px] tracking-tight text-blue-text font-[600] mb-[6px] font-Outfit'>The Future of Car Rent</h4>
                         <div className='flex items-center gap-[8px]'>
                          <BsCalendarDate className=' text-primary-color' />
                          <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                      </div>
                   </div>
                </li>
                <li className=' mt-[9px] mb-[3px] pb-[8px] border-b-[1px] border-gray-300'>
                   <div className=' flex items-center gap-[20px]'>
                      <Image src={newpic3} alt='' className=' w-[60px] h-[60px] rounded-[3px]' />
                      <div>
                         <h4 className=' leading-[26px] text-[16px] tracking-tight text-blue-text font-[600] mb-[6px] font-Outfit'>Holiday Tips For Backpacker</h4>
                         <div className='flex items-center gap-[8px]'>
                          <BsCalendarDate className=' text-primary-color' />
                          <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                      </div>
                   </div>
                </li>
                <li className=' mt-[9px] mb-[3px] pb-[8px] border-b-[1px] border-gray-300'>
                   <div className=' flex items-center gap-[20px]'>
                      <Image src={newpic4} alt='' className=' bg-cover w-[60px] h-[60px] rounded-[3px]' />
                      <div>
                         <h4 className=' leading-[26px] text-[16px] tracking-tight text-blue-text font-[600] mb-[6px] font-Outfit'>Travel Destination For Couple</h4>
                         <div className='flex items-center gap-[8px]'>
                          <BsCalendarDate className=' text-primary-color' />
                          <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                      </div>
                   </div>
                </li>
            </ul>
          </div>
         </div>
         <div className=' mb-[60px]' >
            <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Popular Tags</h4>
            <div className=' w-[30px] h-[2px] bg-primary-color mb-[20px] mt-[10px]'></div>
            <div>
               <ul className=' flex flex-wrap'>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Art</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Application</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Design</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Entertainment</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Marketing</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Internet</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Multipurpose</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Music</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Print</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Programming</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Responsive</Link></li>
                  <li className='my-[4px] '><Link href={""} className=' text-[12px] font-nunito bg-primary-color text-white px-[10px] py-[6px] mx-[2px] rounded-[2px] '> Website</Link></li>
               </ul>
          </div>
         </div>
         <div className=' mb-[60px]' >
            <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Testimonials</h4>
            <div className=' w-[30px] h-[2px] bg-primary-color mb-[20px] mt-[10px]'></div>
             <div className=' relative bg-[#F5F5F5] rounded-[6px] pt-[70px] pb-[30px] px-[40px]'>
               <span className=' absolute top-0 left-0 bg-primary-color text-white p-[10px] rounded-tl-[6px] rounded-br-[10px]'><BiSolidQuoteRight size={30} /></span>
                <h4 className=' mb-[10px] text-[20px] font-semibold text-blue-text'>Excellent Service!</h4>
                <p className=' mt-[10px] mb-[20px] text-[#5d6371] text-[14px] font-[400] leading-[1.7em] tracking-[-.1px]'>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                <div className=' flex items-center gap-2'>
                    <Image alt=''  src={menpic} className=' w-[50px] h-[50px] rounded-full'/>
                   <p className=' font-bold text-[#161C2D] opacity-80 text-[14px]'>John, Pixar Studio</p>
                </div>
            </div>
        </div>    
      </div>
    </>
  )
}

export default NewSidbar
