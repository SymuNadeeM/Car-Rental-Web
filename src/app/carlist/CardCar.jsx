import Image from 'next/image'
import vecile1 from '../assets/vehicle/vehicle1.jpg'
import vecile2 from '../assets/vehicle/veh2.jpg'
import vecile3 from '../assets/vehicle/veh3.jpg'
import vecile4 from '../assets/vehicle/veh4.jpg'
import vecile5 from '../assets/vehicle/veh5.jpg'
import vecile6 from '../assets/vehicle/veh6.jpg'
import vecile7 from '../assets/vehicle/veh7.jpg'
import vecile8 from '../assets/vehicle/veh8.jpg'
import React from 'react'
import { AiFillHeart, AiOutlineUser } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { BsCarFront } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import Link from 'next/link'

const CardCar = () => {
  return (
    <>
       <div  className=' grid md:grid-cols-3 gap-[26px]' >
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile1} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile2} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile3} alt=''  className=' w-full md:w-[239px] md:h-[134px]rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile4} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile5} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile6} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile7} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile8} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile4} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile2} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile7} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
         <div className='  bg-white p-[10px] shadow-xl rounded-[6px] border-[1px] border-[#dddddd]  '>
                         <div>
                             <Image src={vecile2} alt=''  className=' w-full md:w-[239px] md:h-[134px] rounded-[6px]' />
                         </div>
                         <div className='p-[20px]'>
                            <div className=' flex items-center justify-between'>
                               <h4 className=' text-right mb-[5px] leading-[26px]  text-[18px] drop-shadow-md text-blue-text font-semibold font-Inter'>Ferarri Enzo </h4>
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
                            <div className=' flex items-center justify-between mt-[10px]  '>
                                       <div>
                                            <p className='text-[14px] text-[#acacac] '>Daily rate from</p>
                                            <h4 className=' font-bold text-[26px] text-blue-text'>$265</h4>
                                       </div>
                                      <button className=' mt-4  font-extrabold text-[14px] text-white bg-primary-color rounded-[5px] py-[4px] px-[13px]'><Link href={''}>Rent Now</Link></button>
                                       
                            </div>
                            
                         </div>
         </div>
       </div>
    </>
  )
}

export default CardCar
