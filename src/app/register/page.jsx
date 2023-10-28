import React from 'react'
import InnerRegister from './InnerRegister'

const Registerpage = () => {
  return (
    <>
      <InnerRegister />
      <div className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px]'>
      <div className=' grid grid-cols-12 '>
          <div className=' grid col-span-2'></div>
          <div className=' grid col-span-8'>
              <div>
                 <h3 className=' text-[26px] mb-[20px] tracking-[-.5px] font-[600] text-blue-text font-Outfit'>Do not have an account? Register now.</h3>
                 <p className=' text-[16px] mb-[30px] text-blue-text opacity-80 '>Welcome to Rentaly. We are excited to have you on board. By creating an account with us, you will gain access to a range of benefits and convenient features that will enhance your car rental experience.</p>
                  <form action="">
                    <div className=' grid grid-cols-2 gap-[30px]'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[500] text-[#606060] ' > Name: </label>
                            <input type="text" className=' w-full outline-none p-[8px] mb-[10px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[500] text-[#606060] ' > Email Address: </label>
                            <input type="email" className=' w-full outline-none p-[8px] mb-[10px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-2 gap-[30px]'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[500] text-[#606060] ' > Choose a Username: </label>
                            <input type="text" className=' w-full outline-none p-[8px] mb-[10px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[500] text-[#606060] ' > Phone: </label>
                            <input type="email" className=' w-full outline-none p-[8px] mb-[10px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-2 gap-[30px]'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[500] text-[#606060] ' > Password: </label>
                            <input type="password" className=' w-full outline-none p-[8px] mb-[10px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className=' font-[500] text-[#606060] ' > Re-enter Password: </label>
                            <input type="password" className=' w-full outline-none p-[8px] mb-[10px] border-[2px] border-[#eeeeee] rounded-[6px] text-[#333] bg-[#00000006] ' />
                        </div>
                    </div>
                    <button className=' bg-primary-color font-Inter text-white text-[14px] font-[800] py-[7px] px-[23px] rounded-[5px]'>Register Now</button>
                </form>
              </div>
          </div>
          <div className=' grid col-span-2'></div>
      </div>
      </div>
    </>
  )
}

export default Registerpage
