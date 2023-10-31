import { BiChevronLeft } from 'react-icons/bi'

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute top-[118px] bottom-[50%] left-[-15px] z-20  '  onClick={onClick}>
       <div className=' bg-white border-[1px] border-[#ccc]  hover:shadow-2xl hover:h-[43px] hover:w-[43px] duration-500  h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer'>
         <BiChevronLeft className='text-[#121212] text-[40px] hover:text-[45px] duration-500'    />
       </div>
    </div>
  )
}

export default PrevArrow
