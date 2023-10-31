"use client"
import React, { useState } from 'react'
import Slider,{ Range } from 'rc-slider';
import {LuBadgeDollarSign} from 'react-icons/lu'
import 'rc-slider/assets/index.css';


//https://www.npmjs.com/package/rc-slider

// const MIN = 100;
// const MAX = 12000;

const Checkbutton = () => {
  
  const[pricedata,setPricedata] = useState(0)

  // const [values, setValues] = useState( [MIN, MAX])
  // console.log("vales", values);
    
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
      <div className=' mt-[30px] w-full h-fit  bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
         <h4 className='  mb-[15px] leading-[26px]  text-[17px]  text-blue-text font-semibold font-Outfit'>Price ($)</h4>
          <div className=' mb-3 flex items-center  w-full '>
             <div className=' flex items-center justify-center w-[24%] text-primary-color  bg-gray-300  px-[15px] py-[8px]   border-[1px] border-gray-300'>
                <LuBadgeDollarSign size={24} /> 
             </div >
             <div className=' w-[80%] bg-white text-gray-700 px-[15px] py-[8px]  border-l-0 border-[1px] border-gray-300'>
             <h3>{pricedata}</h3>
             </div>
          </div>  
         <input  className=' w-full accent-primary-color bg-gray-300' type="range" min='0' max='100' step='1' value={pricedata} onChange={(e)=>setPricedata(e.target.value)}   />
      </div>
      {/* <div className=' mt-[30px] w-full h-fit  bg-white  border-[1px] border-[#00000026] shadow-lg p-[25px] rounded-[6px]'>
          <h3>Price <span>Range</span></h3>
          <div>
             ${values[0]}-${values[1]}
             <small>Current Range: $2324</small>
             <Slider 
               className=' w-full h-[15px] bg-gray-400'
               onChange={setValues}
               value={values}
               min={MIN}
               max={MAX}
             />
          </div>
      </div> */}
      </div>
    </>
  )
}

export default Checkbutton
