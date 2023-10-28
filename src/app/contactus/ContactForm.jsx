import React from 'react'
import { AiFillFilePdf, AiOutlineMail } from 'react-icons/ai'
import { IoMdCall } from 'react-icons/io'
import { MdLocationPin } from 'react-icons/md'

const ContactForm = () => {
  return (
    <>
       <section className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px]'>
          <div className=' grid md:grid-cols-3 gap-[26px]'>
             <div className=' w-full h-fit grid  md:col-span-2 '>
                  <h3 className=' text-[26px] mb-[20px] tracking-[-.5px] font-semibold text-blue-text'>Do you have any question?</h3>
                <div className=' mb-[20px] grid  md:grid-cols-3 gap-[26px]'>
                  <div className='  w-full'>
                      <input type="text" placeholder=' Your Name' className='border-[2px] outline-none w-full    border-[#eeeeee]  rounded-[6px] p-[8px] bg-gray-50 ' />
                  </div>
                  <div className=' '>
                      <input type="text" placeholder=' Your Email' className='border-[2px] outline-none   w-full   border-[#eeeeee]  rounded-[6px] p-[8px] bg-gray-50 ' />
                  </div>
                  <div className=' '>
                      <input type="text" placeholder=' Your Phone' className='border-[2px] outline-none   w-full   border-[#eeeeee]  rounded-[6px] p-[8px] bg-gray-50 ' />
                  </div>
              </div>
              <div className=' mb-[20px] '>
                 <textarea name="" id="" placeholder=' Your Message' className=' w-full h-[175px] border-[2px]  outline-blue-700   border-[#eeeeee]  rounded-[6px] p-[8px] bg-gray-50' ></textarea>
              </div>
              <div>
                 <button className=' bg-primary-color font-Inter text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Send Message</button>
              </div>
             </div>
             <div className=' grid  md:col-span-1 '>
                 <div className=' mb-[30px] w-full h-fit p-[30px] border-[1px] border-[#ddddd] rounded-[6px] bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
                 <div>
                   <h5 className=' text-blue-text text-[18px] font-Outfit mb-[20px] font-semibold '>AU Office</h5>
                   <div className=' flex items-center gap-2'>
                   <MdLocationPin className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px]  text-blue-text opacity-80 leading-[1.7em]'>100 Mainstreet Center, Sydney</p>
               </div>
                <div className=' flex items-center gap-2'>
                   <IoMdCall className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px] text-blue-text opacity-80 leading-[1.7em]'>+1 333 9296</p>
               </div>
               <div className=' flex items-center  gap-2'>
                   <AiOutlineMail className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px]   text-secondary-color duration-500 leading-[1.7em]'>contact@example.com</p>
               </div>
               <div className=' flex items-center  gap-2'>
                   <AiFillFilePdf className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px]  text-secondary-color duration-500 leading-[1.7em]'>Download Brochure</p>
               </div>
                  </div>
                 </div>
                 <div className=' mb-[30px] w-full h-fit p-[30px] border-[1px] border-[#ddddd] rounded-[6px] bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
                 <div>
                   <h5 className=' text-[18px] text-blue-text font-Outfit mb-[20px] font-semibold '>US Office</h5>
                   <div className=' flex items-center gap-2'>
                   <MdLocationPin className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px]  text-blue-text opacity-80 leading-[1.7em]'>08 W 36th St, New York, NY 10001</p>
               </div>
                <div className=' flex items-center gap-2'>
                   <IoMdCall className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px] text-blue-text opacity-80 leading-[1.7em]'>+1 333 9296</p>
               </div>
               <div className=' flex items-center  gap-2'>
                   <AiOutlineMail className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px]   text-secondary-color duration-500 leading-[1.7em]'>contact@example.com</p>
               </div>
               <div className=' flex items-center  gap-2'>
                   <AiFillFilePdf className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px]  text-secondary-color duration-500 leading-[1.7em]'>Download Brochure</p>
               </div>
             </div>
                 </div>
             </div>
          </div>  

      </section> 
    </>
  )
}

export default ContactForm
