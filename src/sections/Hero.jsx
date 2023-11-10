import React from 'react'

import SideMiniNav from '../components/SideMiniNav'

import light_1  from '../Assets/images/light_1.png'
import Herofooter from '../components/Herofooter'
import RegularBtn from '../components/RegularBtn'

const Hero = () => {
  return (
    <div className='bg-myblack w-[100vw] lg:h-[100vh] sm:h-[130vh] lg:block flex flex-col items-center justify-center '>
      

<div className="lg:grid lg:grid-cols-12 flex flex-col gap-5   lg:grid-flow-col justify-center w-[85%]   lg:h-[80vh]  pb-2 items-center"> 
  
<SideMiniNav/>
<div className="flex col-start-2 col-span-5  row-span-full gap-9  w-auto h-[400px]"> 
<img src={light_1} alt="" srcset=""  className='w-[500px] h-[520px] mt-20'/>
</div>

<div className="flex flex-col gap-7 row-span-full   text-white items-start col-start-7 col-span-3 w-auto">
    <h1 className='font-bold text-6xl lg:w-[600px] leading-relaxed'>Designer <br/> Lighting Store</h1>
    <p className='lg:w-[600px]'>Order a lamp for an individual
project, with a 20% discount
right now.
Get an additional coupon for
ordering online and for pickup</p>
<RegularBtn name="Order Now"  type="white" />
    
</div>



</div>

<Herofooter/>
    </div>
  )
}

export default Hero
