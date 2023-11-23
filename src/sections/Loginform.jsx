import React from 'react'

import MotionInput from '../components/MotionInput'

const Loginform = ({click}) => {
  return (

      
    <form action="" className=" sm:w-[40%] w-[70%] sm:h-4/6 mt-[100px] py-5  h-4/5 rounded-md bg-myblack"  >
    
    <div className="flex flex-col justify-center items-center gap-10 w-full h-full ">
<h1 className='font-bold text-[30px] text-white'>Login</h1>
    
<MotionInput name="User Name" type="text" />
<MotionInput name="Password" type="password" />




  
    <div className='flex relative  w-3/4 h-auto gap-2 items-center justify-center '>
    <button className='w-[90%] bg-gray-400 text-white shadow-sm hover:shadow-lg rounded-md p-3 hover:bg-gray-700'>Submit</button>
    </div>
    
    <a className='text-white underline hover:text-gray-300 transition-all duration-200  cursor-pointer'  onClick={()=>click("Register")} >Sign Up</a>
    
    
    </div>






</form>
    
  )
}

export default Loginform
