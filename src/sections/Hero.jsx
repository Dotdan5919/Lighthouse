import React, { useEffect, useState } from 'react'

import SideMiniNav from '../components/SideMiniNav'

import light_1  from '../Assets/images/light_1.png'
import light_2  from '../Assets/images/light_2.png'
import light_3  from '../Assets/images/light_3.png'


import Herofooter from '../components/Herofooter'
import RegularBtn from '../components/RegularBtn'
import { Link } from 'react-scroll'

const Hero = () => {


const sliderclass="bg-gray-100 w-10 p-1 rounded-sm ";
const sliderclassHide="bg-gray-100 w-10 p-1 rounded-sm opacity-10";

let sliderExtraClass="opacity-10";

  const [slide,setSlide]=useState(1);

  const runMe = ()=>{

    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId=setTimeout(() => {


    
    setSlide(slide<3?slide+1:1);
    
  }, 6000);

  
}


  const timeoutSetter=(x)=>
  {
    console.log("before timeout" + x);

    // Declare a variable to store the timeout ID
    let timeoutId;
  
    // Clear the existing timeout (if any)
    // clearTimeout(timeoutId);
  
    // Set a new timeout
    // timeoutId = setTimeout(() => {
    //   setSlide(x);
    //   console.log("hi" + x);
    // }, 6000);
  
    clearTimeout(timeoutId);
    // Store the timeout ID in a state variable if needed
    // setTimeoutId(timeoutId);
      
     
  }
      

useEffect(()=>
{
  
  let sliderElement=document.getElementById('top-slider');

  switch(slide){

      case 1:
         
        sliderElement.style.scrollBehavior="smooth";
  
        sliderElement.scrollLeft=-200;
        timeoutSetter(2);
        runMe();
        
        console.log("i am in 1");
        
      break;
      case 2:
         
        sliderElement.style.scrollBehavior="smooth";
  
        sliderElement.scrollLeft=600;
        timeoutSetter(3);
        runMe();
        console.log("i am in 2");

      break;
      case 3:
         
        sliderElement.style.scrollBehavior="smooth";
  
        sliderElement.scrollLeft=1200;
        timeoutSetter(1);
        runMe();
        console.log("i am in 3");

      break;

      default:

     

  }

  
  return () => clearTimeout();
  
}

,[slide]


)



  

    
  


  return (
    <div className='bg-myblack w-[100vw] overflow-hidden sm-pb-0 pb-7  h-fit lg:block flex flex-col items-center justify-center ' id="hero">
      

<div className="lg:grid lg:grid-cols-12 flex flex-col gap-5   lg:grid-flow-col justify-center w-[85%]   lg:h-[80vh]  pb-2 items-center"> 
  
<SideMiniNav ChangeSlide={slider=>setSlide(slider)} slideValue={slide} />
<div className="flex col-start-2 col-span-5 items-center  row-span-full gap-9  w-[600px] h-[600px] overflow-scroll " id="top-slider"> 

<img src={light_2} alt="" srcset=""  className='w-[500px] h-[520px] mt-20 mx-8 ' id="1" />
<img src={light_3} alt="" srcset=""  className='w-[500px] h-[520px] mt-20 mx-8' id="2" />
<img src={light_1} alt="" srcset=""  className='w-[700px] h-[520px]  mt-20 mx-8' id="3" />


</div>
<div className=" gap-1 lg:hidden flex ">
<div className={slide===1?sliderclass:sliderclassHide } onClick={()=>setSlide(1)}></div>
<div className={slide===2?sliderclass:sliderclassHide } onClick={()=>setSlide(2)}></div>
<div className={slide===3?sliderclass:sliderclassHide } onClick={()=>setSlide(3)}></div>


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
