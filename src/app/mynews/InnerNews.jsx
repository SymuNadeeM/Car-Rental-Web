import Image from 'next/image'
import inner from '../assets/carlistinner.jpg'

const InnerNews = () => {
  return (
    <>
       <div className=' relative   '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[187px] brightness-50' />
          <div className=' absolute top-[42%] left-[35%] right-[35%] bottom-[45%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>News & Updates</h1>
          </div>
     </div>
    </>
  )
}

export default InnerNews
