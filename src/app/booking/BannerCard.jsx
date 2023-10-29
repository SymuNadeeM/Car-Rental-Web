import React from 'react'
import Image from 'next/image'
import inner from '../assets/carlistinner.jpg'
import car1 from "../assets/car 1png.png"
import van from "../assets/van.png"
import minibus from "../assets/minibus.png"
import prestige from "../assets/sportscar.png"

const BannerCard = () => {
  return (
    <>
           {/* <div className='mt-[-150px] z-50'> */}
      
     
             <div className='  mx-[118px] border-[2px] border-red-600'>
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
            
          {/* </div>      */}
     
    </>

  )
}

export default BannerCard
