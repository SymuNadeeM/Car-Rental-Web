import Image from 'next/image'
import democar from '../assets/car.png'
import {BsTrophyFill,BsFillTagFill} from "react-icons/bs"
import {FaRoad,FaMapPin} from "react-icons/fa"
import React from 'react'

const Features = () => {
  return (
    <>
      <section className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px]'>
             <div className=' text-center flex flex-col items-center justify-center '>
                    <p className=' w-fit font-Inter font-bold bg-gray-text text-secondary-color rounded-[5px] px-[10px] py-[2px] mb-[5px]'>Why Choose Us</p>
                    <h2 className=' font-semibold text-blue-text mb-[10px] text-[42px] tracking-tight leading-[50px]'>Our Features</h2>
                    <div className=' grid md:grid-cols-5 text-center '>
                      <div className=' grid col-span-1'></div>
                      <div className=' grid md:col-span-3'>
                      <p className=' mb-[20px]  text-center text-blue-text drop-shadow-md' >Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions. </p>
                      </div>
                     <div className=' grid md:col-span-1'></div>
                    </div>
                 
             </div>

             <div className=' mt-[30px] grid md:grid-cols-12'>
                    <div className=' grid md:col-span-3 px-[15px] '>
                         <div className=' flex gap-[16px] mb-[20px]'>
                               <div >
                                <BsTrophyFill  className=' p-3 rounded-md flex items-center justify-center w-[54px] h-[54px] bg-primary-color text-white' />
                               </div>
                                <div >
                                <h4 className=' mb-[3px] leading-[26px]  text-[17px] text-blue-text font-semibold font-Inter'>First class services</h4>
                                 <div className=''>
                                 <p className='  text-blue-text drop-shadow-md'>Where luxury meets exceptional care, 
                                 creating unforgettable moments and exceeding your every expectation.</p>
                                 </div>
                                </div>
                         </div>
                         <div className=' flex gap-[16px] mb-[20px]'>
                               <div >
                                <FaRoad className=' p-3 rounded-md flex items-center justify-center w-[54px] h-[54px] bg-primary-color text-white' />
                               </div>
                                <div >
                                <h4 className=' mb-[3px] leading-[26px]  text-[17px] text-blue-text font-semibold font-Inter'>24/7 road assistance</h4>
                                 <div className='  '>
                                 <p className='  text-blue-text drop-shadow-md'>Reliable support when you need it most, keeping you on the move with confidence and peace of mind</p>
                                 </div>
                                </div>
                         </div>
                    </div>
                     <div className=' grid md:col-span-6 px-[15px]'>
                      <Image src={democar} alt='' className=' w-[546] h-[258px]'/>
                     </div>
                     <div className=' grid md:col-span-3 px-[15px] '>
                         <div className=' flex gap-[16px] mb-[20px]'>
                                   <div >
                                      <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] text-blue-text font-semibold font-Inter'>Quality at Minimum </h4>
                                      <div className='  '>
                                      <p className=' text-right  text-blue-text drop-shadow-md'>Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
                                 </div>
                                </div>
                               <div >
                                <BsFillTagFill className=' p-3 rounded-md flex items-center justify-center w-[54px] h-[54px] bg-primary-color text-white' />
                               </div>
                               
                         </div>
                         <div className=' flex gap-[16px] mb-[20px]'>
                               
                                 <div >
                                     <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] text-blue-text font-semibold font-Inter'>24/7 road assistance</h4>
                                       <div className='  '>
                                         <p className=' text-right text-blue-text drop-shadow-md'>Reliable support when you need it most, keeping you on the move with confidence and peace of mind</p>
                                     </div>
                                </div>
                               <div >
                                <FaMapPin className=' p-3 rounded-md flex items-center justify-center w-[54px] h-[54px] bg-primary-color text-white'/>
                               </div>
                                
                         </div>
                    </div>
                    
             </div>
      </section>
    </>
  )
}

export default Features
