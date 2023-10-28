import Link from 'next/link'
import React from 'react'
import { AiFillFilePdf, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoPinterest } from 'react-icons/bi'
import { FaRss } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { MdLocationPin } from 'react-icons/md'

const FooterMain = () => {
  return (
    <>
      <section className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px] '>
         <div className=' grid md:grid-cols-4 gap-[50px] text-white'>
             <div>
                 <h5 className=' text-[18px] font-Outfit mb-[20px] font-semibold '>About Rentaly</h5>
                 <p className=' mb-[20px] font-Inter opacity-80'> Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That is why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense. </p>
             </div>
             <div>
             <h5 className=' text-[18px] font-Outfit mb-[20px] font-semibold '>Contact Info</h5>
                <div className=' flex items-center gap-2'>
                   <MdLocationPin className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px] text-gray-text leading-[1.7em]'>08 W 36th St, New York, NY 10001</p>
               </div>
                <div className=' flex items-center gap-2'>
                   <IoMdCall className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px] text-gray-text leading-[1.7em]'>+1 333 9296</p>
               </div>
               <div className=' flex items-center  gap-2'>
                   <AiOutlineMail className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px] text-white hover:text-primary-color duration-500 leading-[1.7em]'>contact@example.com</p>
               </div>
               <div className=' flex items-center  gap-2'>
                   <AiFillFilePdf className=' text-[18px] text-primary-color' />
                   <p className=' mb-[5px] text-white hover:text-primary-color duration-500 leading-[1.7em]'>Download Brochure</p>
               </div>
             </div>
             <div>
                <h5 className=' text-[18px] font-Outfit mb-[20px] font-semibold '>Quick Links</h5>
               <ul>
                <li className='my-[5px] hover:text-primary-color duration-300'><Link href={""} className=' ' ></Link>About</li>
                <li className='my-[5px] hover:text-primary-color duration-300'><Link href={""} className=' ' ></Link>Blog</li>
                <li className='my-[5px] hover:text-primary-color duration-300'><Link href={""} className=' ' ></Link>Careers</li>
                <li className='my-[5px] hover:text-primary-color duration-300'><Link href={""} className=' ' ></Link>News</li>
                <li className='my-[5px] hover:text-primary-color duration-300'><Link href={""} className=' ' ></Link>Partners</li>
               </ul>
             </div>
             <div>
                <h5 className=' text-[18px] font-Outfit mb-[20px] font-semibold '>Social Network</h5>
                 <div className=' flex items-center gap-[10px]'>
                    <div className=' w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff1a] text-primary-color rounded-[5px] hover:bg-white duration-500 '>
                    <BiLogoFacebook  size={20} />
                    </div>
                    <div className=' w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff1a] text-primary-color rounded-[5px] hover:bg-white duration-500 '>
                    <AiOutlineTwitter  size={20} />
                    </div>
                    <div className=' w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff1a] text-primary-color rounded-[5px] hover:bg-white duration-500 '>
                    <BiLogoLinkedin  size={20} />
                    </div>
                    <div className=' w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff1a] text-primary-color rounded-[5px] hover:bg-white duration-500 '>
                    <BiLogoPinterest  size={20} />
                    </div>
                    <div className=' w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff1a] text-primary-color rounded-[5px] hover:bg-white duration-500 '>
                    <FaRss  size={20} />
                    </div>
                 </div>
             </div>   
         </div>
      </section>
    </>
  )
}

export default FooterMain
