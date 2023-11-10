import React from 'react'



const SideMiniNav = () => {
  return (
    <div className='lg:flex  hidden w-[50px] h-[100vh] py-2  items-center justify-center col-start-2 row-span-full'>
      <ul className='flex gap-3 flex-col'>
        <li className='text-white opacity-10 hover:opacity-100 cursor-pointer hover:before:block before:hidden before:h-[2px] justify-center items-center before:border-x-8 flex gap-2 hover:text-xl hover:font-bold transition-all duration-600 '>01</li>
        <li className='text-white opacity-10 hover:opacity-100 cursor-pointer hover:before:block before:hidden before:h-[2px] justify-center items-center before:border-x-8 flex gap-2  hover:text-xl hover:font-bold transition-all duration-600'>02</li>
        <li className='text-white opacity-10 hover:opacity-100 cursor-pointer hover:before:block before:hidden before:h-[2px] justify-center items-center before:border-x-8 flex gap-2  hover:text-xl hover:font-bold transition-all duration-600'>03</li>
      </ul>




    </div>
  )
}

export default SideMiniNav
