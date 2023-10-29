import React from 'react'
import InnerNews from './InnerNews'
import NewsCard from './NewsCard'
import NewSidbar from './NewSidbar'

const page = () => {
  return (
    <>
        <InnerNews />
        <section className=' py-[90px] md:py-[90px] px-[30px] md:px-[115px]'>
             <div className=' grid md:grid-cols-12 gap-[50px]'>
                <div className=' grid  md:col-span-8'>
                        <NewsCard />
                </div>
                <div className=' w-full h-fit grid  md:col-span-4'>
                      <NewSidbar />
                </div>
             </div>
        </section>
    </>
  )
}

export default page
