"use client"
import Image from 'next/image'
import Link from 'next/link'
import {FiChevronDown, FiMenu} from 'react-icons/fi'
import {GrFormClose} from 'react-icons/gr'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md'
import logo from "../assets/logo.png"
import React, { useState } from 'react'

const Navbar = () => {

   const [colorChange, setColorChange] = useState(false)
   const [menuOpen,setmenuOpen] = useState(false)
  const [isOpenHome, setIsOpenHome] =useState(false)
  const [isOpenCarlist, setIsOpenCarlist] =useState(false)
  const [isOpenAccount, setIsOpenAccount] =useState(false)
  const [isOpenPages, setIsOpenPages] =useState(false)
  const [isOpenNews, setIsOpenNews] =useState(false)

   const changeNavbarColor =()=>{
    if(window.scrollY >= 80){
      setColorChange(true)
    }
    else{
      setColorChange(false)
    }
   }
   window.addEventListener('scroll', changeNavbarColor)

 
  


  const handlemenu =()=>{
    setmenuOpen(!menuOpen)
  }

  return (
    <>
      <div className={colorChange?" hidden md:flex  fixed top-0 left-0 duration-500 right-0 z-50 shadow-md bg-white text-blue-text  md:px-[100px] ":" duration-500 hidden md:flex  bg-transparent text-white  md:px-[100px]"}>
         <div className='px-[15px] flex items-center justify-between gap-[102px]'>
               <Link href={'/'}>
                   <Image src={logo}  alt=';'  />
               </Link>
                 <nav>
                 <ul className={colorChange?"flex  items-center  text-blue-text font-medium text-[15px] font-Inter":"flex  items-center  text-white font-medium text-[15px] font-Inter"}>
                    <li className='py-[30px] pl-[30px] relative  group'><Link href={"/"} className=' flex items-center  font-medium gap-1'>Home <FiChevronDown /></Link> 
                        <ul className="z-10  absolute duration-300  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white rounded-[3px]  mt-[30px]  w-[190px]  h-auto shadow-xl">
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >New: Homepage Dark</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage Main</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage 1</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage 2</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage 3</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage 4</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage 5</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Homepage 6</Link> </li>
                       </ul>
                    
                    </li>
                    <li className='py-[30px] pl-[30px] relative  group'><Link href={"/"} className=' flex items-center gap-1'>Cars <FiChevronDown /></Link> 
                        <ul className="z-10  absolute  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white rounded-[3px]  mt-[30px]  w-[190px]  h-auto shadow-xl">
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/carlist"} >Cars List 1</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/carlist"} >Cars List 1 Dark</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/carlist"} >Cars List 1</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Cars List 1 Dark</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Cars single</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >Cars single dark</Link> </li>
                       </ul>
                    
                    </li>
                    <li className='py-[30px] pl-[30px]'><Link href={"/booking"}>Booking</Link> </li>
                    <li className='py-[30px] pl-[30px] relative  group'><Link href={"/"} className=' flex items-center gap-1'>My Account <FiChevronDown /></Link> 
                        <ul className="z-10  absolute  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white rounded-[3px]  mt-[30px]  w-[190px]  h-auto shadow-xl">
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/myprofile"} >Dashboard</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/myprofile"} >My Profile</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/myfavo"} >My Orders</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/myfavo"} >My Favorite Cars</Link> </li>
                       </ul>
                    
                    </li>
                    <li className='py-[30px] pl-[30px] relative  group'><Link href={"/"} className=' flex items-center gap-1'>Pages <FiChevronDown /></Link> 
                        <ul className="z-10  absolute  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white rounded-[3px]  mt-[30px]  w-[190px]  h-auto shadow-xl">
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/aboutus"} >About Us</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/contactus"} >Contact</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/login"} >Login</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/register"} >Register</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >404 Page</Link> </li>
                       </ul>
                    
                    </li>
                    <li className='py-[30px] pl-[30px] relative  group'><Link href={"/"} className=' flex items-center gap-1'>News <FiChevronDown /></Link> 
                        <ul className="z-10  absolute  invisible group-hover:visible text-text-black font-medium text-[15px] font-Inter bg-white rounded-[3px]  mt-[30px]  w-[190px]  h-auto shadow-xl">
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/mynews"} >News Standard</Link> </li>
                            <li className=" border-b-[1px] border-[#ffffff1a] px-[15px] py-[5px] hover:bg-secondary-color hover:text-white duration-300" ><Link href={"/"} >News Grid</Link> </li>
                       </ul>
                    
                    </li>
                    <li className='py-[30px] pl-[30px]'><Link href={"/"}>Elements</Link> </li>
                    
                  </ul>
              </nav>
                <button className=' font-bold text-[14px] text-white bg-primary-color rounded-[5px] py-[6px] px-[26px]'><Link href={''}>Sing In</Link></button>
            </div> 
      </div> 
       
       {/* small sceen */}
       <div className=' md:hidden fixed top-0 right-0 left-0 z-50 bg-white shadow-xl w-full h-[80px] px-[20px]'>
           
            <div className=' flex items-center   justify-between'>
               {/* logo */}
              <div>
               <Link href={'/'}>
                   <Image src={logo}  alt=';' className=' py-[10px]'  />
               </Link>
              </div>
               <div onClick={handlemenu}>
               <FiMenu  size={30} />
               </div>
             </div>
             <div className={ menuOpen ?"fixed z-50 left-0 top-0 w-[65%]  h-full overflow-auto  ease-in-out duration-700 bg-[#d3d1d1]" :"fixed left-[-100%] duration-200"}>
            <div className=" ">
                 <div className=" flex items-center justify-between p-[12px]  bg-white ">
                      <Link href={"/"} className="flex mr-[30px] relative">
                      <Image src={logo} alt=""  className=" text-primary-color "/>
                      
                      </Link>
                     <GrFormClose onClick={handlemenu}   className=" w-[36px] h-[36px] p-[4px] mt-[4px] text-white bg-primary-color" />
                </div> 
              <nav className="py-[10px] snap-y z-40">
                <ul>
                  <li className=" relative h-auto  px-[20px]">
                   <div onClick={()=> setIsOpenHome(!isOpenHome)} className=" flex items-center justify-between  border-b-[1px] border-[#eee]  ">
                      <button  className=" flex  relative text-[16px]  py-[12px]">
                        <Link href={'/'}>Home</Link>
                      </button>
                        <h4 className=" text-[16px]">
                      {
                       !isOpenHome? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                      }
                   
                       </h4>
                   </div>
              
                  {isOpenHome && <div className="  bg-slate-100  duration-500 "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >HomePage 1</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >HomePage 2</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >Homepage Main</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >Home 3</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >Home 4</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >Home 5</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >Home 6</Link></li>
                      
                     </ul>
                  </div>}
      
                 </li>
                  <li className=" relative h-auto  px-[20px]">
                   <div onClick={()=> setIsOpenCarlist(!isOpenCarlist)} className=" flex items-center justify-between  border-b-[1px] border-[#eee]  ">
                      <button  className=" flex  relative text-[16px]  py-[12px]">
                        <Link href={''}>Cars</Link>
                      </button>
                        <h4 className=" text-[16px]">
                      {
                       !isOpenCarlist? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                      }
                   
                       </h4>
                   </div>
              
                  {isOpenCarlist && <div className="  bg-slate-100  duration-500 "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/carlist'} onClick={handlemenu} >Cars List 1</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/carlist'} onClick={handlemenu} >Cars List 1 Dark</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/carlist'} onClick={handlemenu} >Cars single</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/carlist'} onClick={handlemenu} >Cars single dark</Link></li>
                     </ul>
                  </div>}
      
                 </li>
                 <li className=" relative h-auto  px-[20px]">
                   <div  className=" flex items-center justify-between  border-b-[1px] border-[#eee]  ">
                      <button  className=" flex  relative text-[16px]  py-[12px]">
                        <Link href={'/booking'}>Booking</Link>
                      </button>
                       
                      
                   </div>
              
                 
      
                 </li>
                 <li className=" relative h-auto  px-[20px]">
                   <div onClick={()=> setIsOpenAccount(!isOpenAccount)} className=" flex items-center justify-between  border-b-[1px] border-[#eee]  ">
                      <button  className=" flex  relative text-[16px]  py-[12px]">
                        <Link href={''}>My Account</Link>
                      </button>
                        <h4 className=" text-[16px]">
                      {
                       !isOpenAccount? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                      }
                   
                       </h4>
                   </div>
              
                  {isOpenAccount && <div className="  bg-slate-100  duration-500 "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/myprofile'} onClick={handlemenu} >Dashboard</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/myprofile'} onClick={handlemenu} >My Profile</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/myfavo'} onClick={handlemenu} >My Orders</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/myfavo'} onClick={handlemenu} >My Favourite Cars</Link></li>
                     </ul>
                  </div>}
      
                 </li>
                 <li className=" relative h-auto  px-[20px]">
                   <div onClick={()=> setIsOpenPages(!isOpenPages)} className=" flex items-center justify-between  border-b-[1px] border-[#eee]  ">
                      <button  className=" flex  relative text-[16px]  py-[12px]">
                        <Link href={''}>Pages</Link>
                      </button>
                        <h4 className=" text-[16px]">
                      {
                       !isOpenPages? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                      }
                   
                       </h4>
                   </div>
              
                  {isOpenPages && <div className="  bg-slate-100  duration-500 "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/aboutus'} onClick={handlemenu} >About Us</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/contactus'} onClick={handlemenu} >Contact</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/login'} onClick={handlemenu} >Login</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/resgister'} onClick={handlemenu} >Register</Link></li>
                     </ul>
                  </div>}
      
                 </li>
                 <li className=" relative h-auto  px-[20px]">
                   <div onClick={()=> setIsOpenNews(!isOpenNews)} className=" flex items-center justify-between  border-b-[1px] border-[#eee]  ">
                      <button  className=" flex  relative text-[16px]  py-[12px]">
                        <Link href={'/'}>News</Link>
                      </button>
                        <h4 className=" text-[16px]">
                      {
                       !isOpenNews? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                      }
                   
                       </h4>
                   </div>
              
                  {isOpenNews && <div className="  bg-slate-100  duration-500 "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/mynews'} onClick={handlemenu} >News Standard</Link></li>
                      <li className=" py-[12px] pr-[30px] px-[20px]  border-b-[1px] hover:bg-primary-color hover:text-white border-[#bbbb] duration-300"><Link href={'/'} onClick={handlemenu} >News Grid </Link></li>

                     </ul>
                  </div>}
      
                 </li>
               </ul>
              </nav>
            </div>
            </div>
       </div>

    </>
  )
}

export default Navbar
