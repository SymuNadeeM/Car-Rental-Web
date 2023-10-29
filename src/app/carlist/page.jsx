import React from 'react'
import InnerCarlist from './InnerCarlist'
import CardCar from './CardCar'
import Checkbutton from './Checkbutton'

const CarlistPage = () => {
  return (
    <>
      <InnerCarlist />
      <div className=' py-[60px] md:py-[90px] px-[30px] md:px-[115px]'> 
       <div className=' md:px-[10px] grid md:grid-cols-4 gap-[26px]'>
             <div className=' grid md:col-span-1'>
                  <Checkbutton />
             </div>
             <div className=' grid md:col-span-3'>
                <CardCar />
             </div>
       </div>
      
      </div>
    </>
  )
}

export default CarlistPage
