"use client"
import React from 'react'
import CountUp from 'react-countup';

const AboutContent = () => {
  return (
    <>
      <section className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px]'>
      <div>
                <div className=' grid md:grid-cols-2 gap-[50px]'> 
                     <h2 className=' w-auto h-[150px] mb-[10px] text-[35px] md:text-[42px] leading-[50px] font-semibold font-Outfit text-blue-text tracking-[-1.8px]'>We offer customers a wide range of <span className=' text-primary-color'>commercial cars</span> and <span className=' text-primary-color'>luxury cars</span> for any occasion.</h2>
                      <p className=' mt-[50px] md:mt-0 text-blue-text text-[16px] leading-7 drop-shadow-md'>At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.</p>
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

      </section>
    </>
  )
}

export default AboutContent
