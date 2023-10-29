import Image from 'next/image'
import profile from "../assets/profile.jpg"
import Link from 'next/link'
import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { IoMdExit } from 'react-icons/io'
import Innerprofile from './Innerprofile'

const layout = ({children}) => {
  return (
    <> 
      <Innerprofile />
       <div className=' py-[90px] px-[30px] md:px-[115px] bg-[#F5F8FA]'>
          <div className=' grid md:grid-cols-12 gap-[26px]'>
            <div className=' grid md:col-span-3 bg-slate-300 h-fit '>
                <div className='  bg-white p-[30px] rounded-[10px]   shadow-lg'>
                    <div className=' flex items-center justify-center text-center'>
                        <div className=' mb-[10px] '>
                            <Image src={profile} alt='' className='outline outline-offset-2 outline-primary-color p-[6px] h-[132px] w-[132px] rounded-full border-[3px] border-[#f2f2f2] ' />
                        </div>  
                    </div>
                    <div className=' text-center'>
                            <h4 className=' text-[20px] leading-[1.3em] font-[600] text-blue-text font-Outfit ' >Monica Lucas</h4>
                           <p className=' text-[16px]  font-[500] text-[#acacac] font-Inter'>monica@rentaly.com</p>
                    </div>

                   <nav className=' mt-[20px]'>
                <ul>
                    <li className=' hover:bg-primary-color duration-500 rounded-[6px] hover:text-white text-primary-color  flex items-center gap-3 py-[7px] px-[10px]' > <FaUserEdit size={22} /> <Link href={"/myprofile"} className=' text-[16px]  text-[#333333] font-semibold font-Inter'>My Profile</Link> </li>
                    <li className=' hover:bg-primary-color duration-500 rounded-[6px] hover:text-white text-primary-color  flex items-center gap-3 py-[7px] px-[10px]' > <BsFillCalendarWeekFill size={22}  /> <Link href={"/myorder"} className=' text-[16px] text-[#333333] font-semibold font-Inter'>My Orders</Link> </li>
                    <li className=' hover:bg-primary-color duration-500 rounded-[6px] hover:text-white text-primary-color  flex items-center gap-3 py-[7px] px-[10px]' > <AiFillCar size={22}  /> <Link href={"/myfavo"} className=' text-[16px] text-[#333333] font-semibold font-Inter'>My Favourite Cars</Link> </li>
                    <li className=' hover:bg-primary-color duration-500 rounded-[6px] hover:text-white text-primary-color  flex items-center gap-3 py-[7px] px-[10px]' > <IoMdExit size={22}  /> <Link href={"/login"} className=' text-[16px] text-[#333333] font-semibold font-Inter'>Sign Out</Link> </li>
                    
                </ul>
             </nav> 
                   
                </div>
             
            </div>
            <div className=' grid md:col-span-9 '>
                   {children}    
            </div>

          </div>
       </div>
    </>
  )
}

export default layout
