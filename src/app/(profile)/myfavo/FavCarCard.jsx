import React from 'react'
import Image from 'next/image'
import favjeep from '../../assets/jeep-renegadeFav.jpg'
import bmw from '../../assets/bmw-m5.jpg'
import ferarri from '../../assets/ferrari-enzo.jpg'


const FavCarCard = () => {
  return (
    <>
       <div className=' space-y-[30px]'>
            <div className='  border rounded-[6px]  md:rounded-[10px] px-[20px] py-[30px] w-full h-fit shadow-lg   bg-white shadow-[3px 3px 9px rgba(164,164,186,0.2)] md:flex md:items-center gap-[30px]  '>
               <div className=' w-full md:w-[30%]'>
                <Image alt='' src={favjeep} className=' md:w-[237px] md:h-[133px]  rounded-[6px] shadow-lg ' />
               </div>
               <div className=' mt-[10px] md:mt-0 w-full md:w-[40%]'>
                 <h4 className=' text-[20px] text-blue-text font-Outfit mb-[10px] font-[600] tracking-tight'>Jeep Renegade</h4>
                 <div className=' flex items-center  justify-between'>
                   <ul>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Seats:</span> 4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Luggage:</span> 2</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Door:</span> 4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Fuel:</span> Petrol</li>
                   </ul>
                   <ul>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Horsepower:</span> 500</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Engine:</span> 3000</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Drive:</span>4*4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Type:</span> Hatchback</li>
                   </ul>
                 </div>
               </div>
               <div className=' mt-[10px] md:mt-0 w-full md:w-[30%]  md:pl-[35px] '>
                <div className='md:flex md:flex-col md:items-center justify-center'>
                    <h4 className=' text-[16px]   font-Inter text-[#4D5B7C] '>Daily rate from</h4>
                    <h4 className=' text-[28px]  text-[#121212] font-bold' >$265</h4>
                    <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Rent Now</button>
                    </div>
               </div>
             </div>  
             <div className='  border rounded-[6px]  md:rounded-[10px] px-[20px] py-[30px] w-full h-fit shadow-lg   bg-white shadow-[3px 3px 9px rgba(164,164,186,0.2)] md:flex md:items-center gap-[30px]  '>
               <div className=' w-full md:w-[30%]'>
                <Image alt='' src={bmw} className=' md:w-[237px] md:h-[133px]  rounded-[6px] shadow-lg ' />
               </div>
               <div className=' mt-[10px] md:mt-0 w-full md:w-[40%]'>
                 <h4 className=' text-[20px] text-blue-text font-Outfit mb-[10px] font-[600] tracking-tight'>BMW M2</h4>
                 <div className=' flex items-center  justify-between'>
                   <ul>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Seats:</span> 4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Luggage:</span> 2</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Door:</span> 4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Fuel:</span> Petrol</li>
                   </ul>
                   <ul>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Horsepower:</span> 500</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Engine:</span> 3000</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Drive:</span>4*4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Type:</span> Hatchback</li>
                   </ul>
                 </div>
               </div>
               <div className=' mt-[10px] md:mt-0 w-full md:w-[30%]  md:pl-[35px] '>
                <div className='md:flex md:flex-col md:items-center justify-center'>
                    <h4 className=' text-[16px]   font-Inter text-[#4D5B7C] '>Daily rate from</h4>
                    <h4 className=' text-[28px]  text-[#121212] font-bold' >$244</h4>
                    <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Rent Now</button>
                    </div>
               </div>
             </div> 
             <div className='  border rounded-[6px]  md:rounded-[10px] px-[20px] py-[30px] w-full h-fit shadow-lg   bg-white shadow-[3px 3px 9px rgba(164,164,186,0.2)] md:flex md:items-center gap-[30px]  '>
               <div className=' w-full md:w-[30%]'>
                <Image alt='' src={ferarri} className=' md:w-[237px] md:h-[133px]  rounded-[6px] shadow-lg ' />
               </div>
               <div className=' mt-[10px] md:mt-0 w-full md:w-[40%]'>
                 <h4 className=' text-[20px] text-blue-text font-Outfit mb-[10px] font-[600] tracking-tight'>Ferarri Enzo</h4>
                 <div className=' flex items-center  justify-between'>
                   <ul>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Seats:</span> 4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Luggage:</span> 2</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Door:</span> 4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Fuel:</span> Petrol</li>
                   </ul>
                   <ul>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Horsepower:</span> 500</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Engine:</span> 3000</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Drive:</span>4*4</li>
                    <li className=' text-[14px] mb-[5px] font-Inter text-[#4D5B7C] '><span className=' font-[600] mr-[10px]'>Type:</span> Hatchback</li>
                   </ul>
                 </div>
               </div>
               <div className=' mt-[10px] md:mt-0 w-full md:w-[30%]  md:pl-[35px] '>
                <div className='md:flex md:flex-col md:items-center justify-center'>
                    <h4 className=' text-[16px]   font-Inter text-[#4D5B7C] '>Daily rate from</h4>
                    <h4 className=' text-[28px]  text-[#121212] font-bold' >$168</h4>
                    <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Rent Now</button>
                    </div>
               </div>
             </div> 
             </div>      
    </>
  )
}

export default FavCarCard
