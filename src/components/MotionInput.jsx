import React, { useEffect, useRef, useState } from 'react'

const MotionInput = (props) => {

    const [emptyInput,setEmptyInput]=useState(true);
    const [labelExtraClass,setExtraClass]=useState("top-4 left-10 ");
    const labelClass="text-white  left-10 transition-all absolute  duration-[400ms]   ease-in-out ";
    const inputRef= useRef(null);




    

    const handleChange=()=>

    {

     

    setExtraClass("   top-[-30px] left-[40px] text-[10px]");


 
   
    
    


    }



    const restore=()=>
    {

      if(inputRef.current.value===""){

        setExtraClass("top-4 left-10")

      }
      


    }

    // const handleValue =() =>

    // {

    //   ""?setEmptyInput(true):setEmptyInput(false);

      
    //   console.log(emptyInput);
      
    // }

    useEffect(()=>
    
    
    {

      // if(inputRef.current.value==="")
      // {

      //   setEmptyInput(true);
      // }
      // else{

      //   setEmptyInput(false);

      // }
     



    },[])


  return (
   
      
    <div className="flex relative flex-col w-3/4  h-auto  gap-2 items-center justify-center   ">
    <label htmlFor="" className={labelClass + " " +labelExtraClass} onClick={()=>{}}>{props.name}
    </label>
    
    <input type={props.type} ref={inputRef} className='w-[90%] p-4 outline-none rounded-sm text-white border-2 border-gray-100 bg-transparent inputval' id="inputval" onFocus={()=>handleChange()} onPointerLeave={()=>restore()} onMouseEnter={()=>handleChange()} />
    
    </div>


   
  )
}

export default MotionInput
