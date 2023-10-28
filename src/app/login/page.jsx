import Image from 'next/image'
import google from '../assets/google_icon.svg'
import facebook from '../assets/facebook_icon.svg'
import React from 'react'

const page = () => {
  return (
    <>
      <section className=' bg-slate-300 py-[60px] md:py-[90px] px-[30px] md:px-[115px]'>
            <div className=' grid md:grid-cols-3 '>
                    <div className=' grid md:col-span-1'>
                    </div>  
                    <div className=' grid md:col-span-1'>
                        <div className=' bg-white p-[40px]'>
                          <h5 className=' text-blue-text text-[18px] font-Outfit mb-[20px] font-semibold '>Login</h5>
                          <input type="text" placeholder=' Your Name' className=' mb-[10px] border-[2px] outline-none   w-full   border-[#eeeeee]  rounded-[6px] p-[8px] bg-gray-50 ' />
                          <input type="text" placeholder=' Your Name' className=' mb-[10px] border-[2px] outline-none   w-full   border-[#eeeeee]  rounded-[6px] p-[8px] bg-gray-50 ' />
                          <button className=' bg-primary-color font-Inter text-white text-[14px] font-[800] py-[7px] w-full px-[23px] rounded-[5px]'>Sign In</button>
                           
                          <div className='flex items-center my-[30px]'>
                            <div className=' w-[25%] h-[1px] bg-[#dddd]'> </div>
                              <p className='w-[50%] text-center text-[14px] font-Inter text-blue-text opacity-80 '>Or sign up with</p>
                              <div className=' w-[25%] h-[1px] bg-[#dddd]'> </div>
                          </div>
                          <div className=' grid grid-cols-2 gap-3'>
                            <div className=' w-full rounded-[6px] bg-gray-200 flex items-center justify-start gap-[8px] py-[8px] px-[10px]'>
                                 <Image src={google} alt='' className=' w-[20px] h-[20px]' />
                                 <h5 className=' text-[13px] hover:text-primary-color duration-500 font-[800] font-Outfit text-blue-text' >Google</h5>
                            </div>
                            <div className=' w-full rounded-[6px] bg-gray-200 flex items-center justify-start gap-[8px] py-[8px] px-[10px]'>
                                 <Image src={facebook} alt='' className=' w-[20px] h-[20px]' />
                                 <h5 className=' text-[13px] hover:text-primary-color duration-500 font-[800] font-Outfit text-blue-text' >Facebook</h5>
                            </div>
                          </div>
                          </div>
                          
                    </div> 
                    <div className=' grid md:col-span-1'>
                    </div>  
            </div>
      </section>
    </>
  )
}

export default page
