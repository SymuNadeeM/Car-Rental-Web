import Link from 'next/link'
import React from 'react'

const FooterBottom = () => {
  return (
    <>
      <section className=' py-[60px] md:py-[20px] px-[30px] md:px-[115px] text-white border-t-[1px] border-[#ffffff1a] '>
          <div className=' flex flex-col md:flex-row  flexmd:items-center  md:justify-between'>
              <div className=' mb-[8px] md:mb-0'>
                 <Link href={""} >Copyright 2023 - Rentaly by Designesia</Link>
              </div>
              <div className=' flex items-center gap-[30px]'>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
              </div>
          </div>
      </section>
    </>
  )
}

export default FooterBottom
