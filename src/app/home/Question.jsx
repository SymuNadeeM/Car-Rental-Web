"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Question = () => {
     
    const [questionOne, setquestionOne] = useState(false)
    const [questionTwo, setquestionTwo] = useState(false)
    const [questionThr, setquestionThr] = useState(false)
    const [questionFou, setquestionFou] = useState(false)
    const [questionFiv, setquestionFiv] = useState(false)
    const [questionSix, setquestionSix] = useState(false)


  return (
    <>
     <section className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px]'>
             <div className=' text-center flex flex-col items-center justify-center '>
                    <p className=' w-fit font-Inter font-bold bg-gray-text text-primary-color rounded-[5px] px-[10px] py-[2px] mb-[5px]'>Do You Have</p>
                    <h2 className=' font-semibold text-blue-text mb-[10px] text-[42px] tracking-tight leading-[50px]'>Any Questions?</h2>
             </div>
             <div className=' mt-[30px] grid md:grid-cols-2 md:gap-[26px]'>
                <div>
                    <ul>
                        <li>
                            <div onClick={()=> setquestionOne(!questionOne)} className=' duration-700 flex items-center justify-between border-b-[1px] border-[#dddddd] text-[17px] py-[15px] font-Outfit text-black opacity-90'>
                               <button>
                                 How do I get started with Car Rental?
                                </button>
                              <h4 className=" rounded text-[16px] bg-primary-color text-white flex items-center justify-center w-[30px] h-[30px]">
                               {
                                !questionOne? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className='  duration-500 '  />)
                               }
                   
                             </h4>
                            </div>
                            {questionOne && <div className="  pt-[10px] pb-[30px] "> 
                              <p className=' mb-[10px]  text-[16px] font-Inter text-[#4D5B7C]  leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                           </div>}
                        </li>
                        <li>
                            <div onClick={()=> setquestionTwo(!questionTwo)} className=' flex items-center justify-between border-b-[1px] border-[#dddddd] text-[17px] py-[15px] font-Outfit text-black opacity-90'>
                               <button>
                                 Can I rent a car with a debit card??
                                </button>
                              <h4 className=" rounded text-[16px] bg-primary-color text-white flex items-center justify-center w-[30px] h-[30px]">
                               {
                                !questionTwo? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className='  duration-500 '  />)
                               }
                   
                             </h4>
                            </div>
                            {questionTwo && <div className="  pt-[10px] pb-[30px] "> 
                              <p className=' mb-[10px]  text-[16px] font-Inter text-[#4D5B7C]  leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                           </div>}
                        </li>
                        <li>
                            <div onClick={()=> setquestionThr(!questionThr)} className=' flex items-center justify-between border-b-[1px] border-[#dddddd] text-[17px] py-[15px] font-Outfit text-black opacity-90'>
                               <button>
                                 Can I rent a car with a debit card??
                                </button>
                              <h4 className=" rounded text-[16px] bg-primary-color text-white flex items-center justify-center w-[30px] h-[30px]">
                               {
                                !questionThr? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className='  duration-500 '  />)
                               }
                   
                             </h4>
                            </div>
                            {questionThr && <div className="  pt-[10px] pb-[30px] "> 
                              <p className=' mb-[10px]  text-[16px] font-Inter text-[#4D5B7C]  leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                           </div>}
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <div onClick={()=> setquestionFou(!questionFou)} className=' flex items-center justify-between border-b-[1px] border-[#dddddd] text-[17px] py-[15px] font-Outfit text-black opacity-90'>
                               <button>
                               What is a rental car security deposit?
                                </button>
                              <h4 className=" rounded text-[16px] bg-primary-color text-white flex items-center justify-center w-[30px] h-[30px]">
                               {
                                !questionFou? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className='  duration-500 '  />)
                               }
                   
                             </h4>
                            </div>
                            {questionFou && <div className="  pt-[10px] pb-[30px] "> 
                              <p className=' mb-[10px]  text-[16px] font-Inter text-[#4D5B7C]  leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                           </div>}
                        </li>
                        <li>
                            <div onClick={()=> setquestionFiv(!questionFiv)} className=' flex items-center justify-between border-b-[1px] border-[#dddddd] text-[17px] py-[15px] font-Outfit text-black opacity-90'>
                               <button>
                               Can I cancel or modify my reservation?
                                </button>
                              <h4 className=" rounded text-[16px] bg-primary-color text-white flex items-center justify-center w-[30px] h-[30px]">
                               {
                                !questionFiv? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className='  duration-500 '  />)
                               }
                   
                             </h4>
                            </div>
                            {questionFiv && <div className="  pt-[10px] pb-[30px] "> 
                              <p className=' mb-[10px]  text-[16px] font-Inter text-[#4D5B7C]  leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                           </div>}
                        </li>
                        <li>
                            <div onClick={()=> setquestionSix(!questionSix)} className=' flex items-center justify-between border-b-[1px] border-[#dddddd] text-[17px] py-[15px] font-Outfit text-black opacity-90'>
                               <button>
                               Is it possible to extend my rental period?
                                </button>
                              <h4 className=" rounded text-[16px] bg-primary-color text-white flex items-center justify-center w-[30px] h-[30px]">
                               {
                                !questionSix? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className='  duration-500 '  />)
                               }
                   
                             </h4>
                            </div>
                            {questionSix && <div className="  pt-[10px] pb-[30px] "> 
                              <p className=' mb-[10px]  text-[16px] font-Inter text-[#4D5B7C]  leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                           </div>}
                        </li>
                    </ul>
                </div>
             </div>
    </section>         
      
    </>
  )
}

export default Question
