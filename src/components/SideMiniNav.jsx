import React, { useState } from 'react'



const SideMiniNav = (props) => {

  
  
  const activeSlider=" opacity-100 cursor-pointer before:block  before:h-[2px]  before:border-x-8 text-xl font-bold  ";
  const inactiveSlider="text-white opacity-10  cursor-pointer   before:h-[2px] justify-center items-center  flex gap-2   transition-all duration-600 ";



  return (
    <div className='lg:flex  hidden w-[50px] h-[100vh] py-2  items-center justify-center col-start-2 row-span-full z-[999]'>
      <ul className='flex gap-3 flex-col'>
        <li className={inactiveSlider +" " +(props.slideValue===1?activeSlider:" ")} onClick={()=>{props.ChangeSlide(1)}}>01</li>
        <li className={inactiveSlider +" " +(props.slideValue===2?activeSlider:" ")} onClick={()=>{props.ChangeSlide(2)}}>02</li>
        <li className={inactiveSlider +" " +(props.slideValue===3?activeSlider:" ")} onClick={()=>{props.ChangeSlide(3)}}>03</li>
      </ul>




    </div>
  )
}

export default SideMiniNav

