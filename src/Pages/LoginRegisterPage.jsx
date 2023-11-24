import React, { useEffect, useRef, useState } from 'react'
import MotionInput from '../components/MotionInput'
import Loginform from '../sections/Loginform';
import Registerform from '../sections/Registerform';

const LoginRegisterPage = () => {

const[pageState,setPageState]=useState("login");









useEffect(
()=>{




},[])

 


  return (
    <div className='w-full h-auto flex justify-center items-center ' >


    {pageState==="login"? <Loginform click={clicker=>setPageState(clicker)}/> : <Registerform click={clicker=>setPageState(clicker)}/>  }

    
    
      




    </div>
  )
}

export default LoginRegisterPage
