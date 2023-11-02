import Image from 'next/image'
import React from 'react'
import menpic from '../assets/1.jpg'
import { BiSolidQuoteRight } from 'react-icons/bi'
import Slider from "react-slick";


const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
      <div className=' mb-[60px]' >
            <h4 className=' text-[20px] leading-[26px] font-[660] text-blue-text font-Outfit'>Testimonials</h4>
            <div className=' w-[30px] h-[2px] bg-primary-color mb-[20px] mt-[10px]'></div>

            <Slider {...settings}>
             <div className=' relative bg-[#F5F5F5] rounded-[6px] pt-[70px] pb-[30px] px-[40px]'>
               <span className=' absolute top-0 left-0 bg-primary-color text-white p-[10px] rounded-tl-[6px] rounded-br-[10px]'><BiSolidQuoteRight size={30} /></span>
                <h4 className=' mb-[10px] text-[20px] font-semibold text-blue-text'>Excellent Service!</h4>
                <p className=' mt-[10px] mb-[20px] text-[#5d6371] text-[14px] font-[400] leading-[1.7em] tracking-[-.1px]'>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                <div className=' flex items-center gap-2'>
                    <Image alt=''  src={menpic} className=' w-[50px] h-[50px] rounded-full'/>
                   <p className=' font-bold text-[#161C2D] opacity-80 text-[14px]'>John, Pixar Studio</p>
                </div>
            </div>
             <div className=' relative bg-[#F5F5F5] rounded-[6px] pt-[70px] pb-[30px] px-[40px]'>
               <span className=' absolute top-0 left-0 bg-primary-color text-white p-[10px] rounded-tl-[6px] rounded-br-[10px]'><BiSolidQuoteRight size={30} /></span>
                <h4 className=' mb-[10px] text-[20px] font-semibold text-blue-text'>Excellent Service!</h4>
                <p className=' mt-[10px] mb-[20px] text-[#5d6371] text-[14px] font-[400] leading-[1.7em] tracking-[-.1px]'>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                <div className=' flex items-center gap-2'>
                    <Image alt=''  src={menpic} className=' w-[50px] h-[50px] rounded-full'/>
                   <p className=' font-bold text-[#161C2D] opacity-80 text-[14px]'>John, Pixar Studio</p>
                </div>
            </div>
             <div className=' relative bg-[#F5F5F5] rounded-[6px] pt-[70px] pb-[30px] px-[40px]'>
               <span className=' absolute top-0 left-0 bg-primary-color text-white p-[10px] rounded-tl-[6px] rounded-br-[10px]'><BiSolidQuoteRight size={30} /></span>
                <h4 className=' mb-[10px] text-[20px] font-semibold text-blue-text'>Excellent Service!</h4>
                <p className=' mt-[10px] mb-[20px] text-[#5d6371] text-[14px] font-[400] leading-[1.7em] tracking-[-.1px]'>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                <div className=' flex items-center gap-2'>
                    <Image alt=''  src={menpic} className=' w-[50px] h-[50px] rounded-full'/>
                   <p className=' font-bold text-[#161C2D] opacity-80 text-[14px]'>John, Pixar Studio</p>
                </div>
            </div>
             <div className=' relative bg-[#F5F5F5] rounded-[6px] pt-[70px] pb-[30px] px-[40px]'>
               <span className=' absolute top-0 left-0 bg-primary-color text-white p-[10px] rounded-tl-[6px] rounded-br-[10px]'><BiSolidQuoteRight size={30} /></span>
                <h4 className=' mb-[10px] text-[20px] font-semibold text-blue-text'>Excellent Service!</h4>
                <p className=' mt-[10px] mb-[20px] text-[#5d6371] text-[14px] font-[400] leading-[1.7em] tracking-[-.1px]'>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                <div className=' flex items-center gap-2'>
                    <Image alt=''  src={menpic} className=' w-[50px] h-[50px] rounded-full'/>
                   <p className=' font-bold text-[#161C2D] opacity-80 text-[14px]'>John, Pixar Studio</p>
                </div>
            </div>
            </Slider>
        </div> 
    </>
  )
}

export default CardSlider
