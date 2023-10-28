"use client"
import React, { useState } from 'react'

const ProfilePage = () => {
   
  const [profTab, setprofTab] = useState({name:"profile"})

  return (
    <>
        <div className='border rounded-[6px]  md:rounded-[10px] px-[20px] py-[30px] w-full h-fit shadow-lg   bg-white'>

        
            <div className=' flex items-center gap-[40px] mb-[30px]'>
                <div onClick={()=> setprofTab({name:"profile"})}>
                     <button className={profTab.name === "profile"? " font-semibold text-[16px] text-blue-text font-Inter border-b-[2px] border-primary-color ":" font-semibold text-[16px] text-gray-text font-Inter"} >
                        Profile
                     </button>
                </div>
                <div onClick={()=> setprofTab({name:"notification"})}>
                     <button className={profTab.name === "notification"? " font-semibold text-[16px] text-blue-text font-Inter border-b-[2px] border-primary-color ":" font-semibold text-[16px] text-gray-text font-Inter"} >
                        notification
                     </button>
                </div>
            </div>
        
         {profTab.name === "profile" && <div><div>
                  <form action="">
                    <div className=' grid md:grid-cols-2 gap-[10px] md:gap-[30px]'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Username </label>
                            <input type="text" placeholder=' Enter your username' className=' w-full outline-none p-[8px] md:mb-[20px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Email Address </label>
                            <input type="email" placeholder='Enter email' className=' w-full outline-none p-[8px] mb-[10px] md:mb-[20px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                    </div>
                    <div className=' grid md:grid-cols-2 gap-[10px] md:gap-[30px]'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > New Password </label>
                            <input type="password" placeholder='********' className=' w-full outline-none p-[8px] md:mb-[20px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Re-enter Password: </label>
                            <input type="password" placeholder='********' className=' w-full outline-none p-[8px] mb-[10px] md:mb-[20px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                    </div>
                    <div className=' grid md:grid-cols-2 gap-[10px] md:gap-[30px]'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Language </label>
                            <span className=' my-[5px] text-[14px] font-Inter text-[#acacac]'>Select your prefered language.</span>
                            <select type="text" className=' w-full outline-none p-[8px] md:mb-[20px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] '>
                               <option selected>English</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Hour Format </label>
                            <span className=' my-[5px] text-[14px] font-Inter text-[#acacac]'>Select your prefered language.</span>
                            <select type="text" className=' w-full outline-none p-[8px] mb-[20px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] '>
                               <option selected  >24-hour</option>
                              <option value="12">12-hour</option>
                            </select>
                        </div>
                    </div>
                    
                    <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Update Profile</button>
                 </form>
              </div>
              </div> }
         {profTab.name === "notification" && <div>
                  <div>
                      <div className=' grid md:grid-cols-2 gap-[30px]'>
                            <div className=' md:mb-[20px] border-[1px] border-[#dddddd] px-[20px] pt-[20px] rounded-[12px]  '>
                               <div className=' flex items-center justify-between'>
                                 <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Discount Notifications </label>
                               <div>
                               <label class="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" value="" class="sr-only peer" />
                                  <div class="w-11 h-6 bg-gray-200    dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-color"></div>
                                  </label>
                                    </div>
                                    </div>
                                  <p className=' my-[5px] text-[16px] font-Inter text-[#acacac]'>You wll get notification while new discount available.</p>
                            </div>
                            <div className=' w-full h-fit mb-[20px] border-[1px] border-[#dddddd] px-[20px] pt-[20px] rounded-[12px]  '>
                               <div className=' flex items-center justify-between'>
                                 <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > Daily Reports </label>
                               <div>
                               <label class="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" value="" class="sr-only peer" />
                                  <div class="w-11 h-6 bg-gray-200    dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-color"></div>
                                  </label>
                                    </div>
                                    </div>
                                  <p className=' my-[5px] text-[16px] font-Inter text-[#acacac]'>We will send you a report everyday.</p>
                            </div>
                      </div>
                      <div className=' mt-[10px] md:mt-0 grid md:grid-cols-2 gap-[30px]'>
                            <div className=' w-full h-fit md:mb-[20px] border-[1px] border-[#dddddd] px-[20px] pt-[20px] rounded-[12px]  '>
                               <div className=' flex items-center justify-between'>
                                 <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' > New Product Notification</label>
                               <div>
                               <label class="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" value="" class="sr-only peer" />
                                  <div class="w-11 h-6 bg-gray-200    dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-color"></div>
                                  </label>
                                    </div>
                                    </div>
                                  <p className=' my-[5px] text-[16px] font-Inter text-[#acacac]'>You wll get notification while new product available.</p>
                            </div>
                            <div className=' w-full h-fit mb-[20px] border-[1px] border-[#dddddd] px-[20px] pt-[20px] rounded-[12px]  '>
                               <div className=' flex items-center justify-between'>
                                 <label htmlFor="" className=' font-[600] text-[16px] text-blue-text ' >Monthly Reports</label>
                               <div>
                               <label class="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" value="" class="sr-only peer" />
                                  <div class="w-11 h-6 bg-gray-200    dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-color"></div>
                                  </label>
                                    </div>
                                    </div>
                                  <p className=' my-[5px] text-[16px] font-Inter text-[#acacac]'>We will send you a report each month.</p>
                            </div>
                      </div>
                      <button className=' bg-primary-color  text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Update Profile</button>
                  </div>
          
              </div> }
              </div>     
    </>
  )
}

export default ProfilePage
