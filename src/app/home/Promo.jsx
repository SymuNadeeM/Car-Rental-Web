import Image from 'next/image'
import blogpic1 from '../assets/pic-blog-1.jpg'
import blogpic2 from '../assets/pic-blog-2.jpg'
import blogpic3 from '../assets/pic-blog-3.jpg'
import React from 'react'
import Link from 'next/link'

const Promo = () => {
  return (
    <>
      <section className=' py-[60px] md:py-[90px] xs:px-[20px] sm:px-[30px] md:px-[115px]'>
             <div className=' text-center flex flex-col items-center justify-center '>
                    <p className=' w-fit font-Inter font-bold bg-gray-text text-primary-color xs:text-[12px] md:text-[16px] rounded-[5px] px-[10px] py-[2px] mb-[5px]'>Latest From Us</p>
                    <h2 className=' font-semibold text-blue-text mb-[10px] xs:text-[28px] md:text-[42px] tracking-tight xs:leading-[40px] md:leading-[50px]'>News & Promo</h2>
                    <div className=' grid md:grid-cols-5 text-center '>
                      <div className=' grid col-span-1'></div>
                      <div className=' grid md:col-span-3'>
                      <p className=' mb-[20px]  text-center text-blue-text drop-shadow-md' >Breaking news, fresh perspectives, and in-depth coverage - stay ahead with our latest news, insights, and analysis.</p>
                      </div>
                     <div className=' grid md:col-span-1'></div>
                    </div>
                 
             </div>

             <div className=' mt-[30px] grid md:grid-cols-3 gap-[26px]'>
                 <div className=' relative'>
                     <Image src={blogpic1} alt='' className=' w-full h-[240px] bg-cover rounded-md' />
                    <div className=' relative border-b-[2px] border-primary-color xs:pb-[20px] md:pb-[30px] xs:pt-[15px] md:pt-[20px] xs:px-[15px] md:px-[30px] bg-white mx-[20px] mt-[-40px] mb-0 z-30 rounded-tr-[10px] rounded-tl-[10px] '>
                        <h4 className=' my-[10px] text-[18px] leading-[26px] font-Outfit font-semibold text-blue-text'>Enjoy Best Travel Experience</h4>
                        <p className=' mb-[20px] text-[16px] text-blue-text opacity-85'>Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.</p>
                         <Link href={""} className=' mb-[10px] w-[118px] text-[14px] text-white font-[800] rounded-[6px] font-Inter py-[8px] px-[25px] bg-primary-color'>Read More</Link>
                    </div>
                    <div className=' absolute flex flex-col justify-center items-center top-[20px] left-[20px] w-[54px] h-[63px] rounded-[5px] bg-primary-color text-white '>
                       <h5 className=' font-bold text-[32px] px-[8px] '>10</h5>
                       <p className=' text-[10px] tracking-[5px] font-Inter mb-[8px] ' >MAR</p>
                    </div>
                 </div>
                 <div className='relative'>
                     <Image src={blogpic2} alt='' className=' w-full h-[240px] bg-cover rounded-md' />
                    <div className=' relative border-b-[2px] border-primary-color pb-[30px] pt-[20px] px-[30px] bg-white mx-[20px] mt-[-40px] mb-0 z-30 rounded-tr-[10px] rounded-tl-[10px] '>
                        <h4 className=' my-[10px] text-[18px] leading-[26px] font-Outfit font-semibold text-blue-text'>Enjoy Best Travel Experience</h4>
                        <p className=' mb-[20px] text-[16px] text-blue-text opacity-85'>Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.</p>
                         <Link href={""} className=' mb-[10px] w-[118px] text-[14px] text-white font-[800] rounded-[6px] font-Inter py-[8px] px-[25px] bg-primary-color'>Read More</Link>
                    </div>
                    <div className=' absolute flex flex-col justify-center items-center top-[20px] left-[20px] w-[54px] h-[63px] rounded-[5px] bg-primary-color text-white '>
                       <h5 className=' font-bold text-[32px] px-[8px] '>22</h5>
                       <p className=' text-[10px] tracking-[5px] font-Inter mb-[8px] ' >MAR</p>
                    </div>
                 </div>
                 <div className='relative'>
                     <Image src={blogpic3} alt='' className=' w-full h-[240px] bg-cover rounded-md' />
                    <div className=' relative border-b-[2px] border-primary-color pb-[30px] pt-[20px] px-[30px] bg-white mx-[20px] mt-[-40px] mb-0 z-30 rounded-tr-[10px] rounded-tl-[10px] '>
                        <h4 className=' my-[10px] text-[18px] leading-[26px] font-Outfit font-semibold text-blue-text'>Enjoy Best Travel Experience</h4>
                        <p className=' mb-[20px] text-[16px] text-blue-text opacity-85'>Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.</p>
                         <Link href={""} className=' mb-[10px] w-[118px] text-[14px] text-white font-[800] rounded-[6px] font-Inter py-[8px] px-[25px] bg-primary-color'>Read More</Link>
                    </div>
                    <div className=' absolute flex flex-col justify-center items-center top-[20px] left-[20px] w-[54px] h-[63px] rounded-[5px] bg-primary-color text-white '>
                       <h5 className=' font-bold text-[32px] px-[8px] '>14</h5>
                       <p className=' text-[10px] tracking-[5px] font-Inter mb-[8px] ' >MAR</p>
                    </div>
                 </div>
             </div>
       </section>      
    </>
  )
}

export default Promo
