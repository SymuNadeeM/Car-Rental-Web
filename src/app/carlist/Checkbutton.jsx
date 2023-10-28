"use client"
import React from 'react'
import Slider,{ Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

//https://www.npmjs.com/package/rc-slider


const Checkbutton = () => {

    
  return (
    <>
    <div>
      <div className=' w-full h-fit mb-[25px]  bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
         <h4 className='  mb-[10px] leading-[26px]  text-[18px]  text-blue-text font-semibold font-Outfit'>Vehicle Type</h4>
         
        <div class="flex items-center mb-[4px]  ">
         <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Car</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox2" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox2" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Van</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox3" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox3" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Minibus</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Prestige</label>
       </div>

      </div>
      
      <div className=' w-full h-fit  mb-[25px] bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
         <h4 className='  mb-[10px] leading-[26px]  text-[18px]  text-blue-text font-semibold font-Outfit'>Car Body Type</h4>
         
        <div class="flex items-center mb-[4px]  ">
         <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Convertible</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox2" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox2" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Coupe</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox3" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox3" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Exotic cars</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Hatchback</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Minivan</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Truck</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Sedan</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Sports Car</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">Station Wagon</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">SUV</label>
       </div>

      </div>
      <div className=' w-full h-fit mb-[25px]  bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
         <h4 className='  mb-[10px] leading-[26px]  text-[18px]  text-blue-text font-semibold font-Outfit'>Car Seats</h4>
         
        <div class="flex items-center mb-[4px]  ">
         <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">2 seats</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox2" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox2" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">4 seats</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox3" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox3" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg "> 6 seats</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">6+ seats</label>
       </div>
      

      </div>
      <div className=' w-full h-fit mb-[25px]  bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
         <h4 className='  mb-[10px] leading-[26px]  text-[17px]  text-blue-text font-semibold font-Outfit'>Car Engine Capacity (cc)</h4>
         
        <div class="flex items-center mb-[4px]  ">
         <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">1000-2000</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox2" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox2" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">2000-4000</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox3" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox3" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">4000-6000</label>
       </div>
       <div class="flex items-center mb-[4px] ">
         <input id="default-checkbox4" type="checkbox" value="" class="w-4 h-4 text-white  bg-primary-color  border-primary-color rounded  " />
         <label for="default-checkbox4" class="ml-2 text-[15px] font-Inter opacity-90 text-black-bg ">6000+</label>
       </div>
      

      </div>
      <div className=' w-full h-fit  bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
         <h4 className='  mb-[15px] leading-[26px]  text-[17px]  text-blue-text font-semibold font-Outfit'>Price ($)</h4>
           
           <div className=' mb-[15px] flex items-center justify-between'>
               <div className=' flex items-center '>
                   <span className=' text-[15px] '>Min</span>
                   <input type="number" value='10' className=' w-[60px] text-[16px] ml-[12px] border-none outline-none font-bold' />       
               </div>
               <div className=' flex items-center '>
                   <span className=' text-[15px] '>Max</span>
                   <input type="number" value='7500' className=' w-[60px] text-[16px] ml-[12px] border-none outline-none font-bold' />
               </div>
           </div>

         <Slider range
          className=' text-primary-color h-[5px]'
          min={1}
          max={200}
         
         
         
         />
          
      

      </div>
      </div>
    </>
  )
}

export default Checkbutton
