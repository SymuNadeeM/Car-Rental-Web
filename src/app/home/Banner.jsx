import Image from 'next/image'
import bannar from "../assets/banner.jpg"
import car1 from "../assets/car 1png.png"
import van from "../assets/van.png"
import minibus from "../assets/minibus.png"
import prestige from "../assets/sportscar.png"
import React from 'react'
import Navbar from '../components/Navbar'

const Banner = () => {
  return (
    <>
      <div className='relative'>
         <Image alt='' src={bannar} className='w-full xs:h-[1830px] sm:h-[1880px] md:h-[950px] bg-cover   ' />
      </div>
          
            <div className=' absolute top-0 left-0'> <Navbar />    </div>  
            <div className='absolute xs:top-[150px] xs:bottom-[40px] xs:px-[20px] sm:top-[200px] sm:bottom-[150px] sm:px-[30px]  md:top-[150px] md:px-[115px] '>
                <h1 className=' tracking-tight font-medium   xs:text-[25px] md:text-[52px] text-white opacity-100 xs:leading-[25px] leading-[55px] font-Outfit'>Looking for a<span className=' text-primary-color'> vehicle</span>? You are at the right place.</h1>
               <div className=' mt-[10px] py-[30px] md:py-[60px]'>
                   <div className=' bg-white rounded-[3px] p-[1.5rem]'>
                       <div className=' grid md:grid-cols-2 gap-[1.5rem]'>
                            <div>
                                <h4 className=' mb-[15px] text-[16px] text-blue-text font-semibold font-Inter'>What is your vehicle type?</h4>
                                <div className=' grid grid-cols-2  md:flex md:items-center gap-[16px]'>
                                      <div className=' bg-primary-color md:w-[121px] md:h-[111px] border rounded-[10px]'>
                                           <div className='pt-[19px] px-[20px] pb-[14px] text-white text-center '>
                                                <Image src={car1} alt=''/>
                                                <p className=' text-[18px] font-bold  mt-2'>Car</p>
                                           </div>
                                      </div>
                                      <div className=' bg-primary-color md:w-[121px] md:h-[111px] border rounded-[10px]'>
                                           <div className='pt-[19px] px-[20px] pb-[14px] text-white text-center '>
                                                <Image src={van} alt=''/>
                                                <p className=' text-[18px] font-bold  mt-2'>Van</p>
                                           </div>
                                      </div>
                                      <div className=' bg-primary-color md:w-[121px] md:h-[111px] border rounded-[10px]'>
                                           <div className='pt-[19px] px-[20px] pb-[14px] text-white text-center '>
                                                <Image src={minibus} alt=''/>
                                                <p className=' text-[18px] font-bold  mt-2'>Minibus</p>
                                           </div>
                                      </div>
                                      <div className=' bg-primary-color md:w-[121px] md:h-[111px] border rounded-[10px]'>
                                           <div className='pt-[19px] px-[20px] pb-[14px] text-white text-center '>
                                                <Image src={prestige} alt=''/>
                                                <p className=' text-[18px] font-bold  mt-2'>Prestige</p>
                                           </div>
                                      </div>
                                </div>
                            </div>
                            <div>
                                <div className=' grid  md:grid-cols-2 gap-6'>
                                      <div>
                                      <h4 className=' mb-[15px] text-[16px] text-blue-text font-semibold font-Inter'>Pick Up Location</h4>
                                       <input type="text" placeholder='Enter your pickup location' className=' py-[4px] px-[8px] border-[1px] border-border-color w-full rounded-[.25rem]' />
                                      </div>
                                      <div>
                                      <h4 className=' mb-[15px] text-[16px] text-blue-text font-semibold font-Inter'>Drop Off Location</h4>
                                       <input type="text" placeholder='Enter your Drop Location' className=' py-[4px] px-[8px] border-[1px] border-border-color w-full rounded-[.25rem]' />
                                      </div>
                                      <div>
                                      <h4 className=' mb-[15px] text-[16px] text-blue-text font-semibold font-Inter'>Pick Up Date & Time</h4>
                                       <input type="text" placeholder='Enter your Drop Location' className=' py-[4px] px-[8px] border-[1px] border-border-color w-full rounded-[.25rem]' />
                                      </div>
                                      <div>
                                      <h4 className=' mb-[15px] text-[16px] text-blue-text font-semibold font-Inter'>Return Date & Time</h4>
                                       <input type="text" placeholder='Enter your Drop Location' className=' py-[4px] px-[8px] border-[1px] border-border-color w-full rounded-[.25rem]' />
                                      </div>
                                     
                                </div>
                            </div>
                       </div>
                       <div className=' mt-[15px] flex justify-end items-center'>
                       <div className='  w-fit  bg-primary-color rounded-[5px] text-white'>
                            <button type='submit' className=' font-extrabold text-[14px] px-[30px] py-[8px]'>Find a Vehicle</button>
                       </div>
                       </div>
                   </div>
               </div>

               <div className='hidden md:grid md:grid-cols-4'>
                    <div>
                         <div className=' flex items-center'>
                             <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                1
                             </div>
                             <div className=' h-[.9px]  w-[86%] bg-primary-color'></div>
                         </div>
                         <h4 className='mt-[30px] text-[20px] mb-[10px] text-white leading-[26px] font-semibold'>Choose a vehicle</h4>
                         <p className=' text-[15px] leading-[1.8em] text-[#acacac] mb-[20px] tracking-wide pr-4 '>Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.</p>
                    </div>
                    <div>
                         <div className=' flex items-center'>
                             <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                2
                             </div>
                             <div className=' h-[.9px]  w-[86%] bg-primary-color'></div>
                         </div>
                         <h4 className='mt-[30px] text-[20px] mb-[10px] text-white leading-[26px] font-semibold'>Pick location & date</h4>
                         <p className=' text-[15px] leading-[1.8em] text-[#acacac] mb-[20px] tracking-wide pr-4'>Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                    </div>
                    <div>
                         <div className=' flex items-center'>
                             <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                3
                             </div>
                             <div className=' h-[.9px]  w-[86%] bg-primary-color'></div>
                         </div>
                         <h4 className='mt-[30px] text-[20px] mb-[10px] text-white leading-[26px] font-semibold'>Make a booking</h4>
                         <p className=' text-[15px] leading-[1.8em] text-[#acacac] mb-[20px] tracking-wide pr-4'>Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.</p>
                    </div>
                    <div>
                         <div className=' flex items-center'>
                             <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                4
                             </div>
                             
                         </div>
                         <h4 className='mt-[30px] text-[20px] mb-[10px] text-white leading-[26px] font-semibold'>Sit back & relax</h4>
                         <p className=' text-[15px] leading-[1.8em] text-[#acacac] mb-[20px] tracking-wide pr-4'>Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.</p>
                    </div>
               </div>
               <div className=' mt-[30px] md:hidden'>
                    <div className=' flex  gap-[10px] '>
                            <div className='  items-center '>
                               <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                1
                               </div>
                               <div className='ml-[50%] w-[.9px] xs:h-[120px] sm:h-[100px]  bg-primary-color'></div>
                           </div>
                         <div>
                            <h4 className=' text-[18px] mb-[10px] text-white leading-[26px] font-semibold'>Choose a vehicle</h4>
                            <p className=' text-[14px] leading-[1.5em] text-[#fff] mb-[20px] opacity-80 tracking-wide pr-4'>Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.</p>
                         </div>
                    </div>
                    <div className=' flex  gap-[10px] '>
                            <div className='  items-center '>
                               <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                2
                               </div>
                               <div className=' ml-[50%] w-[.9px] xs:h-[120px] sm:h-[100px]  bg-primary-color'></div>
                           </div>
                         <div>
                            <h4 className=' text-[18px] mb-[10px] text-white leading-[26px] font-semibold'>Pick location & date</h4>
                            <p className=' text-[14px] leading-[1.5em] text-[#fff] mb-[20px] opacity-80 tracking-wide pr-4'>Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                         </div>
                    </div>
                    <div className=' flex  gap-[10px] '>
                            <div className='  items-center '>
                               <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                3
                               </div>
                               <div className=' ml-[50%] w-[.9px] xs:h-[120px] sm:h-[100px] bg-primary-color'></div>
                           </div>
                         <div>
                            <h4 className=' text-[18px] mb-[10px] text-white leading-[26px] font-semibold'>Make a booking</h4>
                            <p className=' text-[14px] leading-[1.5em] text-[#fff] mb-[20px] opacity-80 tracking-wide pr-4'>Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.</p>
                         </div>
                    </div>
                    <div className=' flex  gap-[10px] '>
                            <div className='  items-center '>
                               <div className=' flex items-center justify-center rounded-md text-[16px] text-center w-[45px] h-[45px] bg-primary-color text-white'>
                                4
                               </div>
                              
                           </div>
                         <div>
                            <h4 className=' text-[18px] mb-[10px] text-white leading-[26px] font-semibold'>Sit back & relax</h4>
                            <p className=' text-[14px] leading-[1.5em] text-[#fff] mb-[20px] opacity-80 tracking-wide pr-4'>Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.</p>
                         </div>
                    </div>
               </div>
           </div>
       
     
    </>
  )
}

export default Banner
