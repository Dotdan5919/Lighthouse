import { faAward, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Herofooter = () => {
  return (
    <div className=' w-[85%]  mx-auto items-center text-white lg:gap-0 gap-3 pt-7  lg:grid flex  grid-cols-7 '>
      
<div  className='lg:flex 
 hidden gap-4'>
    <h1>Inst</h1>
    <h1>FB</h1>
    <h1>Tw</h1>
</div>   



<div className='flex flex-row gap-2  col-start-4 col-end-5 items-center row-span-full w-auto hover:text-yellow-100 transition-all duration-150 '> 
<FontAwesomeIcon icon={faLightbulb} className='text-[50px]'/>
<div className="flex flex-col gap-2">
    <h1 className='font-bold'>Durability</h1>
    <p className='text-[10px] w-20'>The service life of our lamb is 30years</p>
    </div>
    </div>

    <div className='flex col-start flex-row gap-2 col-start-5 items-center  w-auto hover:text-yellow-100 transition-all duration-150'> 
<FontAwesomeIcon icon={faAward} className='text-[50px]'/>
<div className="flex flex-col gap-2">
    <h1 className='font-bold'>Individual Style </h1>
    <p className='text-[10px] w-20'>All our lamps have a unique style</p>
    </div>
    </div>




</div>



    
  )
}

export default Herofooter
