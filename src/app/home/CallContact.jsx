import Link from 'next/link'
import React from 'react'
import {IoIosCall} from 'react-icons/io'

const CallContact = () => {
  return (
    <>
       <section className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px] bg-secondary-color'>
         <div className=' px-[30px] md:px-[188px]'>
            <div className=' grid md:grid-cols-2 '>
               <div>
               <p className=' w-fit font-Inter font-bold text-white bg-primary-color rounded-[5px] px-[10px] py-[2px] mb-[5px]'>Call us for further information</p>
                <h2 className=' text-[42px] tracking-[-1.8px] mb-[10px] leading-[50px] font-normal text-white font-Outfit'>Rentaly customer care is here to help you anytime.</h2>
                </div>
               <div className=' md:flex md:flex-col items-center justify-start text-white'>
                
                  <IoIosCall className=' text-[48px] ' />
                  <p className=' text-[12px] uppercase tracking-[5px] font-Inter ' >Call us now</p>
                  <h4 className=' text-[36px] font-bold mt-[10px] mb-[20px] '>1 200 333 800</h4>
                 <Link href={""} className=' text-white font-extrabold bg-[#1ECB15]  text-[14px] py-[6px] px-[30px] rounded-[5px] ' > Contact Us</Link>
                </div>
            </div>
         </div>
       </section>
    </>
  )
}

export default CallContact
