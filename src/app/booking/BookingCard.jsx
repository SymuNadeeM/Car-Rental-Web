import React from 'react'
import { BsCalendar3, BsCarFront, BsEmojiSmile } from 'react-icons/bs'
import { GiNotebook } from 'react-icons/gi'

const BookingCard = () => {
  return (
    <>
       <section className=' py-[60px] md:pt-[30px] md:pb-[90px] px-[30px] md:px-[115px]'>
            <div className=' grid md:grid-cols-4 gap-[26px]'>
                <div className=' relative flex flex-col items-center justify-center   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[6px]'>
                    <div className=' mb-[20px] flex items-center justify-center w-[66px] h-[60px] bg-primary-color text-gray-300'>
                       <BsCarFront size={36} />
                    </div>
                    <div className=' pt-[50px] p-[30px]'>
                    <h4 className=' text-center mb-[10px] leading-[26px]  text-[20px] text-blue-text font-semibold font-Inter'>Choose a vehicle</h4>
                     <p className=' text-center text-blue-text opacity-85'>Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.</p>
                    </div>
                    <div className=' absolute left-[35%] right-[50%] top-[140px]'>
                          <h1 className=' text-[160px] text-primary-color  font-bold leading-[70px] font-Outfit tracking-[-5px] opacity-40'>1</h1>
                    </div>
                </div>
                <div className=' relative flex flex-col items-center justify-center   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[6px]'>
                    <div className=' mb-[20px] flex items-center justify-center w-[66px] h-[60px] bg-primary-color text-gray-300'>
                       <BsCalendar3 size={36} />
                    </div>
                    <div className=' pt-[50px] p-[30px]'>
                    <h4 className=' text-center mb-[10px] leading-[26px]  text-[20px] text-blue-text font-semibold font-Inter'>Pick location & date</h4>
                     <p className=' text-center text-blue-text opacity-85'>Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                    </div>
                    <div className=' absolute left-[35%] right-[50%] top-[140px]'>
                          <h1 className=' text-[160px] text-primary-color  font-bold leading-[70px] font-Outfit tracking-[-5px] opacity-40'>2</h1>
                    </div>
                </div>
                <div className=' relative flex flex-col items-center justify-center   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[6px]'>
                    <div className=' mb-[20px] flex items-center justify-center w-[66px] h-[60px] bg-primary-color text-gray-300'>
                       <GiNotebook size={36} />
                    </div>
                    <div className=' pt-[50px] p-[30px]'>
                    <h4 className=' text-center mb-[10px] leading-[26px]  text-[20px] text-blue-text font-semibold font-Inter'>Make a booking</h4>
                     <p className=' text-center text-blue-text opacity-85'>Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                    </div>
                    <div className=' absolute left-[35%] right-[50%] top-[140px]'>
                          <h1 className=' text-[160px] text-primary-color  font-bold leading-[70px] font-Outfit tracking-[-5px] opacity-40'>3</h1>
                    </div>
                </div>
                <div className=' relative flex flex-col items-center justify-center   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[6px]'>
                    <div className=' mb-[20px] flex items-center justify-center w-[66px] h-[60px] bg-primary-color text-gray-300'>
                       <BsEmojiSmile size={36} />
                    </div>
                    <div className=' pt-[50px] p-[30px]'>
                    <h4 className=' text-center mb-[10px] leading-[26px]  text-[20px] text-blue-text font-semibold font-Inter'>Sit back & relax</h4>
                     <p className=' text-center text-blue-text opacity-85'>Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                    </div>
                    <div className=' absolute left-[35%] right-[50%] top-[140px]'>
                          <h1 className=' text-[160px] text-primary-color  font-bold leading-[70px] font-Outfit tracking-[-5px] opacity-40'>4</h1>
                    </div>
                </div>
               
            </div>
       </section>
    </>
  )
}

export default BookingCard
