import React from 'react'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center w-full h-[100vh] p-20'>
     
    
   <h1 className='h-10 font-bold text-[30px]'> Page not found </h1> 

<NavLink to="/"  exact className="bg bg-slate-600 flex items-center justify-center p-5 rounded-md w-45 h-20 hover:bg-slate-500 transition-all duration-500 hover:shadow-lg text-white">

    Return to home page

</NavLink>


    </div>
  )
}

export default NoPage
