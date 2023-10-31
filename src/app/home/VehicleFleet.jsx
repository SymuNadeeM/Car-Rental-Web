'use client'
import Image from 'next/image'
import {AiFillHeart, AiOutlineKey, AiOutlineUser} from "react-icons/ai"
import {BiShoppingBag} from "react-icons/bi"
import vecile from "../assets/vehicle/vehicle1.jpg"
import vecile1 from "../assets/vehicle/veh2.jpg"
import vecile2 from "../assets/vehicle/veh3.jpg"
import vecile3 from "../assets/vehicle/veh4.jpg"
import vecile4 from "../assets/vehicle/veh5.jpg"
import Slider from "react-slick";
import React from 'react'
import { BsCarFront } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import Link from 'next/link'
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'

const VehicleFleet = () => {

  const settings = {
   
      infinite: true,
      arrows: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow /> ,
      prevArrow: <PrevArrow /> ,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 520,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    }

  return (
    <>
      <section className='  py-[60px] px-[30px] md:py-[90px] md:px-[115px]'>
             <div className=' flex flex-col items-center justify-center'>
                     <p className=' w-fit font-Inter font-bold bg-gray-text text-primary-color rounded-[5px] px-[10px] py-[2px] mb-[5px]'>Enjoy Your Ride</p>
                     <h2 className=' font-semibold text-blue-text mb-[10px] text-[42px] tracking-tight leading-[50px]'>Our Vehicle Fleet</h2>
                     <p className='   text-center text-blue-text drop-shadow-md' >Driving your dreams to reality with an exquisite fleet of versatile vehicles</p>
                     <p className='mb-[20px] text-blue-text drop-shadow-md'>  for unforgettable journeys.</p>
             </div>
             <div className=' relative mt-[25px]   '>
             <Slider {...settings} className='  '>
                   <div className='   w-[355px] h-auto   bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd] '>
                         <div>
                             <Image src={vecile} alt=''  className=' w-full md:w-[335px] h-[187px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
                                <div className=' flex items-center text-[15px] gap-[4px] font-medium text-[#acacac]'>
                                    <AiFillHeart size={18} />
                                     85
                                </div>
                            </div>
                            <div className=' flex items-center gap-[10px] pb-[15px] border-b-[1px] border-[#dddddd] '>
                                <div className=' flex items-center gap-[1px]'>
                                    <AiOutlineUser size={17} className=' text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>5</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BiShoppingBag size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>2</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <FiKey size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>4</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BsCarFront size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>SUV</p>
                                </div>
                            </div>
                            <div className=' flex items-center justify-between mt-[10px] '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[15px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
                   </div>
                   <div className=' w-[355px] h-auto  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd] '>
                         <div>
                             <Image src={vecile1} alt=''  className=' w-full md:w-[335px] h-[187px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
                                <div className=' flex items-center text-[15px] gap-[4px] font-medium text-[#acacac]'>
                                    <AiFillHeart size={18} />
                                     85
                                </div>
                            </div>
                            <div className=' flex items-center gap-[10px] pb-[15px] border-b-[1px] border-[#dddddd] '>
                                <div className=' flex items-center gap-[1px]'>
                                    <AiOutlineUser size={17} className=' text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>5</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BiShoppingBag size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>2</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <FiKey size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>4</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BsCarFront size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>SUV</p>
                                </div>
                            </div>
                            <div className=' flex items-center justify-between mt-[10px] '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[15px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
                   </div>
                   <div className=' w-[355px] h-auto  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd] '>
                         <div>
                             <Image src={vecile2} alt=''  className=' w-full md:w-[335px] h-[187px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
                                <div className=' flex items-center text-[15px] gap-[4px] font-medium text-[#acacac]'>
                                    <AiFillHeart size={18} />
                                     85
                                </div>
                            </div>
                            <div className=' flex items-center gap-[10px] pb-[15px] border-b-[1px] border-[#dddddd] '>
                                <div className=' flex items-center gap-[1px]'>
                                    <AiOutlineUser size={17} className=' text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>5</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BiShoppingBag size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>2</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <FiKey size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>4</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BsCarFront size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>SUV</p>
                                </div>
                            </div>
                            <div className=' flex items-center justify-between mt-[10px] '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[15px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
                   </div>
                   <div className=' w-[355px] h-auto  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd] '>
                         <div>
                             <Image src={vecile3} alt=''  className='w-full md:w-[335px] h-[187px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
                                <div className=' flex items-center text-[15px] gap-[4px] font-medium text-[#acacac]'>
                                    <AiFillHeart size={18} />
                                     85
                                </div>
                            </div>
                            <div className=' flex items-center gap-[10px] pb-[15px] border-b-[1px] border-[#dddddd] '>
                                <div className=' flex items-center gap-[1px]'>
                                    <AiOutlineUser size={17} className=' text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>5</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BiShoppingBag size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>2</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <FiKey size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>4</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BsCarFront size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>SUV</p>
                                </div>
                            </div>
                            <div className=' flex items-center justify-between mt-[10px] '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[15px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
                   </div>
                   <div className=' w-[355px] h-auto  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd] '>
                         <div>
                             <Image src={vecile4} alt=''  className='w-full md:w-[335px] h-[187px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[3px] leading-[26px]  text-[17px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
                                <div className=' flex items-center text-[15px] gap-[4px] font-medium text-[#acacac]'>
                                    <AiFillHeart size={18} />
                                     85
                                </div>
                            </div>
                            <div className=' flex items-center gap-[10px] pb-[15px] border-b-[1px] border-[#dddddd] '>
                                <div className=' flex items-center gap-[1px]'>
                                    <AiOutlineUser size={17} className=' text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>5</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BiShoppingBag size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>2</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <FiKey size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>4</p>
                                </div>
                                <div className=' flex items-center gap-[1px]'>
                                    <BsCarFront size={17} className='  text-primary-color' /> 
                                    <p className=' mt-1  leading-[26px]  text-[16px] drop-shadow-md text-blue-text font-semibold font-Inter'>SUV</p>
                                </div>
                            </div>
                            <div className=' flex items-center justify-between mt-[10px] '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[15px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
                   </div>
              </Slider>     
             </div>

       </section>      
    </>
  )
}

export default VehicleFleet
