import Image from 'next/image'
import newpic1 from '../assets/newspic.jpg'
import newpic2 from '../assets/newspic2.jpg'
import newpic3 from '../assets/newspic3.jpg'
import newpic4 from '../assets/newspic4.jpg'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsCalendarDate, BsFillTagsFill } from 'react-icons/bs'

const NewsCard = () => {
  return (
    <>
    <div className=' space-y-[30px]'>
       <div>
           <div className=' mb-[20px]'>
               <Image alt='' src={newpic1} className=' w-full h-[364px] rounded-md ' />
           </div>
           <div>
               <div className=' flex items-center gap-[30px]'>
                   <div className='flex items-center gap-[12px]'>
                      <FaUser className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>By John Smith</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsCalendarDate className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsFillTagsFill className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>Technology</p>
                   </div>  
               </div>
               <div className=' my-[10px]'>
                      <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Enjoy Best Travel Experience</h4>
                </div>
                <p className=' mb-[20px] text-blue-text opacity-90 text-[16px] font-[400] '>Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore officia voluptate est nulla incididunt in tempor aliqua incididunt cupidatat ut cupidatat qui consectetur cillum id labore sunt id sint magna exercitation enim.</p>
                <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Read More</button>

           </div>
       </div>
       <div>
           <div className=' mb-[20px]'>
               <Image alt='' src={newpic2} className=' w-full h-[364px] rounded-md ' />
           </div>
           <div>
               <div className=' flex items-center gap-[30px]'>
                   <div className='flex items-center gap-[12px]'>
                      <FaUser className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>By John Smith</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsCalendarDate className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsFillTagsFill className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>Technology</p>
                   </div>  
               </div>
               <div className=' my-[10px]'>
                      <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Enjoy Best Travel Experience</h4>
                </div>
                <p className=' mb-[20px] text-blue-text opacity-90 text-[16px] font-[400] '>Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore officia voluptate est nulla incididunt in tempor aliqua incididunt cupidatat ut cupidatat qui consectetur cillum id labore sunt id sint magna exercitation enim.</p>
                <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Read More</button>

           </div>
       </div>
       <div>
           <div className=' mb-[20px]'>
               <Image alt='' src={newpic3} className=' w-full h-[364px] rounded-md ' />
           </div>
           <div>
               <div className=' flex items-center gap-[30px]'>
                   <div className='flex items-center gap-[12px]'>
                      <FaUser className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>By John Smith</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsCalendarDate className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsFillTagsFill className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>Technology</p>
                   </div>  
               </div>
               <div className=' my-[10px]'>
                      <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Enjoy Best Travel Experience</h4>
                </div>
                <p className=' mb-[20px] text-blue-text opacity-90 text-[16px] font-[400] '>Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore officia voluptate est nulla incididunt in tempor aliqua incididunt cupidatat ut cupidatat qui consectetur cillum id labore sunt id sint magna exercitation enim.</p>
                <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Read More</button>

           </div>
       </div>
       <div>
           <div className=' mb-[20px]'>
               <Image alt='' src={newpic4} className=' w-full h-[364px] rounded-md ' />
           </div>
           <div>
               <div className=' flex items-center gap-[30px]'>
                   <div className='flex items-center gap-[12px]'>
                      <FaUser className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>By John Smith</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsCalendarDate className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>June 15, 2022</p>
                   </div>
                   <div className='flex items-center gap-[12px]'>
                      <BsFillTagsFill className=' text-primary-color' />
                      <p className=' text-[12px] font-semibold font-Inter  text-[#4D5B7C]'>Technology</p>
                   </div>  
               </div>
               <div className=' my-[10px]'>
                      <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Enjoy Best Travel Experience</h4>
                </div>
                <p className=' mb-[20px] text-blue-text opacity-90 text-[16px] font-[400] '>Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore officia voluptate est nulla incididunt in tempor aliqua incididunt cupidatat ut cupidatat qui consectetur cillum id labore sunt id sint magna exercitation enim.</p>
                <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Read More</button>

           </div>
       </div>
    </div>   
    </>
  )
}

export default NewsCard
