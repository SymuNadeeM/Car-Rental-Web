import Image from 'next/image'
import inner from '../assets/carlistinner.jpg'
import Navbar from '../components/Navbar'

const InnerNews = () => {
  return (
    <>
       <div className=' relative '>
          <Image src={inner} alt='' className=' bg-cover w-full h-[267px]  brightness-75' />
          <div className=' absolute top-0 left-0'> <Navbar />    </div>  
          <div className=' absolute top-[42%] left-[35%] right-[38%] bottom-[46%]'>
            <h1 className=' text-white tracking-[-2px] leading-[52px] text-[52px] font-[500] font-Outfit'>News & Updates</h1>
          </div>
      </div>
    </>
  )
}

export default InnerNews
