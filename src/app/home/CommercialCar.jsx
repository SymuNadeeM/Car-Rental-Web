"use client"
//https://www.npmjs.com/package/react-countup#simple-example
import CountUp from 'react-countup';
import Image from 'next/image'
import commercialbg from '../assets/carbaground.jpg'
import React from 'react'

const CommercialCar = () => {
  return (
    <>
    
      <div>
          <div className=' relative'>
             <Image src={commercialbg} alt='' className=' w-full xs:h-[1480px] sm:h-[1330px] md:h-[611px]'   />
             <div className=' absolute xs:right-[20px] xs:left-[20px] sm:right-[30px] sm:left-[30px] md:right-[115px]  md:left-[115px] xs:top-[50px] sm:top-[60px] md:top-[90px] bottom-[90px]  '>
                <div className=' grid md:grid-cols-2 gap-[50px]'> 
                     <h2 className=' w-auto h-[150px] mb-[10px] text-[35px] md:text-[42px] leading-[50px] font-semibold font-Inter text-white  tracking-[-1.8px]'>We offer customers a wide range of <span className=' text-primary-color'>commercial cars</span> and <span className=' text-primary-color'>luxury cars</span> for any occasion.</h2>
                      <p className=' xs:mt-[100px] sm:mt-[50px] md:mt-0 text-[#E8E8E8] text-[16px] leading-7 drop-shadow-xl'>At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.</p>
                </div>
                <div className=' mt-[60px] grid md:grid-cols-4 gap-[26px] '>
                   <div className='  rounded-[10px] flex flex-col py-[30px] px-[20px]  items-center justify-center gap-3 bg-[#121212] '>
                         <CountUp  start={1}
                             end={15424}
                             decimal= "."
                            duration={3}  className=' font-semibold font-Outfit text-secondary-color text-[40px] tracking-[.1px] mb-[10px] leading-[1rem]' />
                         <h4 className=' font-semibold font-Outfit text-[#E8E8E8] opacity-70 text-[16px] tracking-[.1px]  leading-[1rem]'>Completed Orders</h4>
                   </div>
                   <div className='  rounded-[10px] flex flex-col py-[30px] px-[20px]  items-center justify-center gap-3 bg-[#121212] '>
                         <CountUp  start={1}
                             end={8745}
                            
                            duration={3}  className=' font-semibold font-Outfit text-secondary-color text-[40px] tracking-[.1px] mb-[10px] leading-[1rem]' />
                         <h4 className=' font-semibold font-Outfit text-[#E8E8E8] opacity-70 text-[16px] tracking-[.1px]  leading-[1rem]'>Happy Customer</h4>
                   </div>
                   <div className='  rounded-[10px] flex flex-col py-[30px] px-[20px]  items-center justify-center gap-3 bg-[#121212] '>
                         <CountUp  start={1}
                             end={235}
                            
                            duration={3}  className=' font-semibold font-Outfit text-secondary-color text-[40px] tracking-[.1px] mb-[10px] leading-[1rem]' />
                         <h4 className=' font-semibold font-Outfit text-[#E8E8E8] opacity-70 text-[16px] tracking-[.1px]  leading-[1rem]'>Vehicles Fleet</h4>
                   </div>
                   <div className='  rounded-[10px] flex flex-col py-[30px] px-[20px]  items-center justify-center gap-3 bg-[#121212] '>
                         <CountUp  start={1}
                             end={15}
                            
                            duration={3}  className=' font-semibold font-Outfit text-secondary-color text-[40px] tracking-[.1px] mb-[10px] leading-[1rem]' />
                         <h4 className=' font-semibold font-Outfit text-[#E8E8E8] opacity-70 text-[16px] tracking-[.1px]  leading-[1rem]'>Years Experience</h4>
                   </div>
                </div>
          </div>
          </div>
          
      </div>
    </>
  )
}

export default CommercialCar
