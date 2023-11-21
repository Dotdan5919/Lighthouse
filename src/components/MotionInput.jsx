import React, { useEffect, useState } from 'react'

const MotionInput = (props) => {

    const [emptyInput,setEmptyInput]=useState(true);
    const [labelExtraClass,setExtraClass]=useState("top-4 left-10 ");
    const labelClass="text-white  left-10 transition-all absolute  duration-[400ms]   ease-in-out ";
    


let inputListner=document.getElementById("inputval");
    

    const handleChange=()=>

    {

    setExtraClass("   top-[-30px] left-[40px] text-[10px]");
    
    


    }


    useEffect(()=>
    
    
    {

       



    },[])


  return (
   
      
    <div className="flex relative flex-col w-3/4  h-auto  gap-2 items-center justify-center  ">
    <label htmlFor="" className={labelClass + " " +labelExtraClass} onClick={()=>{}}>{props.name}
    </label>
    <input type={props.type} className='w-[90%] p-4 outline-none rounded-sm text-white border-2 border-gray-100 bg-transparent inputval' id="inputval" onFocus={()=>handleChange()} value={""?setEmptyInput(true):setEmptyInput(false)} />
    
    
    </div>



   
  )
}

export default MotionInput
