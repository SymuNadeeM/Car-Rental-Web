import Image from 'next/image'
import direct from '../assets/aboutPerBack.jpg'
import dper1 from '../assets/direcPer1.jpg'
import dper2 from '../assets/direcPer2.jpg'
import dper3 from '../assets/direcPer3.jpg'
import dper4 from '../assets/direcPer4.jpg'
import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoPinterest } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'

const Directors = () => {
  return (
    <>
    <div >
        <div className=' relative'>
         <Image src={direct} alt='' className=' w-full h-[2332px] md:h-[627px] ' />
      
       
        <div className=' absolute top-[90px] bottom-[90px]  left-[30px] right-[30px] md:left-[115px] md:right-[115px]'>
           <div className='  flex items-center justify-center '>
                    <h2 className=' font-semibold text-white mb-[10px] text-[42px] tracking-tight leading-[50px]'>Board of Directors</h2>
            </div>
            <div className=' mt-[27px] md:grid md:grid-cols-4 gap-[26px]'>
                  <div>
                       <div className=' relative'>
                           <Image src={dper1} alt='' className=' w-[425px] h-[425px] md:w-[261px] md:h-[261px] rounded-[3px] ' />
                          <div className='  absolute left-[61px] right-[61px] bottom-[38px]'>
                             <div className=' flex items-center justify-center gap-[8px]'>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoFacebook size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <AiOutlineTwitter size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoLinkedin size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoPinterest size={20}  />
                                  </div>
                             </div>
                          </div>
                          
                       </div>
                            <div className=' text-center my-[20px]'>
                                  <h4 className='  font-[600] text-white font-Outfit text-[20px] leading-[26px]'>Fynley Wilkinson</h4>
                                  <p className=' text-gray-300 text-[15px] font-Inter'>Chief Creative Officer</p>
                              </div>
                  </div>
                  <div>
                       <div className=' relative'>
                           <Image src={dper2} alt='' className=' w-[425px] h-[425px] md:w-[261px] md:h-[261px] rounded-[3px] ' />
                          <div className='  absolute left-[61px] right-[61px] bottom-[38px]'>
                             <div className=' flex items-center justify-center gap-[8px]'>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoFacebook size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <AiOutlineTwitter size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoLinkedin size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoPinterest size={20}  />
                                  </div>
                             </div>
                          </div>
                          
                       </div>
                            <div className=' text-center my-[20px]'>
                                  <h4 className='  font-[600] text-white font-Outfit text-[20px] leading-[26px]'>Peter Welsh</h4>
                                  <p className=' text-gray-300 text-[15px] font-Inter'>Chief Technology Officer</p>
                              </div>
                  </div>
                  <div>
                       <div className=' relative'>
                           <Image src={dper3} alt='' className=' w-[425px] h-[425px] md:w-[261px] md:h-[261px] rounded-[3px] ' />
                          <div className='  absolute left-[61px] right-[61px] bottom-[38px]'>
                             <div className=' flex items-center justify-center gap-[8px]'>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoFacebook size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <AiOutlineTwitter size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoLinkedin size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoPinterest size={20}  />
                                  </div>
                             </div>
                          </div>
                          
                       </div>
                            <div className=' text-center my-[20px] '>
                                  <h4 className='  font-[600] text-white font-Outfit text-[20px] leading-[26px]'>John Shepard</h4>
                                  <p className=' text-gray-300 text-[15px] font-Inter'>Chief Executive Officer</p>
                              </div>
                  </div>
                  <div>
                       <div className=' relative'>
                           <Image src={dper4} alt='' className='w-[425px] h-[425px] md:w-[261px] md:h-[261px] rounded-[3px] ' />
                          <div className='  absolute left-[61px] right-[61px] bottom-[38px]'>
                             <div className=' flex items-center justify-center gap-[8px]'>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoFacebook size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <AiOutlineTwitter size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoLinkedin size={20}  />
                                  </div>
                                  <div className=' rounded-[3px] w-[28px] h-[28px] bg-primary-color text-white flex items-center justify-center'>
                                       <BiLogoPinterest size={20}  />
                                  </div>
                             </div>
                          </div>
                          
                       </div>
                            <div className=' text-center my-[20px]'>
                                  <h4 className='  font-[600] text-white font-Outfit text-[20px] leading-[26px]'>Robyn Peel</h4>
                                  <p className=' text-gray-300 text-[15px] font-Inter'>Director of Finance</p>
                              </div>
                  </div>
            </div>
      </div>
      </div>
    </div>   
    </>
  )
}

export default Directors
