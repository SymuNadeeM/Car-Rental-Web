'use client'
import Image from 'next/image'
import quality from '../assets/quality.jpg'
import React, { useState } from 'react'

const QualityCars = () => {
    const [tabs, setTabs] = useState({ name: "deluxury" });
  return (
    <>
      <div className=' grid md:grid-cols-2 '>
          <div className=' hidden md:flex'>
               <Image src={quality} alt='' className=' bg-cover w-full h-[522px]' />
          </div>
          <div className=' px-[30px] py-[90px]  md:p-[90px]  bg-gray-200'>
          <h2 className=' font-semibold text-blue-text font-Outfit mb-[10px] text-[42px] tracking-[-1.8px] leading-[50px]'>Only Quality For Clients</h2>
          <div className="mb-[30px] mt-[35px] ">
             <ul className="flex flex-wrap  -mb-px text-sm font-medium text-center">
            <li
              className="mr-4 "
              role="presentation"
              onClick={() => setTabs({ name: "deluxury" })}
            >
              <button
                className={
                  tabs.name === "deluxury"
                    ? " w-[106px] h-[45px] inline-block uppercase  rounded-[4px] shadow-md font-Outfit  bg-primary-color text-white duration-200 "
                    : "w-[106px] h-[45px] inline-block   rounded-[4px] shadow-md bg-transparent  text-blue-text opacity-80 font-Outfit uppercase duration-200"
                }
              >
                luxury
              </button>
            </li>

            <li
              className="mr-4 "
              onClick={() => setTabs({ name: "comfort" })}
            >
              <button
                className={
                  tabs.name === "comfort"
                    ? " w-[106px] h-[45px] inline-block uppercase  rounded-[4px] shadow-md font-Outfit  bg-primary-color text-white duration-200 "
                    : "w-[106px] h-[45px] inline-block   rounded-[4px] shadow-md bg-transparent  text-blue-text opacity-80 font-Outfit uppercase duration-200"
                }
                id="comfort-tab"
                type="button"
              >
                Comfort
              </button>
            </li>

            <li className="mr-4" onClick={() => setTabs({ name: "prestige" })}>
              <button
                className={
                  tabs.name === "prestige"
                    ? " w-[106px] h-[45px] inline-block uppercase  rounded-[4px] shadow-md font-Outfit  bg-primary-color text-white duration-200 "
                    : "w-[106px] h-[45px] inline-block   rounded-[4px] shadow-md bg-transparent  text-blue-text opacity-80 font-Outfit uppercase duration-200"
                }
                id="prestige-tab"
                type="button"
              >
                Prestige
              </button>
            </li>

           
          </ul>
           </div>
             <div>
             {tabs.name === "deluxury" && <div> <p className=' text-blue-text leading-[25px] opacity-80 text-[16px] font-Inter'>We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.</p> </div> }
             {tabs.name === "comfort" && <div> <p className=' text-blue-text leading-[25px] opacity-80 text-[16px] font-Inter'>We prioritize your comfort and convenience throughout your journey. We understand that a comfortable ride can make a world of difference, whether you are embarking on a business trip or enjoying a leisurely vacation. That is why we offer a wide range of well-maintained, comfortable cars that cater to your specific needs.</p> </div> }
             {tabs.name === "prestige" && <div> <p className=' text-blue-text leading-[25px] opacity-80 text-[16px] font-Inter'>We understand that prestige goes beyond luxury. It is about making a statement, embracing sophistication, and indulging in the finer things in life. That is why we offer an exclusive selection of prestigious cars that exude elegance, style, and status.</p> </div> }
             </div>
          </div>
      </div>
    </>
  )
}

export default QualityCars
