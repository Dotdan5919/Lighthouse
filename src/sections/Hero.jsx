import React, { useEffect, useState } from 'react'

import SideMiniNav from '../components/SideMiniNav'

import light_1  from '../Assets/images/light_1.png'
import light_2  from '../Assets/images/light_2.png'
import light_3  from '../Assets/images/light_3.png'


import Herofooter from '../components/Herofooter'
import RegularBtn from '../components/RegularBtn'
import { Link } from 'react-scroll'

const Hero = () => {
  const [slide,setSlide]=useState(1);
  

useEffect(()=>
{
  
  let sliderElement=document.getElementById('top-slider');

  switch(slide){

      case 1:
         
        sliderElement.style.scrollBehavior="smooth";
  
        sliderElement.scrollLeft=-200;
        
      break;
      case 2:
         
        sliderElement.style.scrollBehavior="smooth";
  
        sliderElement.scrollLeft=600;
        

      break;
      case 3:
         
        sliderElement.style.scrollBehavior="smooth";
  
        sliderElement.scrollLeft=1200;
        

      break;

      default:

     

  }

  setTimeout(() => {

    slide<3?setSlide(slide+1):setSlide(1)
   
     
      }, 5000);
}

,[slide]


)



  

    
  


  return (
    <div className='bg-myblack w-[100vw] lg:h-[100vh] sm:h-[130vh] lg:block flex flex-col items-center justify-center ' id="hero">
      

<div className="lg:grid lg:grid-cols-12 flex flex-col gap-5   lg:grid-flow-col justify-center w-[85%]   lg:h-[80vh]  pb-2 items-center"> 
  
<SideMiniNav ChangeSlide={slider=>setSlide(slider)} slideValue={slide} />
<div className="flex col-start-2 col-span-5 items-center  row-span-full gap-9  w-[600px] h-[600px] overflow-scroll " id="top-slider"> 

<img src={light_2} alt="" srcset=""  className='w-[500px] h-[520px] mt-20 mx-8 ' id="1" />
<img src={light_3} alt="" srcset=""  className='w-[500px] h-[520px] mt-20 mx-8' id="2" />
<img src={light_1} alt="" srcset=""  className='w-[500px] h-[520px] mt-20 mx-8' id="3" />


</div>

<div className="flex flex-col gap-7 row-span-full   text-white items-start col-start-7 col-span-3 w-auto">
    <h1 className='font-bold text-6xl lg:w-[600px] leading-relaxed'>Designer <br/> Lighting Store</h1>
    <p className='lg:w-[600px]'>Order a lamp for an individual
project, with a 20% discount
right now.
Get an additional coupon for
ordering online and for pickup</p>
<Link to="catalog" duration={400} offset={-200} smooth="true" >
<RegularBtn name="Order Now"  type="white" />
</Link>
    
</div>



</div>

<Herofooter/>
    </div>
  )
}

export default Hero
