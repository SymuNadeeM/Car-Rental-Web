'use client'

import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';


const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
    <div className='fixed  bottom-[15px] right-[20px]'>
		<button className='  w-[40px] h-[40px] rounded-md text-white  bg-primary-color bottom-0 right-2' 
        onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} > 
		<div className=' flex items-center justify-center'>
		<IoIosArrowUp size={22}  /> 
		</div>
		</button> 
	</div>	
); 
} 

export default ScrollButton; 
